/*—————————— Styles ——————————*/
import './app-contact-me.css';

/*—————————— Data ——————————*/
import { MY_CONTACT } from '../../../data/contact.js';

export class ContactMe extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.setHTMLUnsafe(`
            <section class="contact-me">
                <div class="contact-me__content">
                    <p class="contact-me__description">
                        Si tienes algun proyecto en mente o te gustaría una colaboración, házmelo saber.
                        <br><br>
                        Me gusta colaborar en proyectos. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br><br>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>

                <ul class="contact-me__list">
                    ${MY_CONTACT.contacts
                        .map((contact) => this.#renderContact(contact))
                        .join('')}
                </ul>
            </section>
        `);
    }

    #renderContact(contact) {
        const value = contact.href
            ? `
                <a
                    class="contact-me__link"
                    href="${contact.href}"
                    ${contact.id !== 'email'
                ? 'target="_blank" rel="noopener noreferrer"'
                : ''}
                >
                    ${contact.value}
                </a>
            `
            : `
                <span class="contact-me__value">
                    ${contact.value}
                </span>
            `;

        return `
            <li class="contact-me__item">
                <span class="contact-me__icon">
                    ${contact.icon}
                </span>

                <div class="contact-me__info">
                    <span class="contact-me__label">
                        ${contact.label}
                    </span>

                    ${value}
                </div>
            </li>
        `;
    }
}

customElements.define('app-contact-me', ContactMe);