/**
 * Styles
 */
import './app-skills-matrix.css';

/**
 * Data
 */
import { MY_SKILLS } from '../../../data/skills.js';

const HTML_ENTITIES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
};

function escapeHTML(value) {
    return String(value ?? '').replace(
        /[&<>"']/g,
        (character) => HTML_ENTITIES[character],
    );
}

export class GroupedList extends HTMLElement {
    #groups = MY_SKILLS;

    connectedCallback() {
        this.render();
    }

    get groups() {
        return this.#groups;
    }

    set groups(value) {
        if (!Array.isArray(value)) {
            throw new TypeError(
                'The groups property must receive an array.',
            );
        }

        this.#groups = value;

        if (this.isConnected) {
            this.render();
        }
    }

    render() {
        this.setHTMLUnsafe(`
            <section
                aria-label="Stack tecnológico por profesión"
            >
                <ul class="skills-matrix__groups">
                    ${this.#createGroupsTemplate()}
                </ul>
            </section>
        `);
    }

    #createGroupsTemplate() {
        return this.#groups
            .map((group) => this.#createGroupTemplate(group))
            .join('');
    }

    #createGroupTemplate(group) {
        const technologies = Array.isArray(group.technologies)
            ? group.technologies
            : [];

        const groupId = escapeHTML(group.id);
        const groupTitle = escapeHTML(group.title);

        return `
            <li
                class="skills-matrix__group"
                data-group="${groupId}"
            >
                <div class="skills-matrix__heading">
                    <h3 class="skills-matrix__title">
                        ${groupTitle}
                    </h3>
                </div>

                <ul
                    class="skills-matrix__technologies"
                    aria-label="Tecnologías de ${groupTitle}"
                >
                    ${technologies
            .map((technology) =>
                this.#createTechnologyTemplate(technology),
            )
            .join('')}
                </ul>
            </li>
        `;
    }

    #createTechnologyTemplate(technology) {
        const technologyName = escapeHTML(technology.name);
        const technologyIcon = escapeHTML(technology.icon);

        return `
            <li class="skills-matrix__technology">
                <div class="skills-matrix__technology-icon">
                    <img
                        src="${technologyIcon}"
                        alt=""
                        width="36"
                        height="36"
                        loading="lazy"
                        decoding="async"
                    >
                </div>

                <span class="skills-matrix__technology-name">
                    ${technologyName}
                </span>
            </li>
        `;
    }
}

customElements.define('app-skills-matrix', GroupedList);