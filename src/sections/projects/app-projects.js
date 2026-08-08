/*—————————— Styles ——————————*/
import './app-projects.css';

/*—————————— Components ——————————*/
import '../../components/ui/chip/ui-eyebrow.js'
import '../../components/app/project-gallery/app-project-gallery.js';

export class AppProjects extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const HTMLContent = `
            <section id="projects" class="fx-col gap-6 section">
              <header class="fx-col fx-ali_c section-heading">
                <ui-eyebrow data-icon="projects">Proyectos</ui-eyebrow>
                <h2>Trabajos destacados</h2>
                <p class="txt-center">
                  Una selección de mis proyectos personales y empresariales que he desarrollado y he colaborado
                </p>
              </header>
              <app-project-gallery data-active-category="frontend"></app-project-gallery>
            </section>
        `;
        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-projects', AppProjects);