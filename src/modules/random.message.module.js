import { Module } from '../core/module';
import { random } from '../utils';
import { createMessage } from '../utils';

export class RandomMessageModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const randomPhrase = this.getRandomPhrase();
    this.showMessage(randomPhrase);
  }

  getRandomPhrase() {
    const phrases = [
      'The early bird catches the worm',
      'Actions speak louder than words',
      'Beauty is in the eye of the beholder',
      "Don't count your chickens before they hatch",
      'Every cloud has a silver lining',
      'Fortune favors the bold',
      'Honesty is the best policy',
      'If the shoe fits, wear it',
      'Knowledge is power',
      'Look before you leap',
    ];

    return phrases[random(0, phrases.length - 1)];
  }

  showMessage(message) {
    if (!this.messageElement) {
      this.messageElement = createMessage();
      document.body.appendChild(this.messageElement);
    }

    this.messageElement.innerText = message;

    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }

    this.hideTimeout = setTimeout(() => {
      this.messageElement.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(this.messageElement);
        this.messageElement = null;
      }, 300);
    }, 1500);
  }
}
