import './app-hero.css';
import '../../components/ui/social-media/ui-social-media.js'
import profilePhoto from '../../assets/images/profile_photo.webp';
import { createSlotText } from "../../lib/slot-text/slot-text.js";

export class AppHero extends HTMLElement {

    connectedCallback() {
        this.render();
        createSlotText(
            '.first-word',
            ['UI/UX', 'Frontend', 'Backend']
        );
        createSlotText(
            '.last-word',
            ['Designer', 'Developer', 'Developer']
        );
    }

    render() {
        this.setHTMLUnsafe(`
            <header class="fx-jsc_c">
              <img src="${profilePhoto}" class="hero-photo" alt="Me">
            </header>
            <div class="hero-heading txt-center">
              <h1>
                Gabriel Baquerizo Palacios
              </h1>
              <h2>
                <span class="first-word">
                  Software
                </span>
                <span class="last-word">
                  Development
                </span>
              </h2>
            </div>
            <footer class="fx-col">
              <ui-social-media></ui-social-media>
              <div class="fx-jsc_c scroll-animation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 10l5 5l5-5"></path>
                </svg>
              </div>
            </footer>
        `);
    };
}

customElements.define('app-hero', AppHero);