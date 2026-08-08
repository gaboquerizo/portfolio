/*—————————— Styles ——————————*/
import './ui-eyebrow.css';

/*—————————— Data ——————————*/
import { ICONS } from '../../../data/icons.js';

export class UiEyebrow extends HTMLElement {

    static get observedAttributes() {
        return ['data-icon'];
    }

    attributeChangedCallback() {
        if (!this.isConnected) {
            return;
        }

        this.render();
    }

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
        const iconName = this.dataset.icon;
        const icon = ICONS[iconName] ?? '';
        const text = this.escapeHTML(
            this.getTextContent()
        );
        const HTMLContent = `
            ${icon}
            <span>${text}</span>
        `;

        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('ui-eyebrow', UiEyebrow);