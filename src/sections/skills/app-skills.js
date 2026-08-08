/*—————————— Styles ——————————*/
import './app-skills.css';

/*—————————— Components ——————————*/
import '../../components/ui/chip/ui-eyebrow.js'
import '../../components/app/skills-matrix/app-skills-matrix.js'

export class AppSkills extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const HTMLContent = `
            <section id="skills" class="fx-col gap-6 section">
              <header class="fx-col fx-ali_c section-heading">
                <ui-eyebrow data-icon="skills">Habilidades</ui-eyebrow>
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