import './app-project-gallery.css';

const PROJECT_CATEGORIES = Object.freeze([
    Object.freeze({
        value: 'frontend',
        label: 'Frontend',
    }),
    Object.freeze({
        value: 'backend',
        label: 'Backend',
    }),
    Object.freeze({
        value: 'ui-ux',
        label: 'UI/UX',
    }),
]);

export const DEFAULT_PROJECTS = Object.freeze([
    Object.freeze({
        id: 'notebook-app',
        category: 'frontend',
        name: 'Notebook app',
        description:
            'Aplicación web para crear, organizar y consultar notas personales.',
        technologies: Object.freeze(['HTML', 'CSS', 'JavaScript']),
        image: new URL(
            '../../assets/images/projects/notebook-app.webp',
            import.meta.url,
        ).href,
        imageAlternative: 'Vista previa del proyecto Notebook app',
    }),
    Object.freeze({
        id: 'portfolio-personal',
        category: 'frontend',
        name: 'Portfolio personal',
        description:
            'Portafolio desarrollado con Web Components y JavaScript Vanilla.',
        technologies: Object.freeze([
            'Vite',
            'CSS',
            'Web Components',
        ]),
        image: new URL(
            '../../assets/images/projects/portfolio.webp',
            import.meta.url,
        ).href,
        imageAlternative: 'Vista previa del portafolio personal',
    }),
    Object.freeze({
        id: 'inventory-api',
        category: 'backend',
        name: 'Inventory API',
        description:
            'API REST para administrar productos, categorías y existencias.',
        technologies: Object.freeze([
            'Node.js',
            'Express',
            'MySQL',
        ]),
        image: new URL(
            '../../assets/images/projects/inventory-api.webp',
            import.meta.url,
        ).href,
        imageAlternative: 'Vista previa del proyecto Inventory API',
    }),
    Object.freeze({
        id: 'finances-api',
        category: 'backend',
        name: 'Finances API',
        description:
            'Servicio backend para gestionar cuentas y transacciones financieras.',
        technologies: Object.freeze([
            'TypeScript',
            'Express',
            'TypeORM',
        ]),
        image: new URL(
            '../../assets/images/projects/finances-api.webp',
            import.meta.url,
        ).href,
        imageAlternative: 'Vista previa del proyecto Finances API',
    }),
    Object.freeze({
        id: 'dashboard-ui',
        category: 'ui-ux',
        name: 'Dashboard UI',
        description:
            'Diseño de una interfaz administrativa orientada a la visualización de datos.',
        technologies: Object.freeze([
            'Figma',
            'UI Design',
            'Prototyping',
        ]),
        image: new URL(
            '../../assets/images/projects/dashboard-ui.webp',
            import.meta.url,
        ).href,
        imageAlternative: 'Vista previa del diseño Dashboard UI',
    }),
    Object.freeze({
        id: 'clock-app-ui',
        category: 'ui-ux',
        name: 'Clock app UI',
        description:
            'Diseño de interfaz para una aplicación de reloj y temporizadores.',
        technologies: Object.freeze([
            'Figma',
            'Wireframe',
            'UX',
        ]),
        image: new URL(
            '../../assets/images/projects/clock-ui.webp',
            import.meta.url,
        ).href,
        imageAlternative: 'Vista previa del diseño Clock app UI',
    }),
]);

export class ProjectGallery extends HTMLElement {
    constructor() {
        super();

        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();

        const initialCategory =
            this.getAttribute('active-category') ??
            PROJECT_CATEGORIES[0].value;

        this.selectCategory(initialCategory);
    }

    disconnectedCallback() {
        this.removeEventListeners();
    }

    addEventListeners() {
        this.addEventListener('click', this.handleFilterClick);
    }

    removeEventListeners() {
        this.removeEventListener('click', this.handleFilterClick);
    }

    handleFilterClick(event) {
        const filterButton = event.target.closest(
            '[data-filter-category]',
        );

        if (!filterButton || !this.contains(filterButton)) {
            return;
        }

        const selectedCategory =
            filterButton.dataset.filterCategory;

        this.selectCategory(selectedCategory);
    }

    selectCategory(category) {
        const categoryExists = PROJECT_CATEGORIES.some(
            ({ value }) => value === category,
        );

        const selectedCategory = categoryExists
            ? category
            : PROJECT_CATEGORIES[0].value;

        const galleryElement = this.querySelector(
            '.project-gallery',
        );

        if (!galleryElement) {
            return;
        }

        galleryElement.dataset.activeCategory =
            selectedCategory;

        this.querySelectorAll(
            '[data-filter-category]',
        ).forEach((filterButton) => {
            const isSelected =
                filterButton.dataset.filterCategory ===
                selectedCategory;

            filterButton.classList.toggle(
                'project-gallery__filter--active',
                isSelected,
            );

            filterButton.setAttribute(
                'aria-pressed',
                String(isSelected),
            );
        });
    }

    renderFilters() {
        return PROJECT_CATEGORIES.map(
            ({ value, label }) => `
                <button
                    class="project-gallery__filter"
                    type="button"
                    data-filter-category="${value}"
                    aria-pressed="false"
                >
                    ${label}
                </button>
            `,
        ).join('');
    }

    renderProjects() {
        return DEFAULT_PROJECTS.map(
            ({
                 id,
                 category,
                 name,
                 description,
                 technologies,
                 repository,
                 image,
                 imageAlternative,
             }) => `
            <a
                class="project-gallery__card"
                data-project-id="${id}"
                data-project-category="${category}"
                href="${repository}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir el repositorio de ${name} en GitHub"
            >
                <div class="project-gallery__picture">
                    <img
                        class="project-gallery__image"
                        src="${image}"
                        alt="${imageAlternative}"
                        width="640"
                        height="400"
                        loading="lazy"
                    >
                </div>

                <div class="project-gallery__content">
                    <h3 class="project-gallery__name">
                        ${name}
                    </h3>

                    <p class="project-gallery__description">
                        ${description}
                    </p>

                    <div
                        class="project-gallery__technologies"
                        aria-label="Tecnologías utilizadas"
                    >
                        ${technologies
                .map(
                    (technology) => `
                                    <span class="project-gallery__badge">
                                        ${technology}
                                    </span>
                                `,
                )
                .join('')}
                    </div>
                </div>
            </a>
        `,
        ).join('');
    }

    render() {
        this.setHTMLUnsafe(`
            <section
                class="project-gallery"
                data-active-category="frontend"
                aria-label="Galería de proyectos"
            >
                <div
                    class="project-gallery__filters"
                    role="group"
                    aria-label="Filtrar proyectos por categoría"
                >
                    ${this.renderFilters()}
                </div>

                <div class="project-gallery__grid">
                    ${this.renderProjects()}
                </div>
            </section>
        `);
    }
}

if (!customElements.get('app-project-gallery')) {
    customElements.define(
        'app-project-gallery',
        ProjectGallery,
    );
}
