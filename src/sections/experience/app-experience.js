/*—————————— Styles ——————————*/
import './app-experience.css';

/*—————————— Components ——————————*/
import '../../components/ui/eyebrow/ui-eyebrow.js';
import '../../components/app/time-line/app-time-line.js';

export class AppExperience extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const HTMLContent = `
            <section id="experience" class="fx-col gap-7 section">
              <header class="fx-col fx-ali_c section-heading">
                <ui-eyebrow data-icon="experience">Experiencia</ui-eyebrow>
                <h2>Historia laboral</h2>
                <p class="txt-center">
                  Mi trayectoria en diversas organizaciones del sector y logros de alto impacto 
                </p>
              </header>
              <app-time-line></app-time-line>
            </section>
        `;
        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-experience', AppExperience);