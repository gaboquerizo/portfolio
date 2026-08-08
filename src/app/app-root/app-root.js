/*—————————— Styles ——————————*/
import './app-root.css';

/*—————————— Layouts ——————————*/
import '../../layouts/header/app-header.js';
import '../../layouts/footer/app-footer.js';

/*—————————— Sections ——————————*/
import '../../sections/hero/app-hero.js';
import '../../sections/projects/app-projects.js';
import '../../sections/skills/app-skills.js';
import '../../sections/experience/app-experience.js';
import '../../sections/contact/app-contact.js';

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
                <app-contact></app-contact>
            </main>
            <app-footer></app-footer>
        `;
        this.setHTMLUnsafe(HTMLContent)
    };
}

customElements.define('app-root', AppRoot);