/*—————————— Styles ——————————*/
import './app-header.css';

/*—————————— Components ——————————*/
import '../../components/ui/theme-toggle/ui-theme-toggle.js'
import '../../components/ui/social-media/ui-social-media.js'

/*
export class AppHeader extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        const HTMLContent = `
            <header class="fx-jsc_sb">
              <div>
                <svg class="logo" viewBox="0 0 461.00 675.00">
                  <g fill="" stroke="none" transform="translate(0.0,675.0) scale(0.1,-0.1)">
                    <path d="M2105 6739 c-134 -11 -214 -25 -376 -64 -163 -40 -248 -72 -437 -165 -230 -112 -403 -233 -581 -405 -199 -192 -310 -339 -440 -581 -345 -644 -357 -1431 -31 -2089 78 -157 177 -313 272 -428 413 -500 976 -794 1621 -848 362 -30 789 47 1122 201 692 319 1185 961 1309 1705 15 92 36 294 36 353 l0 32 -400 0 -400 0 0 -59 c0 -136 -45 -350 -106 -499 -188 -468 -573 -791 -1088 -914 -79 -19 -120 -22 -301 -22 -179 0 -224 3 -309 22 -595 132 -1042 578 -1168 1167 -25 118 -35 381 -19 496 27 184 83 359 163 509 68 126 96 167 195 282 149 172 264 259 488 369 130 64 184 85 290 111 l130 32 866 3 865 4 399 399 400 400 -1200 -1 c-660 -1 -1245 -5 -1300 -10z"></path>
                    <path d="M3787 2090 c-23 -212 -139 -496 -280 -685 -177 -237 -447 -435 -716 -524 -198 -66 -256 -75 -486 -75 -179 0 -224 3 -309 22 -279 62 -519 187 -725 377 l-57 54 -282 -282 -281 -282 74 -68 c319 -294 697 -490 1103 -573 364 -74 694 -67 1035 20 233 60 383 121 583 236 642 369 1071 1034 1140 1768 l7 72 -400 0 -400 0 -6 -60z"></path>
                  </g>
                </svg>
              </div>
              <nav class="fx-ali_c">
                <ul class="fx-jsc_se gap-6 list-none">
                  <li>
                    <a href="#projects">
                      Proyectos
                    </a>
                  </li>
                  <li>
                    <a href="#skills">
                      Habilidades
                    </a>
                  </li>
                  <li>
                    <a href="#experience">
                      Experiencia
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      Contacto
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="fx-ali_c">
                <ui-theme-toggle></ui-theme-toggle>
              </div>
            </header>
        `;

        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-header', AppHeader);
*/

const MOBILE_VIEWPORT_QUERY = '(width <= 770px)';
const PAGE_SCROLL_LOCK_CLASS = 'has-navigation-open';

const NAVIGATION_ITEMS = Object.freeze([
    Object.freeze({
        sectionId: 'projects',
        label: 'Proyectos',
    }),
    Object.freeze({
        sectionId: 'skills',
        label: 'Habilidades',
    }),
    Object.freeze({
        sectionId: 'experience',
        label: 'Experiencia',
    }),
    Object.freeze({
        sectionId: 'contact',
        label: 'Contacto',
    }),
]);

export class AppHeader extends HTMLElement {

    constructor() {
        super();

        this.isNavigationOpen = false;

        this.mobileViewportQuery = null;
        this.sectionObserver = null;

        this.sectionElements = [];
        this.navigationLinkElements = [];

        this.previouslyFocusedElement = null;

        this.handleMenuButtonClick =
            this.handleMenuButtonClick.bind(this);

        this.handleOverlayClick =
            this.handleOverlayClick.bind(this);

        this.handleViewportChange =
            this.handleViewportChange.bind(this);

        this.handleNavigationLinkClick =
            this.handleNavigationLinkClick.bind(this);

        this.handleDocumentKeyDown =
            this.handleDocumentKeyDown.bind(this);

        this.handleSectionIntersection =
            this.handleSectionIntersection.bind(this);

        this.handleBlockedScroll =
            this.handleBlockedScroll.bind(this);
    }

    connectedCallback() {
        this.render();
        this.cacheElements();
        this.addEventListeners();
        this.initializeSectionObserver();
        this.synchronizeResponsiveState();
    }

    disconnectedCallback() {
        this.removeEventListeners();
        this.sectionObserver?.disconnect();

        this.closeNavigation({
            restoreFocus: false,
        });
    }

