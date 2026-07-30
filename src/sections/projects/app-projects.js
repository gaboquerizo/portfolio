import './app-projects.css';

export class AppProjects extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.setHTMLUnsafe(`
            <h1>Projects Section</h1>
        `);
    }
}

customElements.define('app-projects', AppProjects);