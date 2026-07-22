import './time-line.css';

const EXPERIENCES = [
    {
        position: 'AGENTE DE SOPORTE IT',
        company: 'Grupo KFC Ecuador',
        period: 'Nov. 2024 — Actualidad',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dignissimos, doloremque distinctio animi reprehenderit exercitationem.',
        achievements: [
            'Desarrollo de componentes reutilizables con JavaScript.',
            'Optimización del rendimiento general de la interfaz.',
            'Implementación de estándares de accesibilidad web.',
        ],
    },
    {
        position: 'EJECUTIVO DE CUENTAS',
        company: 'Qbit',
        period: 'Dic. 2023 — Mar. 2024',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita consequatur provident molestias reiciendis veniam voluptatibus.',
        achievements: [
            'Migración de módulos heredados a una arquitectura modular.',
            'Reducción de código duplicado mediante componentes compartidos.',
            'Integración de servicios REST para gestionar información.',
        ],
    },
    {
        position: 'ANALISTA DE DATOS',
        company: 'Servicobranzas S.A',
        period: 'Sep. 2023 — Dic. 2023',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam exercitationem recusandae excepturi molestiae soluta voluptatum.',
        achievements: [
            'Automatización del registro y seguimiento de solicitudes.',
            'Creación de paneles para visualizar indicadores operativos.',
            'Documentación técnica de los principales módulos.',
        ],
    },
    {
        position: 'WEB MASTER',
        company: 'Credacart.com',
        period: 'Ago. 2021 — May. 2023',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ullam inventore praesentium atque voluptate temporibus.',
        achievements: [
            'Construcción de interfaces responsivas.',
            'Aplicación de HTML semántico y CSS modular.',
            'Corrección de incompatibilidades entre navegadores.',
        ],
    },
];

export class TimeLine extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const experiencesTemplate = EXPERIENCES.map(
            (experience, index) => `
                <article
                    class="item ${
                index % 2 === 0
                    ? 'item--right'
                    : 'item--left'
            }"
                    role="listitem"
                >
                    <div class="period">
                        <time>${experience.period}</time>
                    </div>

                    <span
                        class="marker"
                        aria-hidden="true"
                    ></span>

                    <div class="card">
                        <header class="header">
                            <h3 class="position">
                                ${experience.position}
                            </h3>

                            <p class="company">
                                ${experience.company}
                            </p>
                        </header>

                        <p class="description">
                            ${experience.description}
                        </p>

                        <section class="achievements">
                            <h4 class="achievements-title">
                                Logros
                            </h4>

                            <ul class="achievements-list">
                                ${experience.achievements
                .map(
                    (achievement) => `
                                            <li class="achievement">
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

        this.setHTMLUnsafe(`
            <section
                class="time-line"
                aria-label="Experiencia profesional"
            >
                <div class="list" role="list">
                    ${experiencesTemplate}
                </div>
            </section>
        `);
    }
}

customElements.define('app-time-line', TimeLine);