    cacheElements() {
        this.appRootElement = this.closest('app-root');

        this.menuButtonElement = this.querySelector(
            '[data-menu-button]',
        );

        this.navigationOverlayElement = this.querySelector(
            '[data-navigation-overlay]',
        );

        this.navigationDrawerElement = this.querySelector(
            '[data-navigation-drawer]',
        );

        this.navigationLinkElements = [
            ...this.querySelectorAll('[data-navigation-link]'),
        ];
    }

    addEventListeners() {
        this.mobileViewportQuery = window.matchMedia(
            MOBILE_VIEWPORT_QUERY,
        );

        this.menuButtonElement?.addEventListener(
            'click',
            this.handleMenuButtonClick,
        );

        this.navigationOverlayElement?.addEventListener(
            'click',
            this.handleOverlayClick,
        );

        this.mobileViewportQuery.addEventListener(
            'change',
            this.handleViewportChange,
        );

        this.navigationLinkElements.forEach(
            (navigationLinkElement) => {
                navigationLinkElement.addEventListener(
                    'click',
                    this.handleNavigationLinkClick,
                );
            },
        );

        this.navigationDrawerElement?.addEventListener(
            'wheel',
            this.handleBlockedScroll,
            {
                passive: false,
            },
        );

        this.navigationDrawerElement?.addEventListener(
            'touchmove',
            this.handleBlockedScroll,
            {
                passive: false,
            },
        );

        this.navigationOverlayElement?.addEventListener(
            'wheel',
            this.handleBlockedScroll,
            {
                passive: false,
            },
        );

        this.navigationOverlayElement?.addEventListener(
            'touchmove',
            this.handleBlockedScroll,
            {
                passive: false,
            },
        );

        document.addEventListener(
            'keydown',
            this.handleDocumentKeyDown,
        );
    }

    removeEventListeners() {
        this.menuButtonElement?.removeEventListener(
            'click',
            this.handleMenuButtonClick,
        );

        this.navigationOverlayElement?.removeEventListener(
            'click',
            this.handleOverlayClick,
        );

        this.mobileViewportQuery?.removeEventListener(
            'change',
            this.handleViewportChange,
        );

        this.navigationLinkElements.forEach(
            (navigationLinkElement) => {
                navigationLinkElement.removeEventListener(
                    'click',
                    this.handleNavigationLinkClick,
                );
            },
        );

        this.navigationDrawerElement?.removeEventListener(
            'wheel',
            this.handleBlockedScroll,
        );

        this.navigationDrawerElement?.removeEventListener(
            'touchmove',
            this.handleBlockedScroll,
        );

        this.navigationOverlayElement?.removeEventListener(
            'wheel',
            this.handleBlockedScroll,
        );

        this.navigationOverlayElement?.removeEventListener(
            'touchmove',
            this.handleBlockedScroll,
        );

        document.removeEventListener(
            'keydown',
            this.handleDocumentKeyDown,
        );
    }

    synchronizeResponsiveState() {
        if (this.mobileViewportQuery?.matches) {
            return;
        }

        this.closeNavigation({
            restoreFocus: false,
        });
    }

    handleMenuButtonClick() {
        if (this.isNavigationOpen) {
            this.closeNavigation();
            return;
        }

        this.openNavigation();
    }

    handleOverlayClick() {
        this.closeNavigation();
    }

    handleViewportChange(viewportEvent) {
        if (viewportEvent.matches) {
            return;
        }

        this.closeNavigation({
            restoreFocus: false,
        });
    }

    handleNavigationLinkClick() {
        if (!this.mobileViewportQuery?.matches) {
            return;
        }

        this.closeNavigation({
            restoreFocus: false,
        });
    }

    handleDocumentKeyDown(keyboardEvent) {
        if (!this.isNavigationOpen) {
            return;
        }

        if (keyboardEvent.key === 'Escape') {
            this.closeNavigation();
            return;
        }

        if (keyboardEvent.key === 'Tab') {
            this.handleNavigationFocus(keyboardEvent);
        }
    }

    handleNavigationFocus(keyboardEvent) {
        const focusableElements = this.getNavigationFocusableElements();

        if (!focusableElements.length) {
            return;
        }

        const firstFocusableElement = focusableElements[0];

        const lastFocusableElement =
            focusableElements[focusableElements.length - 1];

        const activeElement = document.activeElement;

        if (
            keyboardEvent.shiftKey
            && activeElement === firstFocusableElement
        ) {
            keyboardEvent.preventDefault();
            lastFocusableElement.focus();
            return;
        }

        if (
            !keyboardEvent.shiftKey
            && activeElement === lastFocusableElement
        ) {
            keyboardEvent.preventDefault();
            firstFocusableElement.focus();
        }
    }

    handleBlockedScroll(event) {
        if (!this.isNavigationOpen) {
            return;
        }

        event.preventDefault();
    }

