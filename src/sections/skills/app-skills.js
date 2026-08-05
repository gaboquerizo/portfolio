/**
 * Styles
 */
import './app-skills.css';

/**
 * Components
 */
import '../../components/ui/chip/ui-chip.js'
import '../../components/app/skills-matrix/app-skills-matrix.js'

export class AppSkills extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const HTMLContent = `
            <section id="skills" class="fx-col gap-7 section">
              <header class="fx-col fx-ali_c section-heading">
                <ui-chip>Habilidades</ui-chip>
                <h2>Stack tecnológico</h2>
                <p class="txt-center">
                  Las herramientas, tecnologías y patrones que utilizo a diario en el desarrollo
                </p>
              </header>
              <app-skills-matrix></app-skills-matrix>
            </section>
        `;
        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-skills', AppSkills);