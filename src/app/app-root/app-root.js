/**
 * Layouts
 */
import '../../layout/app-header/app-header.js';

export class AppRoot extends HTMLElement {

    connectedCallback() {
        this.render()
    }

    render(){
        this.setHTMLUnsafe(`
            <app-header />
            <main>
                Contenido principal
            </main>
            <footer>Pie de página</footer>
        `)
    };
}

customElements.define('app-root', AppRoot);