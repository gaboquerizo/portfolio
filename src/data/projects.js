export const MY_PROJECTS = Object.freeze([
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