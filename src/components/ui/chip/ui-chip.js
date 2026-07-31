import './ui-chip.css';

export class UiChip extends HTMLElement {
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

customElements.define('ui-chip', UiChip);