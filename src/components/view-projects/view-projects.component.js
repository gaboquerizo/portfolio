import '../app-button/app-button.js';
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
        const normalizedProjectIndex =
            this.normalizeProjectIndex(projectIndex);

        this.clearRotationTimer();

        if (!animate) {
            this.updateProject(normalizedProjectIndex);
            this.scheduleNextProject();

            return;
        }

        if (
            normalizedProjectIndex === this.#currentProjectIndex
            && !this.#isTransitioning
        ) {
            this.updateIndicators();
            this.scheduleNextProject();

            return;
        }

        if (this.#isTransitioning) {
            this.#pendingProjectIndex = normalizedProjectIndex;

            return;
        }

        this.transitionToProject(normalizedProjectIndex);
    }

    render() {
        this.innerHTML = `
            <section
                class="gap-9 view-projects"
                aria-label="Proyectos destacados"
                aria-roledescription="carrusel"
            >
                <div
                    class="slide"
                    data-project-slide
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <article class="fx-col fx-ali_s information">
                        <h3
                            class="title"
                            data-project-title
                        >Notebook app</h3>

                        <ul
                            class="gap-3 technologies"
                            data-project-technologies
                            aria-label="Tecnologías utilizadas"
                        >
                            <li class="technology">
                            HTML
                            </li>
                            <li class="technology">
                            CSS
                            </li>
                            <li class="technology">
                            JavaScript
                            </li>
                        </ul>

                        <p
                            class="description"
                            data-project-description
                        >
                        Aplicación web para crear, organizar y administrar notas personales mediante una interfaz clara, accesible y adaptable.
                        </p>

                        <div class="gap-4 actions">
                            <app-button
                                primary
                                class="action--project"
                                data-project-link
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Abrir proyecto
                            </app-button>
                        
                            <app-button
                                ghost
                                class="action--repository"
                                data-repository-link
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Ver repositorio en GitHub"
                                title="Ver repositorio en GitHub"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943"></path>
                                </svg>                        
                                <span class="visually-hidden">
                                    Ver repositorio en GitHub
                                </span>
                            </app-button>
                        </div>
                    </article>

                    <figure class="preview">
                        <img
                            src="/images/projects/notebook-app.webp"
                            alt="Vista previa del proyecto Notebook app"
                            class="image"
                            data-project-image
                            decoding="async"
                        />
                    </figure>
                </div>

                <div
                    class="indicators"
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
            button.className = 'indicator';
            button.dataset.projectIndex = String(projectIndex);

            button.setAttribute(
                'aria-label',
                `Mostrar proyecto ${projectIndex + 1}: ${project.title}`
            );

            track.className = 'indicator-track';
            progress.className = 'indicator-progress';

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
                'technology';

            technologyItem.textContent = technology;

            fragment.append(technologyItem);
        });

        this.#elements.technologies.replaceChildren(fragment);
    }

    updateIndicators() {
        const indicators = this.#elements.indicators.querySelectorAll(
            '.indicator'
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

    configureLink(buttonElement, url) {
        const normalizedUrl = String(url ?? '').trim();

        if (!normalizedUrl) {
            buttonElement.hidden = true;
            buttonElement.removeAttribute('href');
            buttonElement.removeAttribute('target');
            buttonElement.removeAttribute('rel');

            return;
        }

        buttonElement.hidden = false;
        buttonElement.setAttribute('href', normalizedUrl);
        buttonElement.setAttribute('target', '_blank');
        buttonElement.setAttribute(
            'rel',
            'noopener noreferrer'
        );
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