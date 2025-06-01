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
    let currentElement = document.querySelector('[id = "random-message"');

    if (currentElement) {
      currentElement.replaceWith(createMessage(message));
    } else {
      currentElement = createMessage(message);
      document.body.appendChild(currentElement);

      setTimeout(() => {
        document.querySelector('[id = "random-message"').style.opacity = '0';
      }, 1500);

      setTimeout(
        () => document.querySelector('[id = "random-message"')?.remove(),
        1800
      );
    }
  }
}
