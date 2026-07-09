import 'slot-text/style.css';
import { slotText } from 'slot-text';

export function createSlotText(selector, words, options = {}) {
    const {
        interval = 5000,
        direction = 'up',
        stagger = 45,
        duration = 300,
        interrupt = true,
    } = options;

    const element = document.querySelector(selector);

    if (!element) {
        throw new Error(`No se encontró el elemento con el selector: ${selector}`);
    }

    if (!Array.isArray(words) || words.length === 0) {
        throw new Error('La lista de palabras debe contener al menos una palabra.');
    }

    let currentIndex = 0;

    const animatedText = slotText(element, words[currentIndex], {
        direction,
        stagger,
        duration,
        interrupt,
    });

    const timerId = setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;

        animatedText.set(words[currentIndex], {
            direction,
            stagger,
            duration,
            interrupt,
        });
    }, interval);

    return {
        stop() {
            clearInterval(timerId);
        },

        destroy() {
            clearInterval(timerId);
            animatedText.destroy();
        },

        getCurrentWord() {
            return words[currentIndex];
        },
    };
}