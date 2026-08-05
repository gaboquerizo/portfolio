import './app-time-line.css';

import { MY_EXPERIENCES } from '../../../data/experience.js';

export class TimeLine extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const experiencesTemplate = MY_EXPERIENCES.map(
            (experience, index) => `
                <article
                    class="time-line__item ${
                index % 2 === 0
                    ? 'time-line__item--right'
                    : 'time-line__item--left'
            }"
                    role="listitem"
                >
                    <div class="time-line__period">
                        <time>${experience.period}</time>
                    </div>

                    <span
                        class="time-line__marker"
                        aria-hidden="true"
                    ></span>

                    <div class="time-line__card">
                        <header class="time-line__header">
                            <h3 class="time-line__position">
                                ${experience.position}
                            </h3>

                            <p class="time-line__company">
                                ${experience.company}
                            </p>
                        </header>

                        <p class="time-line__description">
                            ${experience.description}
                        </p>

                        <section class="time-line__achievements">
                            <h4 class="time-line__achievements-title">
                                Logros
                            </h4>

                            <ul class="time-line__achievements-list">
                                ${experience.achievements
                .map(
                    (achievement) => `
                                            <li class="time-line__achievement">
                                                ${achievement}
                                            </li>
                                        `,
                )
                .join('')}
                            </ul>
                        </section>
                    </div>
                </article>
            `,
        ).join('');

        const HTMLContent = `
            <section
                class="time-line"
                aria-label="Experiencia profesional"
            >
                <div class="time-line__list" role="list">
                    ${experiencesTemplate}
                </div>
            </section>
        `;

        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-time-line', TimeLine);