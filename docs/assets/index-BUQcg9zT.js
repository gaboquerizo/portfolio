(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`primary`,`secondary`,`outline`,`ghost`,`delete`],t=class extends HTMLElement{static get observedAttributes(){return[`href`,`target`,`rel`,`aria-label`,`primary`,`secondary`,`outline`,`ghost`,`delete`,`disabled`]}constructor(){super(),this.attachShadow({mode:`open`}),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleClick=this.handleClick.bind(this)}connectedCallback(){this.render(),this.syncAttributes(),this.addEvents()}disconnectedCallback(){this.removeEvents()}attributeChangedCallback(){this.syncAttributes()}get anchorElement(){return this.shadowRoot.querySelector(`.app-button`)}get variant(){return e.find(e=>this.hasAttribute(e))||`primary`}get href(){return this.getAttribute(`href`)}get isDisabled(){return this.hasAttribute(`disabled`)}addEvents(){this.anchorElement.addEventListener(`keydown`,this.handleKeyDown),this.anchorElement.addEventListener(`click`,this.handleClick)}removeEvents(){this.anchorElement?.removeEventListener(`keydown`,this.handleKeyDown),this.anchorElement?.removeEventListener(`click`,this.handleClick)}handleKeyDown(e){if(this.href)return;let t=e.key===`Enter`,n=e.key===` `;(t||n)&&(e.preventDefault(),this.anchorElement.click())}handleClick(e){this.isDisabled&&(e.preventDefault(),e.stopPropagation())}syncAttributes(){let e=this.anchorElement;e&&(e.dataset.variant=this.variant,this.href&&!this.isDisabled?(e.setAttribute(`href`,this.href),e.removeAttribute(`role`),e.removeAttribute(`tabindex`)):(e.removeAttribute(`href`),e.setAttribute(`role`,`button`),e.setAttribute(`tabindex`,this.isDisabled?`-1`:`0`)),this.hasAttribute(`target`)?e.setAttribute(`target`,this.getAttribute(`target`)):e.removeAttribute(`target`),this.hasAttribute(`rel`)?e.setAttribute(`rel`,this.getAttribute(`rel`)):this.getAttribute(`target`)===`_blank`?e.setAttribute(`rel`,`noopener noreferrer`):e.removeAttribute(`rel`),this.hasAttribute(`aria-label`)?e.setAttribute(`aria-label`,this.getAttribute(`aria-label`)):e.removeAttribute(`aria-label`),e.setAttribute(`aria-disabled`,String(this.isDisabled)))}render(){this.shadowRoot.innerHTML=`
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
          font-size: var(--size-4);
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
    `}};customElements.define(`app-button`,t);var n=`app-theme`,r={LIGHT:`light`,DARK:`dark`};function i(){return localStorage.getItem(n)}function a(){return window.matchMedia(`(prefers-color-scheme: dark)`).matches?r.DARK:r.LIGHT}function o(){return document.documentElement.dataset.theme||r.LIGHT}function s(e){return document.documentElement.dataset.theme=e,localStorage.setItem(n,e),e}function c(){return s(i()||a())}var l=class extends HTMLElement{constructor(){super(),this.handleThemeChange=this.handleThemeChange.bind(this)}connectedCallback(){this.render(),this.syncCheckboxWithTheme(),this.addEvents()}disconnectedCallback(){this.removeEvents()}get checkboxElement(){return this.querySelector(`#theme-toggle-checkbox`)}handleThemeChange(e){let t=e.target.checked?r.DARK:r.LIGHT;s(t),this.dispatchEvent(new CustomEvent(`theme-change`,{bubbles:!0,composed:!0,detail:{theme:t}}))}syncCheckboxWithTheme(){let e=o()===r.DARK;this.checkboxElement.checked=e}addEvents(){this.checkboxElement.addEventListener(`change`,this.handleThemeChange)}removeEvents(){this.checkboxElement.removeEventListener(`change`,this.handleThemeChange)}render(){this.innerHTML=`
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
                transform-origin: center;
                animation: animation-rotate var(--transition-2);
            }
            &:has( :checked ) {
                .dark {
                    display: block;
                    transform-origin: center;
                    animation: animation-rotate var(--transition-2);
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
                transform: rotate(-90deg);
            }
        }
        @keyframes animation-rotate {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-30deg);
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
    `}};customElements.define(`theme-toggle`,l);var u=1e4,d=300,f=[{title:`Notebook app`,technologies:[`HTML`,`CSS`,`JavaScript`],description:`Aplicación web para crear, organizar y administrar notas personales mediante una interfaz clara, accesible y adaptable.`,imageUrl:`/images/projects/notebook-app.webp`,imageAlt:`Vista previa del proyecto Notebook app`,projectUrl:`https://example.com/notebook-app`,repositoryUrl:`https://github.com/usuario/notebook-app`},{title:`Finance dashboard`,technologies:[`Angular`,`TypeScript`,`Express`],description:`Dashboard financiero para consultar balances, movimientos, ingresos, egresos y categorías asociadas a una cuenta.`,imageUrl:`/images/projects/finance-dashboard.webp`,imageAlt:`Vista previa del proyecto Finance dashboard`,projectUrl:`https://example.com/finance-dashboard`,repositoryUrl:`https://github.com/usuario/finance-dashboard`},{title:`Clock app`,technologies:[`Vite`,`Web Components`,`CSS`],description:`Aplicación de reloj que integra temporizador, cronómetro y administración de alarmas mediante Custom Elements.`,imageUrl:`/images/projects/clock-app.webp`,imageAlt:`Vista previa del proyecto Clock app`,projectUrl:`https://example.com/clock-app`,repositoryUrl:`https://github.com/usuario/clock-app`},{title:`Portfolio`,technologies:[`HTML`,`CSS`,`JavaScript`],description:`Portafolio profesional orientado a presentar proyectos, conocimientos técnicos y medios de contacto.`,imageUrl:`/images/projects/portfolio.webp`,imageAlt:`Vista previa del proyecto Portfolio`,projectUrl:`https://example.com/portfolio`,repositoryUrl:`https://github.com/usuario/portfolio`}],p=class extends HTMLElement{#e=f;#t=0;#n=null;#r=null;#i=!1;#a=null;#o={};constructor(){super(),this.handleIndicatorClick=this.handleIndicatorClick.bind(this)}connectedCallback(){this.#o.root||(this.render(),this.cacheElements(),this.renderIndicators(),this.preloadImages(),this.showProject(0,{animate:!1})),this.#o.indicators.addEventListener(`click`,this.handleIndicatorClick)}disconnectedCallback(){this.clearTimers(),this.#o.indicators?.removeEventListener(`click`,this.handleIndicatorClick)}get projects(){return this.#e.map(e=>({...e,technologies:[...e.technologies]}))}set projects(e){this.#e=this.normalizeProjects(e),this.#t=0,this.#o.root&&(this.clearTimers(),this.renderIndicators(),this.preloadImages(),this.showProject(0,{animate:!1}))}showProject(e,{animate:t=!0}={}){let n=this.normalizeProjectIndex(e);if(this.clearRotationTimer(),!t){this.updateProject(n),this.scheduleNextProject();return}if(n===this.#t&&!this.#i){this.updateIndicators(),this.scheduleNextProject();return}if(this.#i){this.#a=n;return}this.transitionToProject(n)}render(){this.innerHTML=`
            <section
                class="gap-9 view-projects"
                aria-label="Proyectos destacados"
                aria-roledescription="carrusel"
            >
                <div
                    class="slide"
                    data-project-slide
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <article class="fx-col fx-ali_s information">
                        <h3
                            class="title"
                            data-project-title
                        >Notebook app</h3>

                        <ul
                            class="gap-3 technologies"
                            data-project-technologies
                            aria-label="Tecnologías utilizadas"
                        >
                            <li class="technology">
                            HTML
                            </li>
                            <li class="technology">
                            CSS
                            </li>
                            <li class="technology">
                            JavaScript
                            </li>
                        </ul>

                        <p
                            class="description"
                            data-project-description
                        >
                        Aplicación web para crear, organizar y administrar notas personales mediante una interfaz clara, accesible y adaptable.
                        </p>

                        <div class="gap-4 actions">
                            <app-button
                                primary
                                class="action--project"
                                data-project-link
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Abrir proyecto
                            </app-button>
                        
                            <app-button
                                ghost
                                class="action--repository"
                                data-repository-link
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Ver repositorio en GitHub"
                                title="Ver repositorio en GitHub"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943"></path>
                                </svg>                        
                                <span class="visually-hidden">
                                    Ver repositorio en GitHub
                                </span>
                            </app-button>
                        </div>
                    </article>

                    <figure class="preview">
                        <img
                            src="/images/projects/notebook-app.webp"
                            alt="Vista previa del proyecto Notebook app"
                            class="image"
                            data-project-image
                            decoding="async"
                        />
                    </figure>
                </div>

                <div
                    class="indicators"
                    data-project-indicators
                    role="group"
                    aria-label="Seleccionar proyecto"
                ></div>
            </section>
        `}cacheElements(){this.#o={root:this.querySelector(`.view-projects`),slide:this.querySelector(`[data-project-slide]`),title:this.querySelector(`[data-project-title]`),technologies:this.querySelector(`[data-project-technologies]`),description:this.querySelector(`[data-project-description]`),image:this.querySelector(`[data-project-image]`),projectLink:this.querySelector(`[data-project-link]`),repositoryLink:this.querySelector(`[data-repository-link]`),indicators:this.querySelector(`[data-project-indicators]`)},this.#o.root.style.setProperty(`--project-duration`,`${u}ms`)}renderIndicators(){let e=document.createDocumentFragment();this.#e.forEach((t,n)=>{let r=document.createElement(`button`),i=document.createElement(`span`),a=document.createElement(`span`);r.type=`button`,r.className=`indicator`,r.dataset.projectIndex=String(n),r.setAttribute(`aria-label`,`Mostrar proyecto ${n+1}: ${t.title}`),i.className=`indicator-track`,a.className=`indicator-progress`,i.append(a),r.append(i),e.append(r)}),this.#o.indicators.replaceChildren(e)}updateProject(e){let t=this.#e[e];this.#t=e,this.#o.title.textContent=t.title,this.#o.description.textContent=t.description,this.renderTechnologies(t.technologies),this.#o.image.src=t.imageUrl,this.#o.image.alt=t.imageAlt,this.configureLink(this.#o.projectLink,t.projectUrl),this.configureLink(this.#o.repositoryLink,t.repositoryUrl),this.updateIndicators(),this.dispatchEvent(new CustomEvent(`projectchange`,{bubbles:!0,detail:{projectIndex:e,project:t}}))}renderTechnologies(e){let t=document.createDocumentFragment();e.forEach(e=>{let n=document.createElement(`li`);n.className=`technology`,n.textContent=e,t.append(n)}),this.#o.technologies.replaceChildren(t)}updateIndicators(){this.#o.indicators.querySelectorAll(`.indicator`).forEach((e,t)=>{let n=t===this.#t;if(e.classList.remove(`is-active`,`is-running`,`is-complete`),e.setAttribute(`aria-pressed`,String(n)),n){if(e.classList.add(`is-active`),this.#e.length===1){e.classList.add(`is-complete`);return}e.offsetWidth,e.classList.add(`is-running`)}})}transitionToProject(e){this.#i=!0,this.#o.slide.classList.add(`is-leaving`),this.#o.slide.setAttribute(`aria-busy`,`true`),this.#r=window.setTimeout(()=>{this.updateProject(e),this.#o.slide.classList.remove(`is-leaving`),this.#o.slide.classList.add(`is-entering`),window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{this.#o.slide.classList.remove(`is-entering`),this.#o.slide.removeAttribute(`aria-busy`),this.#i=!1,this.scheduleNextProject(),this.processPendingProject()})})},d)}processPendingProject(){if(this.#a===null)return;let e=this.#a;this.#a=null,e!==this.#t&&this.showProject(e)}scheduleNextProject(){this.clearRotationTimer(),!(this.#e.length<=1)&&(this.#n=window.setTimeout(()=>{let e=(this.#t+1)%this.#e.length;this.showProject(e)},u))}handleIndicatorClick(e){let t=e.target.closest(`[data-project-index]`);if(!t||!this.#o.indicators.contains(t))return;let n=Number(t.dataset.projectIndex);this.showProject(n)}configureLink(e,t){let n=String(t??``).trim();if(!n){e.hidden=!0,e.removeAttribute(`href`),e.removeAttribute(`target`),e.removeAttribute(`rel`);return}e.hidden=!1,e.setAttribute(`href`,n),e.setAttribute(`target`,`_blank`),e.setAttribute(`rel`,`noopener noreferrer`)}preloadImages(){this.#e.forEach(({imageUrl:e})=>{let t=new Image;t.src=e})}normalizeProjectIndex(e){let t=this.#e.length;return(Number(e)%t+t)%t}normalizeProjects(e){if(!Array.isArray(e)||e.length===0)throw TypeError(`La propiedad projects debe recibir un arreglo con al menos un proyecto.`);return e.map((e,t)=>{let n=Array.isArray(e.technologies)&&e.technologies.length>0;if(!e.title||!e.description||!e.imageUrl||!n)throw TypeError(`El proyecto ubicado en el índice ${t} no contiene la información requerida.`);return{title:String(e.title),technologies:e.technologies.map(String),description:String(e.description),imageUrl:String(e.imageUrl),imageAlt:String(e.imageAlt??`Vista previa de ${e.title}`),projectUrl:String(e.projectUrl??``),repositoryUrl:String(e.repositoryUrl??``)}})}clearRotationTimer(){this.#n!==null&&(window.clearTimeout(this.#n),this.#n=null)}clearTimers(){this.clearRotationTimer(),this.#r!==null&&(window.clearTimeout(this.#r),this.#r=null)}};customElements.get(`app-view-projects`)||customElements.define(`app-view-projects`,p);var m=[{position:`AGENTE DE SOPORTE IT`,company:`Grupo KFC Ecuador`,period:`Nov. 2024 — Actualidad`,description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dignissimos, doloremque distinctio animi reprehenderit exercitationem.`,achievements:[`Desarrollo de componentes reutilizables con JavaScript.`,`Optimización del rendimiento general de la interfaz.`,`Implementación de estándares de accesibilidad web.`]},{position:`EJECUTIVO DE CUENTAS`,company:`Qbit`,period:`Dic. 2023 — Mar. 2024`,description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita consequatur provident molestias reiciendis veniam voluptatibus.`,achievements:[`Migración de módulos heredados a una arquitectura modular.`,`Reducción de código duplicado mediante componentes compartidos.`,`Integración de servicios REST para gestionar información.`]},{position:`ANALISTA DE DATOS`,company:`Servicobranzas S.A`,period:`Sep. 2023 — Dic. 2023`,description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam exercitationem recusandae excepturi molestiae soluta voluptatum.`,achievements:[`Automatización del registro y seguimiento de solicitudes.`,`Creación de paneles para visualizar indicadores operativos.`,`Documentación técnica de los principales módulos.`]},{position:`WEB MASTER`,company:`Credacart.com`,period:`Ago. 2021 — May. 2023`,description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ullam inventore praesentium atque voluptate temporibus.`,achievements:[`Construcción de interfaces responsivas.`,`Aplicación de HTML semántico y CSS modular.`,`Corrección de incompatibilidades entre navegadores.`]}],h=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){let e=m.map((e,t)=>`
                <article
                    class="item ${t%2==0?`item--right`:`item--left`}"
                    role="listitem"
                >
                    <div class="period">
                        <time>${e.period}</time>
                    </div>

                    <span
                        class="marker"
                        aria-hidden="true"
                    ></span>

                    <div class="card">
                        <header class="header">
                            <h3 class="position">
                                ${e.position}
                            </h3>

                            <p class="company">
                                ${e.company}
                            </p>
                        </header>

                        <p class="description">
                            ${e.description}
                        </p>

                        <section class="achievements">
                            <h4 class="achievements-title">
                                Logros
                            </h4>

                            <ul class="achievements-list">
                                ${e.achievements.map(e=>`
                                            <li class="achievement">
                                                ${e}
                                            </li>
                                        `).join(``)}
                            </ul>
                        </section>
                    </div>
                </article>
            `).join(``);this.setHTMLUnsafe(`
            <section
                class="time-line"
                aria-label="Experiencia profesional"
            >
                <div class="list" role="list">
                    ${e}
                </div>
            </section>
        `)}};customElements.define(`app-time-line`,h);var g={direction:`down`,stagger:45,duration:300,exitOffset:50,easing:`cubic-bezier(0.34, 1.56, 0.64, 1)`,bounce:.6,colorFade:280,skipUnchanged:!0,interrupt:!0},_=`\xA0`,v=e=>e===` `?_:e,y=new WeakMap;function b(e){let t=y.get(e);t&&(t.timers.forEach(e=>window.clearTimeout(e)),y.delete(e),C(e,t.target))}function x(e){let t=document.createElement(`span`);return t.className=`char-face`,t.textContent=v(e),t}function S(e){let t=document.createElement(`span`);t.className=`char-slot`,t.dataset.char=e;let n=document.createElement(`span`);return n.className=`char-sizer`,n.textContent=v(e),t.append(n,x(e)),t}function C(e,t){e.classList.add(`slot-text`),e.replaceChildren(...Array.from(t,S))}function w(e,t,n={}){let{direction:r,stagger:i,duration:a,exitOffset:o,easing:s,bounce:c,color:l,colorFade:u,skipUnchanged:d,interrupt:f}={...g,...n},p=y.get(e);if(p&&!f){t!==p.target&&(p.pending={text:t,options:n});return}if(b(e),!e.querySelector(`.char-slot`)){C(e,t);return}let m=Array.from(e.querySelectorAll(`.char-slot`)),h=m.map(e=>e.dataset.char??``).join(``);if(!f&&h===t)return;let _=Math.max(h.length,t.length),T=m.find(e=>(e.dataset.char??``)!==``)??m[0],E=getComputedStyle(e),D=Math.ceil(T?.getBoundingClientRect().height||T?.offsetHeight||e.getBoundingClientRect().height||parseFloat(E.lineHeight)||0)||Math.ceil(parseFloat(E.fontSize)*1.3)||18,O=l?E.color:``;for(let t=m.length;t<_;t++){let t=S(``);e.appendChild(t),m.push(t)}let k=[],A={timers:k,target:t};y.set(e,A);let j=r===`down`?D:-D,M=r===`down`?-D:D,N=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return(n-Math.floor(n))*2-1},P=0;for(let e=0;e<_;e++){let n=h[e]||``,r=t[e]||``;if(n===r&&(d||n===``))continue;let f=m[e],p=f.querySelector(`.char-sizer`),g=f.querySelector(`.char-face`),y=f.getBoundingClientRect().width;p.textContent=v(r);let b=p.getBoundingClientRect().width,S=Math.abs(b-y)>.5;S&&(f.style.width=`${y}px`),(n===``||r===``)&&f.classList.add(`is-resizing`);let C=typeof l==`function`?l(e,_):l,w=r===``,T=Math.round(a*(w?.75:1)*(1+c*.45*N(e,1))),E=w?t.length*.5+(e-t.length)*.25:e,D=Math.round(E*i*(1+c*.25*N(e,2))),A=(c*5*N(e,3)).toFixed(2),F=`transform ${T}ms ${s}`,I=l?`${F}, color ${u}ms linear ${T}ms`:F,L=x(r);if(L.style.transformOrigin=`50% 50%`,L.style.transform=`translateY(${M}px) rotate(${A}deg)`,C&&(L.style.color=C),f.appendChild(L),f.offsetWidth,S){let e=D,t=T;w?(e=D+Math.round(T*.55),t=Math.max(140,Math.round(T*.6))):n===``&&(t=Math.max(140,Math.round(T*.45))),k.push(window.setTimeout(()=>{f.style.transition=`width ${t}ms cubic-bezier(0.2, 0, 0, 1)`,f.style.width=`${b}px`},e)),P=Math.max(P,e+t)}P=Math.max(P,D+o+T+(l?u:0)),g&&k.push(window.setTimeout(()=>{g.style.transition=F,g.style.transform=`translateY(${j}px) rotate(${-Number(A)}deg)`},D)),k.push(window.setTimeout(()=>{L.style.transition=I,L.style.transform=`translateY(0) rotate(0deg)`,l&&(L.style.color=O);let e=t=>{t.propertyName===`transform`&&(L.removeEventListener(`transitionend`,e),f.dataset.char=r,f.style.removeProperty(`transition`),f.style.removeProperty(`width`),f.classList.remove(`is-resizing`),f.querySelectorAll(`.char-face`).forEach(e=>{e!==L&&e.remove()}))};L.addEventListener(`transitionend`,e)},D+o))}let F=P+80;k.push(window.setTimeout(()=>{let n=A.pending;y.delete(e),C(e,t),n&&w(e,n.text,n.options)},F))}function T(e,t=``){b(e),e.classList.remove(`slot-text`),e.textContent=t}function E(e,t,n={}){let r=t,i,a;return C(e,t),{element:e,get value(){return r},set(t,o={}){clearTimeout(i),a=void 0,r=t,w(e,t,{...n,...o})},flash(t,{revertAfter:o=1400,enter:s,exit:c}={}){a===void 0&&(a=r),r=t,w(e,t,{...n,interrupt:!1,...s}),clearTimeout(i),i=window.setTimeout(()=>{let t=a;a=void 0,i=void 0,r=t,w(e,t,{...n,interrupt:!1,...c})},o)},destroy(){clearTimeout(i),T(e,r)}}}function D(e,t,n={}){let{interval:r=5e3,direction:i=`up`,stagger:a=45,duration:o=300,interrupt:s=!0}=n,c=document.querySelector(e);if(!c)throw Error(`No se encontró el elemento con el selector: ${e}`);if(!Array.isArray(t)||t.length===0)throw Error(`La lista de palabras debe contener al menos una palabra.`);let l=0,u=E(c,t[l],{direction:i,stagger:a,duration:o,interrupt:s}),d=setInterval(()=>{l=(l+1)%t.length,u.set(t[l],{direction:i,stagger:a,duration:o,interrupt:s})},r);return{stop(){clearInterval(d)},destroy(){clearInterval(d),u.destroy()},getCurrentWord(){return t[l]}}}var O=`/portfolio/assets/profile_photo-4VQzsoEu.webp`;c();var k={linkedin:`https://www.linkedin.com/in/gaboquerizo/`,github:`https://github.com/gaboquerizo/`,pinterest:`https://es.pinterest.com/gaboquerizo/`};document.querySelector(`#app`).innerHTML=`
<section class="h-dfull fx-col fx-jsc_sb">
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
            <app-button ghost href="#projects">
              Proyectos
            </app-button>
          </li>
          <li>
            <app-button ghost href="#experience">
              Experiencia
            </app-button>
          </li>
          <li>
            <app-button ghost href="#skills">
              Habilidades
            </app-button>
          </li>
          <li>
            <app-button ghost href="#contact">
              Contacto
            </app-button>
          </li>
        </ul>
      </nav>
      <div class="fx-ali_c header-theme-toggle">
        <theme-toggle></theme-toggle>
      </div>
    </header>
    <main class="main h-full fx-col fx-ali_c fx-jsc_se">
      <div class="profile-photo fx">
        <span class="profile-tooltip">
          @gaboquerizo
        </span>
        <img src="${O}" class="profile-photo_img" alt="Me">
      </div>
      <div class="profile">
        <h1 class="txt-center">
          <span class="username">
            Gabriel Baquerizo Palacios
          </span>
          <br>
          <span class="profession">
            <span class="primary">
              Software
            </span>
            <span class="secondary">
              Development
            </span>
          </span>
        </h1>
      </div>
      <div class="main-cta_btn fx gap-4">
        <app-button outline href="#about_me">
          Acerca de mi
        </app-button>
        <app-button primary href="https://drive.google.com/file/d/1q0n7vRciyBmYrKfLThf9tGTQliNS2caU/view?usp=drive_link" target="_blank" data-btn-download="">
          Descargar CV
        </app-button>
      </div>
    </main>
    <footer class="footer w-full fx-ctr">
      <div class="scroll-animation">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 10l5 5l5-5"></path>
        </svg>
      </div>
    </footer>
</section>
<section id="about_me" class="fx-ctr fx-col">
    <h2 class="heading-2"> Quien soy </h2>
    <div class="about-me gap-6">
      <div class="about-me_img fx-col gap-4">
        <img src="${O}" alt="Foto de Gabriel">
        <nav class="about-me_links fx-jsc_se">
          <a href="${k.linkedin}" class="fx" alt="linkedin" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 9.5H4c-.943 0-1.414 0-1.707.293S2 10.557 2 11.5V20c0 .943 0 1.414.293 1.707S3.057 22 4 22h.5c.943 0 1.414 0 1.707-.293S6.5 20.943 6.5 20v-8.5c0-.943 0-1.414-.293-1.707S5.443 9.5 4.5 9.5m2-5.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m5.826 5.25H11.5c-.943 0-1.414 0-1.707.293S9.5 10.557 9.5 11.5V20c0 .943 0 1.414.293 1.707S10.557 22 11.5 22h.5c.943 0 1.414 0 1.707-.293S14 20.943 14 20v-3.5c0-1.657.528-3 2.088-3c.78 0 1.412.672 1.412 1.5v4.5c0 .943 0 1.414.293 1.707s.764.293 1.707.293h.499c.942 0 1.414 0 1.707-.293c.292-.293.293-.764.293-1.706L22 14c0-2.486-2.364-4.5-4.703-4.5c-1.332 0-2.52.652-3.297 1.673c0-.63 0-.945-.137-1.179a1 1 0 0 0-.358-.358c-.234-.137-.549-.137-1.179-.137" color="currentColor"></path>
            </svg>
          </a>
          <a href="${k.github}" class="fx" alt="github" title="GitHub" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
                <path d="M10 20.568c-3.429 1.157-6.286 0-8-3.568"></path>
                <path d="M10 22v-3.242c0-.598.184-1.118.48-1.588c.204-.322.064-.78-.303-.88C7.134 15.452 5 14.107 5 9.645c0-1.16.38-2.25 1.048-3.2c.166-.236.25-.354.27-.46c.02-.108-.015-.247-.085-.527c-.283-1.136-.264-2.343.16-3.43c0 0 .877-.287 2.874.96c.456.285.684.428.885.46s.469-.035 1.005-.169A9.5 9.5 0 0 1 13.5 3a9.6 9.6 0 0 1 2.343.28c.536.134.805.2 1.006.169c.2-.032.428-.175.884-.46c1.997-1.247 2.874-.96 2.874-.96c.424 1.087.443 2.294.16 3.43c-.07.28-.104.42-.084.526s.103.225.269.461c.668.95 1.048 2.04 1.048 3.2c0 4.462-2.134 5.807-5.177 6.643c-.367.101-.507.559-.303.88c.296.47.48.99.48 1.589V22"></path>
              </g>
            </svg>
          </a>
          <a href="" class="fx" alt="dribbble" title="Dribbble" style="display: none;" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M22 13.264A15.5 15.5 0 0 0 19.147 13C13.795 13 9.034 15.742 6 20M19 5c-3.13 3.667-7.832 6-13.09 6c-1.346 0-2.655-.153-3.91-.441"></path>
                <path d="M14.618 22A18.6 18.6 0 0 0 15 18.24C15 11.926 11.834 6.347 7 3"></path>
              </g>
            </svg>
          </a>
          <a href="${k.pinterest}" class="fx" alt="pinterest" title="Pinterest" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
                <path d="M12 11L8 21m1.974-4.428A5 5 0 1 0 7.67 14.5"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </g>
            </svg>
          </a>
        </nav>
      </div>
      <div class="about-me_greeting fx-col gap-6">
        <h3>
            Un cordial saludo 👋
        </h3>
        <p>
            Mi nombre es Gabriel, soy un desarrollador de software especializado en el desarrollo web de lado Frontend. También en diseño de interfaces UI y experiencia de usuario UX.
        </p>
        <p>            
            Me gusta promover la innovación tecnológica, ya que tengo la capacidad de identificar problemas y crear soluciones que permitan mejorar la productividad y optimizar los tiempos que demandan los procesos, aportando al crecimiento del negocio o la empresa.
        </p>
      </div>
    </div>
</section>
<section id="projects" class="fx-ctr fx-col">
    <div class="txt-center">
      <h2 class="heading-2">Proyectos</h2>
    </div>
    <div>
      <app-view-projects></app-view-projects>
    </div>
</section>
<section id="experience" class="fx-ctr fx-col">
    <div class="txt-center">
      <h2 class="heading-2">Experiencia</h2>
    </div>
    <div>
      <app-time-line></app-time-line>
    </div>
</section>
          <!--

      <section id="experience">
        <h2>Experiencia</h2>
      </section>

      <section id="skills">
        <h2>Habilidades</h2>
      </section>

      <section id="contact">
        <h2>Contacto</h2>
      </section>
      -->
`,D(`.primary`,[`UI/UX`,`Frontend`,`Backend`,`Database`,`QA`,`Dev`],{interval:4e3,direction:`up`,stagger:100,duration:500,interrupt:!0}),D(`.secondary`,[`designer`,`developer`,`developer`,`admin`,`testing`,`Ops`],{interval:4e3,direction:`up`,stagger:100,duration:500,interrupt:!0});