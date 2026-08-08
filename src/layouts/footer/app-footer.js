/*—————————— Styles ——————————*/
import './app-footer.css';

export class AppFooter extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        const HTMLContent = `
            <footer class="fx-jsc_sb">
              <span>
                2026 @gaboquerizo
              </span>
              <span>
                Desarrollado con 💙 utilizando Vanilla JS
              </span>
            </footer>
        `;

        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-footer', AppFooter);