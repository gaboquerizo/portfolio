/*—————————— Styles ——————————*/
import './ui-eyebrow.css';

// ☑️ TODO: Cambiar nombre de componente "UiChip" -> "UiEyebrow"
// TODO: Agregar un icono SVG antes del texto para cada sección.

export class UiEyebrow extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    getTextContent() {
        return this.textContent.trim().toUpperCase();
    }

    escapeHTML(text) {
        return text
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');
    }

    render() {
        const chipText = this.escapeHTML(
            this.getTextContent()
        );
        this.setHTMLUnsafe(chipText)
    }
}

customElements.define('ui-eyebrow', UiEyebrow);