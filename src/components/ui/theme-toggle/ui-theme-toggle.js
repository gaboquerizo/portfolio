import './ui-theme-toggle.css'

import {
    applyTheme,
    getCurrentTheme,
    THEMES
} from '../../../shared/theme/theme.js';

export class UiThemeToggle extends HTMLElement {
    constructor() {
        super();

        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.handleApplicationThemeChange =
            this.handleApplicationThemeChange.bind(this);
    }

    connectedCallback() {
        this.render();
        this.syncCheckboxWithTheme();
        this.addEvents();
    }

    disconnectedCallback() {
        this.removeEvents();
    }

    get checkboxElement() {
        return this.querySelector('#theme-toggle-checkbox');
    }

    handleThemeChange(event) {
        const isChecked = event.target.checked;

        const nextTheme = isChecked
            ? THEMES.DARK
            : THEMES.LIGHT;

        applyTheme(nextTheme);
    }

    handleApplicationThemeChange(event) {
        const { theme } = event.detail;

        this.checkboxElement.checked =
            theme === THEMES.DARK;
    }

    syncCheckboxWithTheme() {
        const currentTheme = getCurrentTheme();

        this.checkboxElement.checked =
            currentTheme === THEMES.DARK;
    }

    addEvents() {
        this.checkboxElement.addEventListener(
            'change',
            this.handleThemeChange,
        );

        window.addEventListener(
            'themechange',
            this.handleApplicationThemeChange,
        );
    }

    removeEvents() {
        this.checkboxElement.removeEventListener(
            'change',
            this.handleThemeChange,
        );

        window.removeEventListener(
            'themechange',
            this.handleApplicationThemeChange,
        );
    }

    render() {
        this.setHTMLUnsafe(`
            <label
                class="theme-toggle"
                for="theme-toggle-checkbox"
            >
                <input
                    id="theme-toggle-checkbox"
                    type="checkbox"
                    role="switch"
                    aria-label="Cambiar tema de la aplicación"
                />

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        class="theme-toggle__icon theme-toggle__icon--light"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m10-6h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1"
                    ></path>

                    <path
                        class="theme-toggle__icon theme-toggle__icon--dark"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M12 21a9 9 0 0 0 8.997-9.252a7 7 0 0 1-10.371-8.643A9 9 0 0 0 12 21"
                    ></path>
                </svg>
            </label>
        `);
    }
}

customElements.define('ui-theme-toggle', UiThemeToggle);