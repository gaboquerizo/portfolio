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

export class AppRoot extends HTMLElement {

    connectedCallback() {
        this.render()
    }

    render(){
        this.setHTMLUnsafe(`
            <app-header></app-header>
            <main class="w-full fx-col fx-ctr">
                <app-hero></app-hero>
                <app-projects></app-projects>
                <app-skills></app-skills>
                <app-experience></app-experience>
                <app-about></app-about>
                <app-contact></app-contact>
            </main>
            <app-footer></app-footer>
        `)
    };
}

customElements.define('app-root', AppRoot);