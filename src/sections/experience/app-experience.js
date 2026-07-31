import './app-experience.css';
import '../../components/ui/chip/ui-chip.js'

export class AppExperience extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const HTMLContent = `
            <section id="experience" class="fx-col section">
              <header class="fx-col fx-ali_c section-heading">
                <ui-chip>Experiencia</ui-chip>
                <h2>Historia laboral</h2>
                <p class="txt-center">
                  Mi trayectoria en diversas organizaciones del sector y logros de alto impacto 
                </p>
              </header>
              <div></div>
            </section>
        `;
        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-experience', AppExperience);