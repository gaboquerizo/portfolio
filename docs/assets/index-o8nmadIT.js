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
    `}};customElements.define(`theme-toggle`,l);var u={direction:`down`,stagger:45,duration:300,exitOffset:50,easing:`cubic-bezier(0.34, 1.56, 0.64, 1)`,bounce:.6,colorFade:280,skipUnchanged:!0,interrupt:!0},d=`\xA0`,f=e=>e===` `?d:e,p=new WeakMap;function m(e){let t=p.get(e);t&&(t.timers.forEach(e=>window.clearTimeout(e)),p.delete(e),_(e,t.target))}function h(e){let t=document.createElement(`span`);return t.className=`char-face`,t.textContent=f(e),t}function g(e){let t=document.createElement(`span`);t.className=`char-slot`,t.dataset.char=e;let n=document.createElement(`span`);return n.className=`char-sizer`,n.textContent=f(e),t.append(n,h(e)),t}function _(e,t){e.classList.add(`slot-text`),e.replaceChildren(...Array.from(t,g))}function v(e,t,n={}){let{direction:r,stagger:i,duration:a,exitOffset:o,easing:s,bounce:c,color:l,colorFade:d,skipUnchanged:y,interrupt:b}={...u,...n},x=p.get(e);if(x&&!b){t!==x.target&&(x.pending={text:t,options:n});return}if(m(e),!e.querySelector(`.char-slot`)){_(e,t);return}let S=Array.from(e.querySelectorAll(`.char-slot`)),C=S.map(e=>e.dataset.char??``).join(``);if(!b&&C===t)return;let w=Math.max(C.length,t.length),T=S.find(e=>(e.dataset.char??``)!==``)??S[0],E=getComputedStyle(e),D=Math.ceil(T?.getBoundingClientRect().height||T?.offsetHeight||e.getBoundingClientRect().height||parseFloat(E.lineHeight)||0)||Math.ceil(parseFloat(E.fontSize)*1.3)||18,O=l?E.color:``;for(let t=S.length;t<w;t++){let t=g(``);e.appendChild(t),S.push(t)}let k=[],A={timers:k,target:t};p.set(e,A);let j=r===`down`?D:-D,M=r===`down`?-D:D,N=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return(n-Math.floor(n))*2-1},P=0;for(let e=0;e<w;e++){let n=C[e]||``,r=t[e]||``;if(n===r&&(y||n===``))continue;let u=S[e],p=u.querySelector(`.char-sizer`),m=u.querySelector(`.char-face`),g=u.getBoundingClientRect().width;p.textContent=f(r);let _=p.getBoundingClientRect().width,v=Math.abs(_-g)>.5;v&&(u.style.width=`${g}px`),(n===``||r===``)&&u.classList.add(`is-resizing`);let b=typeof l==`function`?l(e,w):l,x=r===``,T=Math.round(a*(x?.75:1)*(1+c*.45*N(e,1))),E=x?t.length*.5+(e-t.length)*.25:e,D=Math.round(E*i*(1+c*.25*N(e,2))),A=(c*5*N(e,3)).toFixed(2),F=`transform ${T}ms ${s}`,I=l?`${F}, color ${d}ms linear ${T}ms`:F,L=h(r);if(L.style.transformOrigin=`50% 50%`,L.style.transform=`translateY(${M}px) rotate(${A}deg)`,b&&(L.style.color=b),u.appendChild(L),u.offsetWidth,v){let e=D,t=T;x?(e=D+Math.round(T*.55),t=Math.max(140,Math.round(T*.6))):n===``&&(t=Math.max(140,Math.round(T*.45))),k.push(window.setTimeout(()=>{u.style.transition=`width ${t}ms cubic-bezier(0.2, 0, 0, 1)`,u.style.width=`${_}px`},e)),P=Math.max(P,e+t)}P=Math.max(P,D+o+T+(l?d:0)),m&&k.push(window.setTimeout(()=>{m.style.transition=F,m.style.transform=`translateY(${j}px) rotate(${-Number(A)}deg)`},D)),k.push(window.setTimeout(()=>{L.style.transition=I,L.style.transform=`translateY(0) rotate(0deg)`,l&&(L.style.color=O);let e=t=>{t.propertyName===`transform`&&(L.removeEventListener(`transitionend`,e),u.dataset.char=r,u.style.removeProperty(`transition`),u.style.removeProperty(`width`),u.classList.remove(`is-resizing`),u.querySelectorAll(`.char-face`).forEach(e=>{e!==L&&e.remove()}))};L.addEventListener(`transitionend`,e)},D+o))}let F=P+80;k.push(window.setTimeout(()=>{let n=A.pending;p.delete(e),_(e,t),n&&v(e,n.text,n.options)},F))}function y(e,t=``){m(e),e.classList.remove(`slot-text`),e.textContent=t}function b(e,t,n={}){let r=t,i,a;return _(e,t),{element:e,get value(){return r},set(t,o={}){clearTimeout(i),a=void 0,r=t,v(e,t,{...n,...o})},flash(t,{revertAfter:o=1400,enter:s,exit:c}={}){a===void 0&&(a=r),r=t,v(e,t,{...n,interrupt:!1,...s}),clearTimeout(i),i=window.setTimeout(()=>{let t=a;a=void 0,i=void 0,r=t,v(e,t,{...n,interrupt:!1,...c})},o)},destroy(){clearTimeout(i),y(e,r)}}}function x(e,t,n={}){let{interval:r=5e3,direction:i=`up`,stagger:a=45,duration:o=300,interrupt:s=!0}=n,c=document.querySelector(e);if(!c)throw Error(`No se encontró el elemento con el selector: ${e}`);if(!Array.isArray(t)||t.length===0)throw Error(`La lista de palabras debe contener al menos una palabra.`);let l=0,u=b(c,t[l],{direction:i,stagger:a,duration:o,interrupt:s}),d=setInterval(()=>{l=(l+1)%t.length,u.set(t[l],{direction:i,stagger:a,duration:o,interrupt:s})},r);return{stop(){clearInterval(d)},destroy(){clearInterval(d),u.destroy()},getCurrentWord(){return t[l]}}}var S=`/portfolio/assets/profile_photo-4VQzsoEu.webp`;c(),document.querySelector(`#app`).innerHTML=`
