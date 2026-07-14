import './view-projects.css';

const PROJECT_DURATION_MS = 10000;
const FADE_DURATION_MS = 300;

const DEFAULT_PROJECTS = [
    {
        title: 'Notebook app',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description:
            'Aplicación web para crear, organizar y administrar notas personales mediante una interfaz clara, accesible y adaptable.',
        imageUrl: '/images/projects/notebook-app.webp',
        imageAlt: 'Vista previa del proyecto Notebook app',
        projectUrl: 'https://example.com/notebook-app',
        repositoryUrl: 'https://github.com/usuario/notebook-app'
    },
    {
        title: 'Finance dashboard',
        technologies: ['Angular', 'TypeScript', 'Express'],
        description:
            'Dashboard financiero para consultar balances, movimientos, ingresos, egresos y categorías asociadas a una cuenta.',
        imageUrl: '/images/projects/finance-dashboard.webp',
        imageAlt: 'Vista previa del proyecto Finance dashboard',
        projectUrl: 'https://example.com/finance-dashboard',
        repositoryUrl: 'https://github.com/usuario/finance-dashboard'
    },
    {
        title: 'Clock app',
        technologies: ['Vite', 'Web Components', 'CSS'],
        description:
            'Aplicación de reloj que integra temporizador, cronómetro y administración de alarmas mediante Custom Elements.',
        imageUrl: '/images/projects/clock-app.webp',
        imageAlt: 'Vista previa del proyecto Clock app',
        projectUrl: 'https://example.com/clock-app',
        repositoryUrl: 'https://github.com/usuario/clock-app'
    },
    {
        title: 'Portfolio',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description:
            'Portafolio profesional orientado a presentar proyectos, conocimientos técnicos y medios de contacto.',
        imageUrl: '/images/projects/portfolio.webp',
        imageAlt: 'Vista previa del proyecto Portfolio',
        projectUrl: 'https://example.com/portfolio',
        repositoryUrl: 'https://github.com/usuario/portfolio'
    }
];

export class viewProjects extends HTMLElement {

    #projects = DEFAULT_PROJECTS;

    #currentProjectIndex = 0;

    #rotationTimerId = null;

    #transitionTimerId = null;

    #isTransitioning = false;

    #pendingProjectIndex = null;

    #elements = {};

    constructor() {
        super();

        this.handleIndicatorClick =
            this.handleIndicatorClick.bind(this);
    }