    openNavigation() {
        const cannotOpenNavigation =
            this.isNavigationOpen
            || !this.mobileViewportQuery?.matches;

        if (cannotOpenNavigation) {
            return;
        }

        this.isNavigationOpen = true;

        this.previouslyFocusedElement =
            document.activeElement instanceof HTMLElement
                ? document.activeElement
                : null;

        this.toggleAttribute(
            'navigation-open',
            true,
        );

        this.appRootElement?.toggleAttribute(
            'navigation-open',
            true,
        );

        this.menuButtonElement?.setAttribute(
            'aria-expanded',
            'true',
        );

        this.menuButtonElement?.setAttribute(
            'aria-label',
            'Cerrar menú principal',
        );

        this.navigationDrawerElement?.setAttribute(
            'aria-hidden',
            'false',
        );

        if (this.navigationOverlayElement) {
            this.navigationOverlayElement.disabled = false;
        }

        this.lockPageScroll();

        requestAnimationFrame(() => {
            const firstNavigationElement =
                this.getNavigationFocusableElements()[0];

            firstNavigationElement?.focus();
        });
    }

    closeNavigation({ restoreFocus = true } = {}) {
        if (!this.isNavigationOpen) {
            return;
        }

        this.isNavigationOpen = false;

        this.removeAttribute('navigation-open');

        this.appRootElement?.removeAttribute(
            'navigation-open',
        );

        this.menuButtonElement?.setAttribute(
            'aria-expanded',
            'false',
        );

        this.menuButtonElement?.setAttribute(
            'aria-label',
            'Abrir menú principal',
        );

        this.navigationDrawerElement?.setAttribute(
            'aria-hidden',
            'true',
        );

        if (this.navigationOverlayElement) {
            this.navigationOverlayElement.disabled = true;
        }

        this.unlockPageScroll();

        if (!restoreFocus) {
            return;
        }

        const focusTarget =
            this.previouslyFocusedElement?.isConnected
                ? this.previouslyFocusedElement
                : this.menuButtonElement;

        focusTarget?.focus({
            preventScroll: true,
        });
    }

    lockPageScroll() {
        document.documentElement.classList.add(
            PAGE_SCROLL_LOCK_CLASS,
        );

        document.body.classList.add(
            PAGE_SCROLL_LOCK_CLASS,
        );
    }

    unlockPageScroll() {
        document.documentElement.classList.remove(
            PAGE_SCROLL_LOCK_CLASS,
        );

        document.body.classList.remove(
            PAGE_SCROLL_LOCK_CLASS,
        );
    }

    getNavigationFocusableElements() {
        const drawerFocusableElements = [
            ...this.navigationDrawerElement.querySelectorAll(
                `
                    a[href],
                    button:not([disabled]),
                    input:not([disabled]),
                    select:not([disabled]),
                    textarea:not([disabled]),
                    [tabindex]:not([tabindex="-1"])
                `,
            ),
        ];

        return [
            this.menuButtonElement,
            ...drawerFocusableElements,
        ].filter(Boolean);
    }

    initializeSectionObserver() {
        this.sectionElements = NAVIGATION_ITEMS
            .map(({ sectionId }) => {
                return document.getElementById(sectionId);
            })
            .filter(Boolean);

        const cannotObserveSections =
            !this.sectionElements.length
            || !('IntersectionObserver' in window);

        if (cannotObserveSections) {
            return;
        }

        this.sectionObserver = new IntersectionObserver(
            this.handleSectionIntersection,
            {
                root: null,
                rootMargin: '-49% 0px -50% 0px',
                threshold: 0,
            },
        );

        this.sectionElements.forEach(
            (sectionElement) => {
                this.sectionObserver.observe(
                    sectionElement,
                );
            },
        );

        this.updateActiveNavigation();
    }

    handleSectionIntersection() {
        this.updateActiveNavigation();
    }

    updateActiveNavigation() {
        const viewportMiddle =
            window.innerHeight / 2;

        const activeSectionElement =
            this.sectionElements.find(
                (sectionElement) => {
                    const sectionRectangle =
                        sectionElement.getBoundingClientRect();

                    return (
                        sectionRectangle.top <= viewportMiddle
                        && sectionRectangle.bottom >= viewportMiddle
                    );
                },
            );

        this.setActiveNavigationItem(
            activeSectionElement?.id ?? null,
        );
    }