<div class="h-dfull fx-col fx-jsc_sb">
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
        <img src="${S}" class="profile-photo_img" alt="Me">
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
  </div>
<div>
<div>
  <section class="">
    <div>
        <img src="" alt="">
        <nav class="fx presentation__nav">
          <a href="" class="fx" alt="linkedin" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 9.5H4c-.943 0-1.414 0-1.707.293S2 10.557 2 11.5V20c0 .943 0 1.414.293 1.707S3.057 22 4 22h.5c.943 0 1.414 0 1.707-.293S6.5 20.943 6.5 20v-8.5c0-.943 0-1.414-.293-1.707S5.443 9.5 4.5 9.5m2-5.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m5.826 5.25H11.5c-.943 0-1.414 0-1.707.293S9.5 10.557 9.5 11.5V20c0 .943 0 1.414.293 1.707S10.557 22 11.5 22h.5c.943 0 1.414 0 1.707-.293S14 20.943 14 20v-3.5c0-1.657.528-3 2.088-3c.78 0 1.412.672 1.412 1.5v4.5c0 .943 0 1.414.293 1.707s.764.293 1.707.293h.499c.942 0 1.414 0 1.707-.293c.292-.293.293-.764.293-1.706L22 14c0-2.486-2.364-4.5-4.703-4.5c-1.332 0-2.52.652-3.297 1.673c0-.63 0-.945-.137-1.179a1 1 0 0 0-.358-.358c-.234-.137-.549-.137-1.179-.137" color="currentColor"></path>
            </svg>
          </a>
          <a href="" class="fx" alt="github" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
                <path d="M10 20.568c-3.429 1.157-6.286 0-8-3.568"></path>
                <path d="M10 22v-3.242c0-.598.184-1.118.48-1.588c.204-.322.064-.78-.303-.88C7.134 15.452 5 14.107 5 9.645c0-1.16.38-2.25 1.048-3.2c.166-.236.25-.354.27-.46c.02-.108-.015-.247-.085-.527c-.283-1.136-.264-2.343.16-3.43c0 0 .877-.287 2.874.96c.456.285.684.428.885.46s.469-.035 1.005-.169A9.5 9.5 0 0 1 13.5 3a9.6 9.6 0 0 1 2.343.28c.536.134.805.2 1.006.169c.2-.032.428-.175.884-.46c1.997-1.247 2.874-.96 2.874-.96c.424 1.087.443 2.294.16 3.43c-.07.28-.104.42-.084.526s.103.225.269.461c.668.95 1.048 2.04 1.048 3.2c0 4.462-2.134 5.807-5.177 6.643c-.367.101-.507.559-.303.88c.296.47.48.99.48 1.589V22"></path>
              </g>
            </svg>
          </a>
          <a href="" class="fx" alt="dribbble" title="Dribbble">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M22 13.264A15.5 15.5 0 0 0 19.147 13C13.795 13 9.034 15.742 6 20M19 5c-3.13 3.667-7.832 6-13.09 6c-1.346 0-2.655-.153-3.91-.441"></path>
                <path d="M14.618 22A18.6 18.6 0 0 0 15 18.24C15 11.926 11.834 6.347 7 3"></path>
              </g>
            </svg>
          </a>
          <a href="" class="fx" alt="pinterest" title="Pinterest">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
                <path d="M12 11L8 21m1.974-4.428A5 5 0 1 0 7.67 14.5"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </g>
            </svg>
          </a>
        </nav>
    </div>
    <div>
        <h2>
            👋 Un cordial saludo!
        </h2>
        <p>
            Soy Gabriel, un desarrollador de software especializado en el desarrollo web de lado Frontend. También en diseño de interfaces UI y experiencia de usuario UX.
            <br>
            Me gusta promover la innovación tecnológica, ya que tengo la capacidad de identificar problemas y crear soluciones que permitan mejorar la productividad y optimizar los tiempos que demandan los procesos, aportando al crecimiento del negocio o la empresa.
        </p>
    </div>
  </section>
</div>

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
`,x(`.primary`,[`UI/UX`,`Frontend`,`Backend`,`Database`,`QA`,`Dev`],{interval:4e3,direction:`up`,stagger:100,duration:500,interrupt:!0}),x(`.secondary`,[`designer`,`developer`,`developer`,`admin`,`testing`,`Ops`],{interval:4e3,direction:`up`,stagger:100,duration:500,interrupt:!0});