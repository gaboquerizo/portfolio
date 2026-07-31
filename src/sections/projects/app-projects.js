import './app-projects.css';
import '../../components/ui/chip/ui-chip.js'

export class AppProjects extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const HTMLContent = `
            <section id="projects" class="fx-col section">
              <header class="fx-col fx-ali_c section-heading">
                <ui-chip>Proyectos</ui-chip>
                <h2>Trabajos destacados</h2>
                <p class="txt-center">
                  Una selección de mis proyectos personales y empresariales que he desarrollado y he colaborado
                </p>
              </header>
              <div show></div>
            </section>
        `;
        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-projects', AppProjects);