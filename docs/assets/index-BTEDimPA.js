(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`app-theme`,t={LIGHT:`light`,DARK:`dark`};function n(){return localStorage.getItem(e)}function r(){return window.matchMedia(`(prefers-color-scheme: dark)`).matches?t.DARK:t.LIGHT}function i(){return document.documentElement.dataset.theme||t.LIGHT}function a(t){return document.documentElement.dataset.theme=t,localStorage.setItem(e,t),t}function o(){return a(n()||r())}var s=class extends HTMLElement{constructor(){super(),this.handleThemeChange=this.handleThemeChange.bind(this)}connectedCallback(){this.render(),this.syncCheckboxWithTheme(),this.addEvents()}disconnectedCallback(){this.removeEvents()}get checkboxElement(){return this.querySelector(`#theme-toggle-checkbox`)}handleThemeChange(e){let n=e.target.checked?t.DARK:t.LIGHT;a(n),this.dispatchEvent(new CustomEvent(`theme-change`,{bubbles:!0,composed:!0,detail:{theme:n}}))}syncCheckboxWithTheme(){let e=i()===t.DARK;this.checkboxElement.checked=e}addEvents(){this.checkboxElement.addEventListener(`change`,this.handleThemeChange)}removeEvents(){this.checkboxElement.removeEventListener(`change`,this.handleThemeChange)}render(){this.innerHTML=`
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
    `}};customElements.define(`theme-toggle`,s),o(),document.querySelector(`#app`).innerHTML=`
    <header class="fx-jsc_sa header">

      <div>
        <svg class="logo" viewBox="0 0 461.00 675.00">
          <g transform="translate(0.0,675.0) scale(0.1,-0.1)" fill="" stroke="none">
            <path d="M2105 6739 c-134 -11 -214 -25 -376 -64 -163 -40 -248 -72 -437 -165 -230 -112 -403 -233 -581 -405 -199 -192 -310 -339 -440 -581 -345 -644 -357 -1431 -31 -2089 78 -157 177 -313 272 -428 413 -500 976 -794 1621 -848 362 -30 789 47 1122 201 692 319 1185 961 1309 1705 15 92 36 294 36 353 l0 32 -400 0 -400 0 0 -59 c0 -136 -45 -350 -106 -499 -188 -468 -573 -791 -1088 -914 -79 -19 -120 -22 -301 -22 -179 0 -224 3 -309 22 -595 132 -1042 578 -1168 1167 -25 118 -35 381 -19 496 27 184 83 359 163 509 68 126 96 167 195 282 149 172 264 259 488 369 130 64 184 85 290 111 l130 32 866 3 865 4 399 399 400 400 -1200 -1 c-660 -1 -1245 -5 -1300 -10z"></path>
            <path d="M3787 2090 c-23 -212 -139 -496 -280 -685 -177 -237 -447 -435 -716 -524 -198 -66 -256 -75 -486 -75 -179 0 -224 3 -309 22 -279 62 -519 187 -725 377 l-57 54 -282 -282 -281 -282 74 -68 c319 -294 697 -490 1103 -573 364 -74 694 -67 1035 20 233 60 383 121 583 236 642 369 1071 1034 1140 1768 l7 72 -400 0 -400 0 -6 -60z"></path>
          </g>
        </svg>
      </div>

      <nav class="fx-ali_c">
        <ul class="list-none fx-jsc_se gap-2">
          <li>
            <a href="#projects" class="nav-link">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#experience" class="nav-link">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#skills" class="nav-link">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#contact" class="nav-link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      <div class="fx-ali_c">
        <theme-toggle></theme-toggle>
      </div>

    </header>
    <main>

    </main>
    <footer>

    </footer>
`;