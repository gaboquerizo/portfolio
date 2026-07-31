import './app-skills.css';
import '../../components/ui/chip/ui-chip.js'

export class AppSkills extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const HTMLContent = `
            <section id="skills" class="fx-col section">
              <header class="fx-col fx-ali_c section-heading">
                <ui-chip>Habilidades</ui-chip>
                <h2>Stack tecnológico</h2>
                <p class="txt-center">
                  Las tecnologías, herramientas y patrones que utilizo a diario en el desarrollo
                </p>
              </header>
              <div></div>
            </section>
        `;
        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-skills', AppSkills);