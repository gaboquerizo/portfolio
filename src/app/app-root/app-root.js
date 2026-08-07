/**
 * Styles
 */
import './app-root.css';

/**
 * Layouts
 */
import '../../layouts/header/app-header.js';

/**
 * Sections
 */
import '../../sections/hero/app-hero.js';
import '../../sections/projects/app-projects.js';
import '../../sections/skills/app-skills.js';
import '../../sections/experience/app-experience.js';
import '../../sections/about/app-about.js';
import '../../sections/contact/app-contact.js';

// TODO: (responsive) Disminuir el tamaño de letra del título de cada sección
// TODO: Agregar un divisor ligeramente imperceptible entre secciones
// ☑️ TODO: Ajustar la proporcion vertical de viewport del contenido principal
// TODO: Footer simple con una despedida y el componente de redes sociales

export class AppRoot extends HTMLElement {

    connectedCallback() {
        this.render()
    }

    render(){
        const HTMLContent = `
            <app-header></app-header>
            <main class="w-full fx-col">
                <app-hero></app-hero>
                <app-projects></app-projects>
                <app-skills></app-skills>
                <app-experience></app-experience>
                <app-about></app-about>
                <app-contact></app-contact>
            </main>
            <app-footer></app-footer>
        `;
        this.setHTMLUnsafe(HTMLContent)
    };
}

customElements.define('app-root', AppRoot);