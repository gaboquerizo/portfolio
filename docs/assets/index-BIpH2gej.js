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
          background-color: var(--color);
          color: var(--tx-cut-out);
        }

        .app-button[data-variant="primary"]:hover {
          background-color: var(--color);
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
    `}};customElements.define(`theme-toggle`,l);var u={direction:`down`,stagger:45,duration:300,exitOffset:50,easing:`cubic-bezier(0.34, 1.56, 0.64, 1)`,bounce:.6,colorFade:280,skipUnchanged:!0,interrupt:!0},d=`\xA0`,f=e=>e===` `?d:e,p=new WeakMap;function m(e){let t=p.get(e);t&&(t.timers.forEach(e=>window.clearTimeout(e)),p.delete(e),_(e,t.target))}function h(e){let t=document.createElement(`span`);return t.className=`char-face`,t.textContent=f(e),t}function g(e){let t=document.createElement(`span`);t.className=`char-slot`,t.dataset.char=e;let n=document.createElement(`span`);return n.className=`char-sizer`,n.textContent=f(e),t.append(n,h(e)),t}function _(e,t){e.classList.add(`slot-text`),e.replaceChildren(...Array.from(t,g))}function v(e,t,n={}){let{direction:r,stagger:i,duration:a,exitOffset:o,easing:s,bounce:c,color:l,colorFade:d,skipUnchanged:y,interrupt:b}={...u,...n},x=p.get(e);if(x&&!b){t!==x.target&&(x.pending={text:t,options:n});return}if(m(e),!e.querySelector(`.char-slot`)){_(e,t);return}let S=Array.from(e.querySelectorAll(`.char-slot`)),C=S.map(e=>e.dataset.char??``).join(``);if(!b&&C===t)return;let w=Math.max(C.length,t.length),T=S.find(e=>(e.dataset.char??``)!==``)??S[0],E=getComputedStyle(e),D=Math.ceil(T?.getBoundingClientRect().height||T?.offsetHeight||e.getBoundingClientRect().height||parseFloat(E.lineHeight)||0)||Math.ceil(parseFloat(E.fontSize)*1.3)||18,O=l?E.color:``;for(let t=S.length;t<w;t++){let t=g(``);e.appendChild(t),S.push(t)}let k=[],A={timers:k,target:t};p.set(e,A);let j=r===`down`?D:-D,M=r===`down`?-D:D,N=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return(n-Math.floor(n))*2-1},P=0;for(let e=0;e<w;e++){let n=C[e]||``,r=t[e]||``;if(n===r&&(y||n===``))continue;let u=S[e],p=u.querySelector(`.char-sizer`),m=u.querySelector(`.char-face`),g=u.getBoundingClientRect().width;p.textContent=f(r);let _=p.getBoundingClientRect().width,v=Math.abs(_-g)>.5;v&&(u.style.width=`${g}px`),(n===``||r===``)&&u.classList.add(`is-resizing`);let b=typeof l==`function`?l(e,w):l,x=r===``,T=Math.round(a*(x?.75:1)*(1+c*.45*N(e,1))),E=x?t.length*.5+(e-t.length)*.25:e,D=Math.round(E*i*(1+c*.25*N(e,2))),A=(c*5*N(e,3)).toFixed(2),F=`transform ${T}ms ${s}`,I=l?`${F}, color ${d}ms linear ${T}ms`:F,L=h(r);if(L.style.transformOrigin=`50% 50%`,L.style.transform=`translateY(${M}px) rotate(${A}deg)`,b&&(L.style.color=b),u.appendChild(L),u.offsetWidth,v){let e=D,t=T;x?(e=D+Math.round(T*.55),t=Math.max(140,Math.round(T*.6))):n===``&&(t=Math.max(140,Math.round(T*.45))),k.push(window.setTimeout(()=>{u.style.transition=`width ${t}ms cubic-bezier(0.2, 0, 0, 1)`,u.style.width=`${_}px`},e)),P=Math.max(P,e+t)}P=Math.max(P,D+o+T+(l?d:0)),m&&k.push(window.setTimeout(()=>{m.style.transition=F,m.style.transform=`translateY(${j}px) rotate(${-Number(A)}deg)`},D)),k.push(window.setTimeout(()=>{L.style.transition=I,L.style.transform=`translateY(0) rotate(0deg)`,l&&(L.style.color=O);let e=t=>{t.propertyName===`transform`&&(L.removeEventListener(`transitionend`,e),u.dataset.char=r,u.style.removeProperty(`transition`),u.style.removeProperty(`width`),u.classList.remove(`is-resizing`),u.querySelectorAll(`.char-face`).forEach(e=>{e!==L&&e.remove()}))};L.addEventListener(`transitionend`,e)},D+o))}let F=P+80;k.push(window.setTimeout(()=>{let n=A.pending;p.delete(e),_(e,t),n&&v(e,n.text,n.options)},F))}function y(e,t=``){m(e),e.classList.remove(`slot-text`),e.textContent=t}function b(e,t,n={}){let r=t,i,a;return _(e,t),{element:e,get value(){return r},set(t,o={}){clearTimeout(i),a=void 0,r=t,v(e,t,{...n,...o})},flash(t,{revertAfter:o=1400,enter:s,exit:c}={}){a===void 0&&(a=r),r=t,v(e,t,{...n,interrupt:!1,...s}),clearTimeout(i),i=window.setTimeout(()=>{let t=a;a=void 0,i=void 0,r=t,v(e,t,{...n,interrupt:!1,...c})},o)},destroy(){clearTimeout(i),y(e,r)}}}function x(e,t,n={}){let{interval:r=5e3,direction:i=`up`,stagger:a=45,duration:o=300,interrupt:s=!0}=n,c=document.querySelector(e);if(!c)throw Error(`No se encontró el elemento con el selector: ${e}`);if(!Array.isArray(t)||t.length===0)throw Error(`La lista de palabras debe contener al menos una palabra.`);let l=0,u=b(c,t[l],{direction:i,stagger:a,duration:o,interrupt:s}),d=setInterval(()=>{l=(l+1)%t.length,u.set(t[l],{direction:i,stagger:a,duration:o,interrupt:s})},r);return{stop(){clearInterval(d)},destroy(){clearInterval(d),u.destroy()},getCurrentWord(){return t[l]}}}var S=`/portfolio/assets/profile_photo-4VQzsoEu.webp`;c(),document.querySelector(`#app`).innerHTML=`
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
    
    <main class="w-full fx-col fx-ali_c">

      <section class="hero fx-col fx-ali_c">

        <div class="hero-photo fx">
          <span class="tooltip">
            @gaboquerizo
          </span>
          <img src="${S}" class="profile-photo" alt="Me">
        </div>
        
        <div class="hero-title">
          <h1 class="txt-center">
            
            <span class="greeting">
              Gabriel Baquerizo Palacios
            </span>
            <br>
            
            <span class="specialties">
              <span class="primary">
                Front-end
              </span>
              <span class="secondary">
                Development
              </span>
            </span>
          </h1>
        </div>
        
        <div class="hero-cta fx gap-4">
          <app-button outline href="#about_me">
            Acerca de mi
          </app-button>
          <app-button primary href="https://drive.google.com/file/d/1q0n7vRciyBmYrKfLThf9tGTQliNS2caU/view?usp=drive_link" target="_blank" data-btn-download="">
            Descargar CV
          </app-button>
        </div>

      </section>

      <!--
      <section id="projects">
        <h2>Proyectos</h2>
      </section>

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
      
    </main>
    <footer>
        
    </footer>
`,x(`.primary`,[`UI/UX`,`Frontend`,`Backend`,`Database`,`QA`,`Dev`],{interval:4e3,direction:`up`,stagger:100,duration:500,interrupt:!0}),x(`.secondary`,[`designer`,`developer`,`developer`,`admin`,`testing`,`Ops`],{interval:4e3,direction:`up`,stagger:100,duration:500,interrupt:!0});