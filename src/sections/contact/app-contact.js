/*—————————— Styles ——————————*/
import './app-contact.css';

/*—————————— Components ——————————*/
import '../../components/ui/eyebrow/ui-eyebrow.js'
import '../../components/app/contact-me/app-contact-me.js';

export class AppContact extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const HTMLContent = `
            <section id="contact" class="fx-col gap-6 section">
              <header class="fx-col fx-ali_c section-heading">
                <ui-eyebrow data-icon="contact">Contacto</ui-eyebrow>
                <h2>Escríbeme</h2>
              </header>
              <app-contact-me></app-contact-me>
            </section>
        `;
        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-contact', AppContact);