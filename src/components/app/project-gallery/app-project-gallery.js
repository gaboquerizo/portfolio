/**
 * Styles
 */
import './app-project-gallery.css';

/**
 * Data
 */
import { MY_PROJECTS } from '../../../data/projects.js';

// ☑️ TODO: (responsive) disminuir el padding del contenido del CARD
// TODO: Agregar boton para ver ir al proyecto y otro para ir al repositorio

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