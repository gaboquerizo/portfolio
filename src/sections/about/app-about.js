import './app-about.css';
import '../../components/ui/chip/ui-eyebrow.js'

export class AppAbout extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const HTMLContent = `
            <section id="about" class="fx-col section">
              <header class="fx-col fx-ali_c section-heading">
                <ui-eyebrow>Resumen</ui-eyebrow>
                <h2>Quién soy</h2>
                <p class="txt-center">
                  A continuación, me presento brevemente. 
                </p>
              </header>
              <div></div>
            </section>
        `;
        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-about', AppAbout);