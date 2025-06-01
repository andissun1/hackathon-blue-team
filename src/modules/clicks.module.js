import { Module } from '../core/module';

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);

    this.clicks = 0;
  }

  trigger() {
    if (this.messageElement) return;

    let seconds = -2; // Берётся время на стартовый текст

    this.showMessage('На старт!');
    setInterval(() => {
      seconds++;
      switch (seconds) {
        case -1:
          this.messageElement.innerText = 'Внимание!';
          break;
        case 0:
          this.messageElement.innerText = 'Марш!';
          document.body.addEventListener('click', this.clicker.bind(this));
          this.messageElement.classList.add('gifClicker');
          break;
        case 5:
          this.showResults();

          document.body.removeEventListener('click', this.clicker.bind(this));
          this.messageElement.classList.remove('gifClicker');
          break;
        case 10:
          this.messageElement.style.opacity = '0';
          this.clicks = 0;
          break;
        case 11:
          document.body.removeChild(this.messageElement);
          this.messageElement = null;
      }
    }, 1000);
  }

  showMessage(message) {
    let div = document.createElement('div');
    div.classList.add('button');
    this.messageElement = div;

    document.body.appendChild(this.messageElement);
    this.messageElement.innerText = message;
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
      this.messageElement.innerText = `Всего ${this.clicks} ${word}. Неплохо! Может попробуем новый рекорд поставить?`;
    } else if (this.clicks > 20) {
      this.messageElement.innerText = `Всего ${this.clicks} ${word}. Вау! Впечатляет. Присуждаем медаль "Самый быстрый палец этого сайта 🏅"`;
    }
  }

  clicker = () => {
    this.clicks++;

    this.messageElement.classList.add('active');
    setTimeout(() => {
      this.messageElement.classList.remove('active');
    }, 100);
  };

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
}
