function getFilePath(fileName) {
    return `src/assets/icons/technologies/${fileName}.webp`;
}

export const MY_SKILLS = [
    {
        id: 'ui-ux-design',
        title: 'UI UX Design',
        technologies: [
            {
                name: 'Figma',
                icon: getFilePath('figma'),
            },
            {
                name: 'Adobe Xd',
                icon: getFilePath('adobe-xd'),
            },
            {
                name: 'Framer',
                icon: getFilePath('framer'),
            },
            {
                name: 'Miro',
                icon: getFilePath('miro'),
            },
        ],
    },
    {
        id: 'frontend',
        title: 'Frontend',
        technologies: [
            {
                name: 'Tailwind',
                icon: getFilePath('tailwind-css'),
            },
            {
                name: 'Astro',
                icon: getFilePath('astro'),
            },
            {
                name: 'Angular',
                icon: getFilePath('angular'),
            },
            {
                name: 'TypeScript',
                icon: getFilePath('typescript'),
            },
            {
                name: 'JavaScript',
                icon: getFilePath('javascript'),
            },
        ],
    },
    {
        id: 'backend',
        title: 'Backend',
        technologies: [
            {
                name: 'PostgreSQL',
                icon: getFilePath('postgresql'),
            },
            {
                name: 'MySQL',
                icon: getFilePath('mysql'),
            },
            /*{
                name: 'ASP.NET Core',
                icon: getFilePath('dot-net'),
            },*/
            {
                name: 'NestJS',
                icon: getFilePath('nestjs'),
            },
            {
                name: 'Express',
                icon: getFilePath('express'),
            },
            {
                name: 'Node.js',
                icon: getFilePath('nodejs'),
            },
        ],
    },
    {
        id: 'devops',
        title: 'DevOps',
        technologies: [
            {
                name: 'Azure',
                icon: getFilePath('azure'),
            },
            {
                name: 'Docker',
                icon: getFilePath('docker'),
            },
            {
                name: 'GitHub',
                icon: getFilePath('github'),
            },
            {
                name: 'Git',
                icon: getFilePath('git'),
            },
        ],
    },
    {
        id: 'pattern-design',
        title: 'Pattern Design',
        technologies: [
            {
                name: 'Factory Method',
                icon: getFilePath('pattern-design'),
            },
            {
                name: 'Strategy',
                icon: getFilePath('pattern-design'),
            },
            {
                name: 'Observer',
                icon: getFilePath('pattern-design'),
            },
            {
                name: 'Adapter',
                icon: getFilePath('pattern-design'),
            },
        ],
    },
    {
        id: 'software-architecture',
        title: 'Software Architecture',
        technologies: [
            {
                name: 'Microservices Architecture',
                icon: getFilePath('software-architecture'),
            },
            {
                name: 'Clean Architecture',
                icon: getFilePath('software-architecture'),
            },
            {
                name: 'SOLID',
                icon: getFilePath('software-architecture'),
            },
        ],
    },
];