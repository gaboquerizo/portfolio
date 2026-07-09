import {
    THEMES,
    getCurrentTheme,
    applyTheme,
} from '../../shared/theme/theme.js';

export class ThemeToggle extends HTMLElement {
    constructor() {
        super();
        this.handleThemeChange = this.handleThemeChange.bind(this);
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
        const nextTheme = isChecked ? THEMES.DARK : THEMES.LIGHT;

        applyTheme(nextTheme);

        this.dispatchEvent(
            new CustomEvent('theme-change', {
                bubbles: true,
                composed: true,
                detail: {
                    theme: nextTheme,
                },
            }),
        );
    }

    syncCheckboxWithTheme() {
        const currentTheme = getCurrentTheme();
        const isDarkTheme = currentTheme === THEMES.DARK;

        this.checkboxElement.checked = isDarkTheme;
    }

    addEvents() {
        this.checkboxElement.addEventListener('change', this.handleThemeChange);
    }

    removeEvents() {
        this.checkboxElement.removeEventListener('change', this.handleThemeChange);
    }

    render() {
        this.innerHTML = `
      <style>
        :host {
          display: inline-block;
          font-family: system-ui, sans-serif;
        }

        .theme-toggle {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          user-select: none;
          width: max-content;
            .dark {
                display: none;
            }
            .light {
                display: block;
            }
            &:has( :checked ) {
                .dark {
                    display: block;
                }
                .light {
                    display: none;
                }
            }
            label {
                display: flex;
            }
            input[type="checkbox"] {
                display: none;
            }
            svg {
                width: 2em;
            }
        }
      </style>

      <label class="theme-toggle" for="theme-toggle-checkbox">
        <input
          id="theme-toggle-checkbox"
          type="checkbox"
          role="switch"
          aria-label="Cambiar tema de la aplicación"
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path class="light" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m10-6h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1"></path>
            <path class="dark" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 0 0 8.997-9.252a7 7 0 0 1-10.371-8.643A9 9 0 0 0 12 21"></path>
        </svg>
      </label>
    `;
    }
}

customElements.define('theme-toggle', ThemeToggle);