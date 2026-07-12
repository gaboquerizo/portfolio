// Styles
import './style.css'

// Components
import './components/app-button/app-button.js';
import './components/theme/theme.component.js';

// Utilities
import { createSlotText } from './shared/text-motion/slot-text.js';
import { initTheme } from './shared/theme/theme.js';
initTheme();

// Resources
import profilePhoto from './assets/images/profile_photo.webp'

document.querySelector('#app').innerHTML = `
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
        <img src="${profilePhoto}" class="profile-photo_img" alt="Me">
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
`

createSlotText(
    '.primary',
    ['UI/UX', 'Frontend', 'Backend', 'Database', 'QA', 'Dev'],
    {
        interval: 4000,
        direction: 'up',
        stagger: 100,
        duration: 500,
        interrupt: true,
    },
);
createSlotText(
    '.secondary',
    ['designer', 'developer', 'developer', 'admin', 'testing', 'Ops'],
    {
        interval: 4000,
        direction: 'up',
        stagger: 100,
        duration: 500,
        interrupt: true,
    },
);