    connectedCallback() {
        if (!this.#elements.root) {
            this.render();
            this.cacheElements();
            this.renderIndicators();
            this.preloadImages();

            this.showProject(0, {
                animate: false
            });
        }

        this.#elements.indicators.addEventListener(
            'click',
            this.handleIndicatorClick
        );
    }

    disconnectedCallback() {
        this.clearTimers();

        this.#elements.indicators?.removeEventListener(
            'click',
            this.handleIndicatorClick
        );
    }

    /**
     * Obtiene una copia de los proyectos configurados.
     *
     * @returns {Array<object>}
     */
    get projects() {
        return this.#projects.map((project) => ({
            ...project,
            technologies: [...project.technologies]
        }));
    }

    /**
     * Establece los proyectos que visualizará el componente.
     *
     * @param {Array<object>} projects
     */
    set projects(projects) {
        this.#projects = this.normalizeProjects(projects);
        this.#currentProjectIndex = 0;

        if (!this.#elements.root) {
            return;
        }

        this.clearTimers();
        this.renderIndicators();
        this.preloadImages();

        this.showProject(0, {
            animate: false
        });
    }

    /**
     * Muestra el proyecto ubicado en el índice recibido.
     *
     * @param {number} projectIndex
     * @param {{ animate?: boolean }} options
     */
    showProject(projectIndex, { animate = true } = {}) {
        const normalizedIndex = this.normalizeProjectIndex(projectIndex);

        this.clearRotationTimer();

        if (
            normalizedIndex === this.#currentProjectIndex
            && !this.#isTransitioning
        ) {
            this.updateIndicators();
            this.scheduleNextProject();
            return;
        }

        if (this.#isTransitioning) {
            this.#pendingProjectIndex = normalizedIndex;
            return;
        }

        if (!animate) {
            this.updateProject(normalizedIndex);
            this.scheduleNextProject();
            return;
        }

        this.transitionToProject(normalizedIndex);
    }

    render() {
        this.innerHTML = `
            <section
                class="view-projects"
                aria-label="Proyectos destacados"
                aria-roledescription="carrusel"
            >
                <div
                    class="view-projects__slide"
                    data-project-slide
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <article class="view-projects__information">
                        <h2
                            class="view-projects__title"
                            data-project-title
                        >Notebook app</h2>

                        <ul
                            class="view-projects__technologies"
                            data-project-technologies
                            aria-label="Tecnologías utilizadas"
                        >
                            <li class="view-projects__technology">
                            HTML
                            </li>
                            <li class="view-projects__technology">
                            CSS
                            </li>
                            <li class="view-projects__technology">
                            JavaScript
                            </li>
                        </ul>

                        <p
                            class="view-projects__description"
                            data-project-description
                        >
                        Aplicación web para crear, organizar y administrar notas personales mediante una interfaz clara, accesible y adaptable.
                        </p>

                        <div class="view-projects__actions">
                            <a
                                class="
                                    view-projects__action
                                    view-projects__action--primary
                                "
                                href="https://example.com/notebook-app"
                                data-project-link
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Abrir proyecto
                            </a>

                            <a
                                class="
                                    view-projects__action
                                    view-projects__action--repository
                                "
                                href="https://github.com/usuario/notebook-app"
                                data-repository-link
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Abrir repositorio en GitHub"
                                title="Ver repositorio en GitHub"
                            >
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    width="28"
                                    height="28"
                                >
                                    <path
                                        fill="currentColor"
                                        d="
                                            M12 .7a11.5 11.5 0 0 0-3.64
                                            22.41c.58.11.79-.25.79-.56
                                            v-2.02c-3.22.7-3.9-1.37-3.9-1.37
                                            -.53-1.34-1.29-1.7-1.29-1.7
                                            -1.05-.72.08-.71.08-.71
                                            1.16.08 1.77 1.19 1.77 1.19
                                            1.03 1.77 2.7 1.26 3.36.96
                                            .1-.75.4-1.26.73-1.55
                                            -2.57-.29-5.27-1.28-5.27-5.69
                                            0-1.26.45-2.29 1.19-3.09
                                            -.12-.29-.52-1.47.11-3.05
                                            0 0 .97-.31 3.16 1.18
                                            a10.93 10.93 0 0 1 5.75 0
                                            c2.19-1.49 3.16-1.18 3.16-1.18
                                            .63 1.58.23 2.76.11 3.05
                                            .74.8 1.19 1.83 1.19 3.09
                                            0 4.42-2.71 5.39-5.29 5.68
                                            .42.36.79 1.07.79 2.17
                                            v3.22c0 .31.21.68.8.56
                                            A11.5 11.5 0 0 0 12 .7Z
                                        "
                                    />
                                </svg>

                                <span class="view-projects__visually-hidden">
                                    Ver repositorio en GitHub
                                </span>
                            </a>
                        </div>
                    </article>

                    <figure class="view-projects__preview">
                        <img
                            src="/images/projects/notebook-app.webp"
                            alt="Vista previa del proyecto Notebook app"
                            class="view-projects__image"
                            data-project-image
                            decoding="async"
                        />
                    </figure>
                </div>

                <div
                    class="view-projects__indicators"
                    data-project-indicators
                    role="group"
                    aria-label="Seleccionar proyecto"
                ></div>
            </section>
        `;
    }

    cacheElements() {
        this.#elements = {
            root: this.querySelector('.view-projects'),
            slide: this.querySelector('[data-project-slide]'),
            title: this.querySelector('[data-project-title]'),
            technologies: this.querySelector(
                '[data-project-technologies]'
            ),
            description: this.querySelector(
                '[data-project-description]'
            ),
            image: this.querySelector('[data-project-image]'),
            projectLink: this.querySelector('[data-project-link]'),
            repositoryLink: this.querySelector(
                '[data-repository-link]'
            ),
            indicators: this.querySelector(
                '[data-project-indicators]'
            )
        };

        this.#elements.root.style.setProperty(
            '--project-duration',
            `${PROJECT_DURATION_MS}ms`
        );
    }

    renderIndicators() {
        const fragment = document.createDocumentFragment();

        this.#projects.forEach((project, projectIndex) => {
            const button = document.createElement('button');
            const track = document.createElement('span');
            const progress = document.createElement('span');

            button.type = 'button';
            button.className = 'view-projects__indicator';
            button.dataset.projectIndex = String(projectIndex);

            button.setAttribute(
                'aria-label',
                `Mostrar proyecto ${projectIndex + 1}: ${project.title}`
            );

            track.className = 'view-projects__indicator-track';
            progress.className = 'view-projects__indicator-progress';

            track.append(progress);
            button.append(track);
            fragment.append(button);
        });

        this.#elements.indicators.replaceChildren(fragment);
    }

    updateProject(projectIndex) {
        const project = this.#projects[projectIndex];

        this.#currentProjectIndex = projectIndex;

        this.#elements.title.textContent = project.title;
        this.#elements.description.textContent = project.description;

        this.renderTechnologies(project.technologies);

        this.#elements.image.src = project.imageUrl;
        this.#elements.image.alt = project.imageAlt;

        this.configureLink(
            this.#elements.projectLink,
            project.projectUrl
        );

        this.configureLink(
            this.#elements.repositoryLink,
            project.repositoryUrl
        );

        this.updateIndicators();

        this.dispatchEvent(
            new CustomEvent('projectchange', {
                bubbles: true,
                detail: {
                    projectIndex,
                    project
                }
            })
        );
    }

    renderTechnologies(technologies) {
        const fragment = document.createDocumentFragment();

        technologies.forEach((technology) => {
            const technologyItem = document.createElement('li');

            technologyItem.className =
                'view-projects__technology';

            technologyItem.textContent = technology;

            fragment.append(technologyItem);
        });

        this.#elements.technologies.replaceChildren(fragment);
    }

    updateIndicators() {
        const indicators = this.#elements.indicators.querySelectorAll(
            '.view-projects__indicator'
        );

        indicators.forEach((indicator, projectIndex) => {
            const isActive =
                projectIndex === this.#currentProjectIndex;

            indicator.classList.remove(
                'is-active',
                'is-running',
                'is-complete'
            );

            indicator.setAttribute(
                'aria-pressed',
                String(isActive)
            );

            if (!isActive) {
                return;
            }

            indicator.classList.add('is-active');

            if (this.#projects.length === 1) {
                indicator.classList.add('is-complete');
                return;
            }

            /*
             * Fuerza un reflow para reiniciar la animación
             * cuando se selecciona nuevamente el mismo proyecto.
             */
            void indicator.offsetWidth;

            indicator.classList.add('is-running');
        });
    }

    transitionToProject(projectIndex) {
        this.#isTransitioning = true;

        this.#elements.slide.classList.add('is-leaving');
        this.#elements.slide.setAttribute('aria-busy', 'true');

        this.#transitionTimerId = window.setTimeout(() => {
            this.updateProject(projectIndex);

            this.#elements.slide.classList.remove('is-leaving');
            this.#elements.slide.classList.add('is-entering');

            window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                    this.#elements.slide.classList.remove(
                        'is-entering'
                    );

                    this.#elements.slide.removeAttribute('aria-busy');

                    this.#isTransitioning = false;
                    this.scheduleNextProject();
                    this.processPendingProject();
                });
            });
        }, FADE_DURATION_MS);
    }

    processPendingProject() {
        if (this.#pendingProjectIndex === null) {
            return;
        }

        const pendingProjectIndex = this.#pendingProjectIndex;

        this.#pendingProjectIndex = null;

        if (pendingProjectIndex === this.#currentProjectIndex) {
            return;
        }

        this.showProject(pendingProjectIndex);
    }

    scheduleNextProject() {
        this.clearRotationTimer();

        if (this.#projects.length <= 1) {
            return;
        }

        this.#rotationTimerId = window.setTimeout(() => {
            const nextProjectIndex =
                (this.#currentProjectIndex + 1)
                % this.#projects.length;

            this.showProject(nextProjectIndex);
        }, PROJECT_DURATION_MS);
    }

    handleIndicatorClick(event) {
        const indicator = event.target.closest(
            '[data-project-index]'
        );

        if (
            !indicator
            || !this.#elements.indicators.contains(indicator)
        ) {
            return;
        }

        const projectIndex = Number(
            indicator.dataset.projectIndex
        );

        this.showProject(projectIndex);
    }

    configureLink(linkElement, url) {
        if (!url) {
            linkElement.hidden = true;
            linkElement.removeAttribute('href');
            return;
        }

        linkElement.hidden = false;
        linkElement.href = url;
    }

    preloadImages() {
        this.#projects.forEach(({ imageUrl }) => {
            const image = new Image();

            image.src = imageUrl;
        });
    }

    normalizeProjectIndex(projectIndex) {
        const totalProjects = this.#projects.length;

        return (
            (Number(projectIndex) % totalProjects)
            + totalProjects
        ) % totalProjects;
    }

    normalizeProjects(projects) {
        if (!Array.isArray(projects) || projects.length === 0) {
            throw new TypeError(
                'La propiedad projects debe recibir un arreglo con al menos un proyecto.'
            );
        }

        return projects.map((project, projectIndex) => {
            const hasValidTechnologies =
                Array.isArray(project.technologies)
                && project.technologies.length > 0;

            if (
                !project.title
                || !project.description
                || !project.imageUrl
                || !hasValidTechnologies
            ) {
                throw new TypeError(
                    `El proyecto ubicado en el índice ${projectIndex} no contiene la información requerida.`
                );
            }

            return {
                title: String(project.title),
                technologies: project.technologies.map(String),
                description: String(project.description),
                imageUrl: String(project.imageUrl),
                imageAlt: String(
                    project.imageAlt
                    ?? `Vista previa de ${project.title}`
                ),
                projectUrl: String(project.projectUrl ?? ''),
                repositoryUrl: String(
                    project.repositoryUrl ?? ''
                )
            };
        });
    }

    clearRotationTimer() {
        if (this.#rotationTimerId === null) {
            return;
        }

        window.clearTimeout(this.#rotationTimerId);
        this.#rotationTimerId = null;
    }

    clearTimers() {
        this.clearRotationTimer();

        if (this.#transitionTimerId !== null) {
            window.clearTimeout(this.#transitionTimerId);
            this.#transitionTimerId = null;
        }
    }
}

if (!customElements.get('app-view-projects')) {
    customElements.define('app-view-projects',viewProjects);
}