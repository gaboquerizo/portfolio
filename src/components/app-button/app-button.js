const BUTTON_VARIANTS = ['primary', 'secondary', 'outline', 'ghost', 'delete'];

export class appButton extends HTMLElement {
    static get observedAttributes() {
        return [
            'href',
            'target',
            'rel',
            'aria-label',
            'primary',
            'secondary',
            'outline',
            'ghost',
            'delete',
            'disabled',
        ];
    }

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    connectedCallback() {
        this.render();
        this.syncAttributes();
        this.addEvents();
    }

    disconnectedCallback() {
        this.removeEvents();
    }

    attributeChangedCallback() {
        this.syncAttributes();
    }

    get anchorElement() {
        return this.shadowRoot.querySelector('.app-button');
    }

    get variant() {
        const selectedVariant = BUTTON_VARIANTS.find((variant) => {
            return this.hasAttribute(variant);
        });

        return selectedVariant || 'primary';
    }

    get href() {
        return this.getAttribute('href');
    }

    get isDisabled() {
        return this.hasAttribute('disabled');
    }

    addEvents() {
        this.anchorElement.addEventListener('keydown', this.handleKeyDown);
        this.anchorElement.addEventListener('click', this.handleClick);
    }

    removeEvents() {
        this.anchorElement?.removeEventListener('keydown', this.handleKeyDown);
        this.anchorElement?.removeEventListener('click', this.handleClick);
    }

    handleKeyDown(event) {
        if (this.href) return;

        const isEnterKey = event.key === 'Enter';
        const isSpaceKey = event.key === ' ';

        if (isEnterKey || isSpaceKey) {
            event.preventDefault();
            this.anchorElement.click();
        }
    }

    handleClick(event) {
        if (!this.isDisabled) return;

        event.preventDefault();
        event.stopPropagation();
    }

    syncAttributes() {
        const anchor = this.anchorElement;

        if (!anchor) return;

        anchor.dataset.variant = this.variant;

        if (this.href && !this.isDisabled) {
            anchor.setAttribute('href', this.href);
            anchor.removeAttribute('role');
            anchor.removeAttribute('tabindex');
        } else {
            anchor.removeAttribute('href');
            anchor.setAttribute('role', 'button');
            anchor.setAttribute('tabindex', this.isDisabled ? '-1' : '0');
        }

        if (this.hasAttribute('target')) {
            anchor.setAttribute('target', this.getAttribute('target'));
        } else {
            anchor.removeAttribute('target');
        }

        if (this.hasAttribute('rel')) {
            anchor.setAttribute('rel', this.getAttribute('rel'));
        } else if (this.getAttribute('target') === '_blank') {
            anchor.setAttribute('rel', 'noopener noreferrer');
        } else {
            anchor.removeAttribute('rel');
        }

        if (this.hasAttribute('aria-label')) {
            anchor.setAttribute('aria-label', this.getAttribute('aria-label'));
        } else {
            anchor.removeAttribute('aria-label');
        }

        anchor.setAttribute('aria-disabled', String(this.isDisabled));
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }

        .app-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          
          text-decoration: none;
          cursor: pointer;
          user-select: none;
          
          font-family: inherit;
          font-size: var(--size-5);
          color: var(--tx-color-3);
          
          position: relative;
          overflow: hidden;
          padding: var(--space-050) var(--space-100);
          border-radius: var(--radius-3);
          outline: var(--solid-1) transparent;
          box-shadow: 0 0 0 transparent;

          transition:
                transform var(--transition-1),
                background-color var(--transition-1),
                color var(--transition-1),
                outline var(--transition-1),
                box-shadow var(--transition-1);
        }

        .app-button:hover {
          transform: translateY(-1px);
          background-color: var(--bg-color-2);
          color: var(--tx-color-1);
          outline: var(--solid-1) #fff;
          box-shadow:
                var(--shadow-low),
                var(--shadow-medium);
        }

        .app-button:before {
            content: "";
            position: absolute;
            left: -4em;
            width: 4em;
            height: 100%;
            top: 0;
            transition: transform .4s ease-in-out;
        }

        .app-button:hover:before {
            background: linear-gradient(
                    to right,
                    transparent 1%,
                    var(--glass-effect-color) 50%,
                    transparent 100%);
            transform: translateX(14em);
        }

        .app-button:focus-visible {
          outline: var(--solid-4) var(--bg-color-5);
          outline-offset: 2px;
        }

        .app-button[aria-disabled="true"] {
          opacity: 0.55;
          cursor: not-allowed;
          pointer-events: none;
        }

        .app-button[data-variant="primary"] {
          background-color: var(--primary-color);
          color: var(--tx-cut-out);
        }

        .app-button[data-variant="primary"]:hover {
          background-color: var(--primary-color);
          outline: var(--solid-1) var(--secondary-color);
          box-shadow:
                var(--shadow-high-color),
                var(--shadow-inset-color);
        }

        .app-button[data-variant="secondary"] {
          background-color: var(--bg-color-1);
        }

        .app-button[data-variant="secondary"]:hover {
          color: var(--tx-color-1);
          box-shadow:
                var(--shadow-low),
                var(--shadow-medium);
        }

        .app-button[data-variant="outline"] {
          color: var(--tx-color-3);
          background-color: var(--bg-color-2);
          outline: var(--solid-1) var(--bg-color-5);
        }

        .app-button[data-variant="outline"]:hover {
          color: var(--tx-color-1);
          background-color: var(--bg-color-2);
          outline-color: white;
          box-shadow:
                var(--shadow-low),
                var(--shadow-medium),
                var(--shadow-inset-light);
        }

        .app-button[data-variant="ghost"] {
          background-color: transparent;
          color: var(--tx-color-3);
        }

        .app-button[data-variant="ghost"]:hover {
          color: var(--tx-color-1);
          background-color: var(--bg-color-2);
          box-shadow:
                var(--shadow-low),
                var(--shadow-medium),
                var(--shadow-inset-light);
        }

        .app-button[data-variant="delete"] {
          background-color: #dc2626);
          color: #fff;
        }

        .app-button[data-variant="delete"]:hover {
          background-color: #b91c1c;
        }
      </style>

      <a class="app-button">
        <slot></slot>
      </a>
    `;
    }
}

customElements.define('app-button', appButton);

/*
* <app-button primary> </app-button>
* <app-button secondary> </app-button>
* <app-button outline> </app-button>
* <app-button ghost href="#section"> </app-button>
* <app-button delete> </app-button>
* */