    setActiveNavigationItem(activeSectionId) {
        this.navigationLinkElements.forEach(
            (navigationLinkElement) => {
                const navigationSectionId =
                    navigationLinkElement
                        .getAttribute('href')
                        ?.replace('#', '');

                const isActive =
                    navigationSectionId === activeSectionId;

                navigationLinkElement.classList.toggle(
                    'is-active',
                    isActive,
                );

                if (isActive) {
                    navigationLinkElement.setAttribute(
                        'aria-current',
                        'location',
                    );

                    return;
                }

                navigationLinkElement.removeAttribute(
                    'aria-current',
                );
            },
        );
    }

    renderNavigationItems() {
        return NAVIGATION_ITEMS
            .map(({ sectionId, label }) => {
                return `
                    <li class="app-header__navigation-item">
                        <a
                            class="app-header__navigation-link"
                            href="#${sectionId}"
                            data-navigation-link
                        >
                            ${label}
                        </a>
                    </li>
                `;
            })
            .join('');
    }

    render() {
        const navigationItemsHTML =
            this.renderNavigationItems();

        const HTMLContent = `
            <header class="app-header__bar">

                <div class="app-header__brand">
                    <svg
                        class="app-header__logo"
                        viewBox="0 0 461 675"
                        aria-label="Gabriel Baquerizo"
                        role="img"
                    >
                        <g
                            stroke="none"
                            transform="
                                translate(0, 675)
                                scale(0.1, -0.1)
                            "
                        >
                            <path d="M2105 6739 c-134 -11 -214 -25 -376 -64 -163 -40 -248 -72 -437 -165 -230 -112 -403 -233 -581 -405 -199 -192 -310 -339 -440 -581 -345 -644 -357 -1431 -31 -2089 78 -157 177 -313 272 -428 413 -500 976 -794 1621 -848 362 -30 789 47 1122 201 692 319 1185 961 1309 1705 15 92 36 294 36 353 l0 32 -400 0 -400 0 0 -59 c0 -136 -45 -350 -106 -499 -188 -468 -573 -791 -1088 -914 -79 -19 -120 -22 -301 -22 -179 0 -224 3 -309 22 -595 132 -1042 578 -1168 1167 -25 118 -35 381 -19 496 27 184 83 359 163 509 68 126 96 167 195 282 149 172 264 259 488 369 130 64 184 85 290 111 l130 32 866 3 865 4 399 399 400 400 -1200 -1 c-660 -1 -1245 -5 -1300 -10z"></path>

                            <path d="M3787 2090 c-23 -212 -139 -496 -280 -685 -177 -237 -447 -435 -716 -524 -198 -66 -256 -75 -486 -75 -179 0 -224 3 -309 22 -279 62 -519 187 -725 377 l-57 54 -282 -282 -281 -282 74 -68 c319 -294 697 -490 1103 -573 364 -74 694 -67 1035 20 233 60 383 121 583 236 642 369 1071 1034 1140 1768 l7 72 -400 0 -400 0 -6 -60z"></path>
                        </g>
                    </svg>
                </div>

                <nav
                    class="app-header__desktop-navigation"
                    aria-label="Navegación principal"
                >
                    <ul class="app-header__desktop-list">
                        ${navigationItemsHTML}
                    </ul>
                </nav>

                <div class="app-header__desktop-theme">
                    <ui-theme-toggle></ui-theme-toggle>
                </div>

                <button
                    class="app-header__menu-button"
                    type="button"
                    aria-label="Abrir menú principal"
                    aria-controls="app-header-navigation-drawer"
                    aria-expanded="false"
                    data-menu-button
                >
                    <span
                        class="app-header__menu-line"
                        aria-hidden="true"
                    ></span>

                    <span
                        class="app-header__menu-line"
                        aria-hidden="true"
                    ></span>

                    <span
                        class="app-header__menu-line"
                        aria-hidden="true"
                    ></span>
                </button>

            </header>

            <button
                class="app-header__overlay"
                type="button"
                aria-label="Cerrar menú lateral"
                aria-controls="app-header-navigation-drawer"
                tabindex="-1"
                data-navigation-overlay
                disabled
            ></button>

            <aside
                id="app-header-navigation-drawer"
                class="app-header__drawer"
                aria-label="Menú lateral"
                aria-hidden="true"
                data-navigation-drawer
            >

                <div class="app-header__drawer-theme">
                    <ui-theme-toggle></ui-theme-toggle>
                </div>

                <nav
                    class="app-header__drawer-navigation"
                    aria-label="Navegación móvil"
                >
                    <ul class="app-header__drawer-list">
                        ${navigationItemsHTML}
                    </ul>
                </nav>

                <div
                    class="app-header__social-links"
                    aria-label="Redes sociales"
                >
                    <ui-social-media></ui-social-media>
                </div>

            </aside>
        `;

        this.setHTMLUnsafe(HTMLContent);
    }
}

customElements.define('app-header', AppHeader);