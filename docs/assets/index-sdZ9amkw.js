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
    `}};customElements.define(`theme-toggle`,s);var c={direction:`down`,stagger:45,duration:300,exitOffset:50,easing:`cubic-bezier(0.34, 1.56, 0.64, 1)`,bounce:.6,colorFade:280,skipUnchanged:!0,interrupt:!0},l=`\xA0`,u=e=>e===` `?l:e,d=new WeakMap;function f(e){let t=d.get(e);t&&(t.timers.forEach(e=>window.clearTimeout(e)),d.delete(e),h(e,t.target))}function p(e){let t=document.createElement(`span`);return t.className=`char-face`,t.textContent=u(e),t}function m(e){let t=document.createElement(`span`);t.className=`char-slot`,t.dataset.char=e;let n=document.createElement(`span`);return n.className=`char-sizer`,n.textContent=u(e),t.append(n,p(e)),t}function h(e,t){e.classList.add(`slot-text`),e.replaceChildren(...Array.from(t,m))}function g(e,t,n={}){let{direction:r,stagger:i,duration:a,exitOffset:o,easing:s,bounce:l,color:_,colorFade:v,skipUnchanged:y,interrupt:b}={...c,...n},x=d.get(e);if(x&&!b){t!==x.target&&(x.pending={text:t,options:n});return}if(f(e),!e.querySelector(`.char-slot`)){h(e,t);return}let S=Array.from(e.querySelectorAll(`.char-slot`)),C=S.map(e=>e.dataset.char??``).join(``);if(!b&&C===t)return;let w=Math.max(C.length,t.length),T=S.find(e=>(e.dataset.char??``)!==``)??S[0],E=getComputedStyle(e),D=Math.ceil(T?.getBoundingClientRect().height||T?.offsetHeight||e.getBoundingClientRect().height||parseFloat(E.lineHeight)||0)||Math.ceil(parseFloat(E.fontSize)*1.3)||18,O=_?E.color:``;for(let t=S.length;t<w;t++){let t=m(``);e.appendChild(t),S.push(t)}let k=[],A={timers:k,target:t};d.set(e,A);let j=r===`down`?D:-D,M=r===`down`?-D:D,N=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return(n-Math.floor(n))*2-1},P=0;for(let e=0;e<w;e++){let n=C[e]||``,r=t[e]||``;if(n===r&&(y||n===``))continue;let c=S[e],d=c.querySelector(`.char-sizer`),f=c.querySelector(`.char-face`),m=c.getBoundingClientRect().width;d.textContent=u(r);let h=d.getBoundingClientRect().width,g=Math.abs(h-m)>.5;g&&(c.style.width=`${m}px`),(n===``||r===``)&&c.classList.add(`is-resizing`);let b=typeof _==`function`?_(e,w):_,x=r===``,T=Math.round(a*(x?.75:1)*(1+l*.45*N(e,1))),E=x?t.length*.5+(e-t.length)*.25:e,D=Math.round(E*i*(1+l*.25*N(e,2))),A=(l*5*N(e,3)).toFixed(2),F=`transform ${T}ms ${s}`,I=_?`${F}, color ${v}ms linear ${T}ms`:F,L=p(r);if(L.style.transformOrigin=`50% 50%`,L.style.transform=`translateY(${M}px) rotate(${A}deg)`,b&&(L.style.color=b),c.appendChild(L),c.offsetWidth,g){let e=D,t=T;x?(e=D+Math.round(T*.55),t=Math.max(140,Math.round(T*.6))):n===``&&(t=Math.max(140,Math.round(T*.45))),k.push(window.setTimeout(()=>{c.style.transition=`width ${t}ms cubic-bezier(0.2, 0, 0, 1)`,c.style.width=`${h}px`},e)),P=Math.max(P,e+t)}P=Math.max(P,D+o+T+(_?v:0)),f&&k.push(window.setTimeout(()=>{f.style.transition=F,f.style.transform=`translateY(${j}px) rotate(${-Number(A)}deg)`},D)),k.push(window.setTimeout(()=>{L.style.transition=I,L.style.transform=`translateY(0) rotate(0deg)`,_&&(L.style.color=O);let e=t=>{t.propertyName===`transform`&&(L.removeEventListener(`transitionend`,e),c.dataset.char=r,c.style.removeProperty(`transition`),c.style.removeProperty(`width`),c.classList.remove(`is-resizing`),c.querySelectorAll(`.char-face`).forEach(e=>{e!==L&&e.remove()}))};L.addEventListener(`transitionend`,e)},D+o))}let F=P+80;k.push(window.setTimeout(()=>{let n=A.pending;d.delete(e),h(e,t),n&&g(e,n.text,n.options)},F))}function _(e,t=``){f(e),e.classList.remove(`slot-text`),e.textContent=t}function v(e,t,n={}){let r=t,i,a;return h(e,t),{element:e,get value(){return r},set(t,o={}){clearTimeout(i),a=void 0,r=t,g(e,t,{...n,...o})},flash(t,{revertAfter:o=1400,enter:s,exit:c}={}){a===void 0&&(a=r),r=t,g(e,t,{...n,interrupt:!1,...s}),clearTimeout(i),i=window.setTimeout(()=>{let t=a;a=void 0,i=void 0,r=t,g(e,t,{...n,interrupt:!1,...c})},o)},destroy(){clearTimeout(i),_(e,r)}}}function y(e,t,n={}){let{interval:r=5e3,direction:i=`up`,stagger:a=45,duration:o=300,interrupt:s=!0}=n,c=document.querySelector(e);if(!c)throw Error(`No se encontró el elemento con el selector: ${e}`);if(!Array.isArray(t)||t.length===0)throw Error(`La lista de palabras debe contener al menos una palabra.`);let l=0,u=v(c,t[l],{direction:i,stagger:a,duration:o,interrupt:s}),d=setInterval(()=>{l=(l+1)%t.length,u.set(t[l],{direction:i,stagger:a,duration:o,interrupt:s})},r);return{stop(){clearInterval(d)},destroy(){clearInterval(d),u.destroy()},getCurrentWord(){return t[l]}}}var b=`/Portfolio/assets/profile_photo-4VQzsoEu.webp`;o(),document.querySelector(`#app`).innerHTML=`
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
    
    <main class="w-full fx-col fx-ali_c">

      <section class="hero fx-col fx-ali_c">

        <div class="hero-photo fx">
          <span class="tooltip">
            @gaboquerizo
          </span>
          <img src="${b}" class="profile-photo" alt="Me">
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
          <a class="btn-cta-1" href="#about_me">
            Acerca de mi
          </a>
          <a class="btn-cta-2" href="https://drive.google.com/file/d/1q0n7vRciyBmYrKfLThf9tGTQliNS2caU/view?usp=drive_link" target="_blank" data-btn-download="">
            Descargar CV
          </a>
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
`,y(`.primary`,[`UI/UX`,`Frontend`,`Backend`,`Database`,`QA`,`Dev`],{interval:4e3,direction:`up`,stagger:100,duration:500,interrupt:!0}),y(`.secondary`,[`designer`,`developer`,`developer`,`admin`,`testing`,`Ops`],{interval:4e3,direction:`up`,stagger:100,duration:500,interrupt:!0});