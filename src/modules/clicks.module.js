import { Module } from '../core/module';
import { createMessage } from '../utils';

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);

    this.messageElement = null;
    this.clicks = 0;
  }

  trigger() {
    if (this.messageElement) {
      return console.log(this.messageElement);
    }
    this.showMessage('На старт!');
    let { messageElement } = this;

    let seconds = -2; // Берётся время на стартовый текст
    setInterval(() => {
      seconds++;
      switch (seconds) {
        case -1:
          messageElement.innerText = 'Внимание!';
          break;
        case 0:
          messageElement.innerText = 'Марш!';
          document.body.addEventListener('click', this.clicker.bind(this));
          messageElement.classList.add('gifClicker');
          break;
        case 5:
          this.showResults();
          document.body.removeEventListener('click', this.clicker.bind(this));
          messageElement.classList.remove('gifClicker');
          break;
        case 10:
          messageElement.style.opacity = '0';
          this.clicks = 0;
          break;
        case 11:
          document.body.removeChild(messageElement);
          this.messageElement = null;
      }
    }, 1000);
  }

  clicker = () => {
    this.clicks++;
    this.messageElement.style.border = `5px solid wheat`;
    setTimeout(() => (this.messageElement.style.border = ''), 100);
  };

  showMessage(message) {
    let div = createMessage(message);
    div.classList.add('button');

    this.messageElement = div;
    document.body.appendChild(this.messageElement);
  }

  showResults() {
    let word = 'кликов';

    if (this.clicks % 10 === 1) {
      word = 'клик';
    } else if (this.clicks % 10 >= 2 && this.clicks % 10 <= 4) {
      word = 'клика';
    }

    if (this.clicks < 10) {
      this.messageElement.innerText = `Всего ${this.clicks} ${word}. Совсем расслабился!`;
    } else if (this.clicks > 10 && this.clicks < 20) {
      this.messageElement.innerText = `Всего ${this.clicks} ${word}. Неплохо. Может попробуем ещё?`;
    } else {
      this.messageElement.innerText = `${this.clicks} ${word}. Ого! У вас достижение "Самый быстрый палец этого сайта 🏅"`;
    }
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
}
