export const MY_CONTACT = Object.freeze({
    contacts: Object.freeze([
        Object.freeze({
            id: 'email',
            label: 'Email',
            value: 'email@gmail.com',
            href: 'mailto:email@gmail.com',
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><path d="m2 5l6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 5"/><path stroke-linecap="round" d="M10.5 19.5a116 116 0 0 1-1.401-.027c-3.149-.079-4.723-.118-5.854-1.255c-1.131-1.136-1.164-2.67-1.23-5.737a69 69 0 0 1 0-2.953c.066-3.067.099-4.6 1.23-5.737C4.376 2.655 5.95 2.616 9.099 2.537a115 115 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254s1.164 2.67 1.23 5.737c.009.455.014.668.015.972"/><path stroke-linecap="round" d="M19 17a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 0v.5a1.5 1.5 0 0 0 3 0V17a4.5 4.5 0 1 0-4.5 4.5"/></g></svg>
            `,
        }),
        Object.freeze({
            id: 'github',
            label: 'GitHub',
            value: 'github.com/gaboquerizo',
            href: 'https://github.com/gaboquerizo',
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M10 20.568c-3.429 1.157-6.286 0-8-3.568"/><path d="M10 22v-3.242c0-.598.184-1.118.48-1.588c.204-.322.064-.78-.303-.88C7.134 15.452 5 14.107 5 9.645c0-1.16.38-2.25 1.048-3.2c.166-.236.25-.354.27-.46c.02-.108-.015-.247-.085-.527c-.283-1.136-.264-2.343.16-3.43c0 0 .877-.287 2.874.96c.456.285.684.428.885.46s.469-.035 1.005-.169A9.5 9.5 0 0 1 13.5 3a9.6 9.6 0 0 1 2.343.28c.536.134.805.2 1.006.169c.2-.032.428-.175.884-.46c1.997-1.247 2.874-.96 2.874-.96c.424 1.087.443 2.294.16 3.43c-.07.28-.104.42-.084.526s.103.225.269.461c.668.95 1.048 2.04 1.048 3.2c0 4.462-2.134 5.807-5.177 6.643c-.367.101-.507.559-.303.88c.296.47.48.99.48 1.589V22"/></g></svg>
            `,
        }),
        Object.freeze({
            id: 'linkedin',
            label: 'LinkedIn',
            value: 'linkedin.com/in/gaboquerizo',
            href: 'https://www.linkedin.com/in/gaboquerizo/',
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.5 9.5H4c-.943 0-1.414 0-1.707.293S2 10.557 2 11.5V20c0 .943 0 1.414.293 1.707S3.057 22 4 22h.5c.943 0 1.414 0 1.707-.293S6.5 20.943 6.5 20v-8.5c0-.943 0-1.414-.293-1.707S5.443 9.5 4.5 9.5Zm2-5.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0Z"/><path stroke-linejoin="round" d="M12.326 9.5H11.5c-.943 0-1.414 0-1.707.293S9.5 10.557 9.5 11.5V20c0 .943 0 1.414.293 1.707S10.557 22 11.5 22h.5c.943 0 1.414 0 1.707-.293S14 20.943 14 20v-3.5c0-1.657.528-3 2.088-3c.78 0 1.412.672 1.412 1.5v4.5c0 .943 0 1.414.293 1.707s.764.293 1.707.293h.499c.942 0 1.414 0 1.707-.293c.292-.293.293-.764.293-1.706L22 14c0-2.486-2.364-4.5-4.703-4.5c-1.332 0-2.52.652-3.297 1.673c0-.63 0-.945-.137-1.179a1 1 0 0 0-.358-.358c-.234-.137-.549-.137-1.179-.137Z"/></g></svg>
            `,
        }),
        Object.freeze({
            id: 'location',
            label: 'Ubicación',
            value: 'Guayaquil, Ecuador',
            href: null,
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.5 9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M18.222 17c1.395 1.988 2.062 3.047 1.665 3.9q-.06.128-.14.247c-.575.853-2.06.853-5.03.853H9.283c-2.97 0-4.454 0-5.029-.853a2 2 0 0 1-.14-.247c-.397-.852.27-1.912 1.665-3.9"/><path d="M13.257 17.494a1.813 1.813 0 0 1-2.514 0c-3.089-2.993-7.228-6.336-5.21-11.19C6.626 3.679 9.246 2 12 2s5.375 1.68 6.467 4.304c2.016 4.847-2.113 8.207-5.21 11.19Z"/></g></svg>
            `,
        }),
    ]),
});