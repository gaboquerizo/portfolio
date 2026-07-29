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

export class AppRoot extends HTMLElement {

    connectedCallback() {
        this.render()
    }

    render(){
        this.setHTMLUnsafe(`
            <app-header></app-header>
            <main class="w-full fx-col fx-ali_c">
                <app-hero></app-hero>
            </main>
            <app-footer></app-footer>
        `)
    };
}

customElements.define('app-root', AppRoot);