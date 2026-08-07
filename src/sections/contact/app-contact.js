import './app-contact.css';
import '../../components/ui/chip/ui-eyebrow.js'

export class AppContact extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const HTMLContent = `
            <section id="contact" class="fx-col section">
              <header class="fx-col fx-ali_c section-heading">
                <ui-eyebrow>Contacto</ui-eyebrow>
                <h2>Contáctame</h2>
                <p class="txt-center">
                  Si tienes algun proyecto en mente o te gustaría una colaboración, házmelo saber.
                </p>
              </header>
              <div></div>
            </section>
        `;
        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-contact', AppContact);