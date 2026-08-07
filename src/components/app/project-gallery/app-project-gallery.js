/*—————————— Styles ——————————*/
import './app-project-gallery.css';

/*—————————— Data ——————————*/
import { MY_PROJECTS } from '../../../data/projects.js';

const PROJECT_CATEGORIES = Object.freeze([
    Object.freeze({
        value: 'ui-ux',
        label: 'UI/UX',
    }),
    Object.freeze({
        value: 'frontend',
        label: 'Frontend',
    }),
    Object.freeze({
        value: 'backend',
        label: 'Backend',
    }),
]);

export class ProjectGallery extends HTMLElement {
    constructor() {
        super();
        this.handleFilterChange = this.handleFilterChange.bind(this)
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    disconnectedCallback() {
        this.removeEventListeners();
    }

    addEventListeners() {
        this.addEventListener('change', this.handleFilterChange);
    }

    removeEventListeners() {
        this.removeEventListener('change', this.handleFilterChange);
    }

    handleFilterChange(event) {
        const selectedCheckbox = event.target.closest(
            '.project-gallery__filter-input',
        );

        if (!selectedCheckbox) {
            return;
        }

        // Evita que el usuario deje todas las categorías sin seleccionar.

        if (!selectedCheckbox.checked) {
            selectedCheckbox.checked = true;
            return;
        }

        // Mantiene solo una categoría seleccionada.

        this.querySelectorAll(
            '.project-gallery__filter-input',
        ).forEach((checkbox) => {
            if (checkbox !== selectedCheckbox) {
                checkbox.checked = false;
            }
        });
    }

    renderFilters() {
        return PROJECT_CATEGORIES.map(
            ({ value, label }, index) => `
                <label class="project-gallery__filter">
                    <input
                        class="project-gallery__filter-input"
                        type="checkbox"
                        name="project-category"
                        value="${value}"
                        ${index === 0 ? 'checked' : ''}
                    >

                    <span class="project-gallery__filter-label">
                        ${label}
                    </span>
                </label>
            `,
        ).join('');
    }

    renderProjects() {
        return MY_PROJECTS.map(
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
                    <h3 class="project-gallery__title">
                        ${name}
                    </h3>

                    <p class="project-gallery__description">
                        ${description}
                    </p>

                    <div
                        class="project-gallery__tech"
                        aria-label="Tecnologías utilizadas"
                    >
                        ${technologies.map((technology) => `
                            <span class="project-gallery__badge">
                                ${technology}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </a>
        `,
        ).join('');
    }

    render() {
        const HTMLContent = `
            <section
                class="project-gallery"
                aria-label="Galería de proyectos"
            >
                <div
                    class="project-gallery__filters"
                    role="group"
                    aria-label="Filtrar proyectos por categoría"
                >
                    <!--
                    <svg class="svg-static" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3z" />
                    </svg>
                    -->
                    <svg class="svg-static" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.857 12.506C6.37 10.646 4.596 8.6 3.627 7.45c-.3-.356-.398-.617-.457-1.076c-.202-1.572-.303-2.358.158-2.866S4.604 3 6.234 3h11.532c1.63 0 2.445 0 2.906.507c.461.508.36 1.294.158 2.866c-.06.459-.158.72-.457 1.076c-.97 1.152-2.747 3.202-5.24 5.065a1.05 1.05 0 0 0-.402.747c-.247 2.731-.475 4.227-.617 4.983c-.229 1.222-1.96 1.957-2.888 2.612c-.552.39-1.222-.074-1.293-.678a196 196 0 0 1-.674-6.917a1.05 1.05 0 0 0-.402-.755" />
                    </svg>
                    ${this.renderFilters()}
                </div>

                <div class="project-gallery__grid">
                    ${this.renderProjects()}
                </div>
            </section>
        `;

        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-project-gallery', ProjectGallery,);