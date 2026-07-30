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
            </main>
            <app-footer></app-footer>
        `)
    };
}

customElements.define('app-root', AppRoot);