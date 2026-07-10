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
          <img src="${profilePhoto}" class="profile-photo" alt="Me">
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