const technologyIconModules = import.meta.glob(
    '../assets/icons/technologies/*.webp',
    {
        eager: true,
        import: 'default',
    },
);

function getFilePath(fileName) {
    const iconPath = `../assets/icons/technologies/${fileName}`;
    const iconSource = technologyIconModules[iconPath];

    if (!iconSource) {
        throw new Error(`Technology icon not found: ${fileName}`);
    }

    return iconSource;
}

export const MY_SKILLS = [
    {
        id: 'ui-ux-design',
        title: 'UI UX Design',
        technologies: [
            {
                name: 'Figma',
                icon: getFilePath('figma.webp'),
            },
            {
                name: 'Adobe Xd',
                icon: getFilePath('adobe-xd.webp'),
            },
            {
                name: 'Framer',
                icon: getFilePath('framer.webp'),
            },
            {
                name: 'Miro',
                icon: getFilePath('miro.webp'),
            },
        ],
    },
    {
        id: 'frontend',
        title: 'Frontend',
        technologies: [
            {
                name: 'Tailwind',
                icon: getFilePath('tailwind-css.webp'),
            },
            {
                name: 'Astro',
                icon: getFilePath('astro.webp'),
            },
            {
                name: 'Angular',
                icon: getFilePath('angular.webp'),
            },
            {
                name: 'TypeScript',
                icon: getFilePath('typescript.webp'),
            },
            {
                name: 'JavaScript',
                icon: getFilePath('javascript.webp'),
            },
        ],
    },
    {
        id: 'backend',
        title: 'Backend',
        technologies: [
            {
                name: 'PostgreSQL',
                icon: getFilePath('postgresql.webp'),
            },
            {
                name: 'MySQL',
                icon: getFilePath('mysql.webp'),
            },
            /*{
                name: 'ASP.NET Core',
                icon: getFilePath('dot-net.webp'),
            },*/
            {
                name: 'NestJS',
                icon: getFilePath('nestjs.webp'),
            },
            {
                name: 'Express',
                icon: getFilePath('express.webp'),
            },
            {
                name: 'Node.js',
                icon: getFilePath('nodejs.webp'),
            },
        ],
    },
    {
        id: 'devops',
        title: 'DevOps',
        technologies: [
            {
                name: 'Azure',
                icon: getFilePath('azure.webp'),
            },
            {
                name: 'Docker',
                icon: getFilePath('docker.webp'),
            },
            {
                name: 'GitHub',
                icon: getFilePath('github.webp'),
            },
            {
                name: 'Git',
                icon: getFilePath('git.webp'),
            },
        ],
    },
    {
        id: 'pattern-design',
        title: 'Pattern Design',
        technologies: [
            {
                name: 'Factory Method',
                icon: getFilePath('pattern-design.webp'),
            },
            {
                name: 'Strategy',
                icon: getFilePath('pattern-design.webp'),
            },
            {
                name: 'Observer',
                icon: getFilePath('pattern-design.webp'),
            },
            {
                name: 'Adapter',
                icon: getFilePath('pattern-design.webp'),
            },
        ],
    },
    {
        id: 'software-architecture',
        title: 'Software Architecture',
        technologies: [
            {
                name: 'Microservices Architecture',
                icon: getFilePath('software-architecture.webp'),
            },
            {
                name: 'Clean Architecture',
                icon: getFilePath('software-architecture.webp'),
            },
            {
                name: 'SOLID',
                icon: getFilePath('software-architecture.webp'),
            },
        ],
    },
];