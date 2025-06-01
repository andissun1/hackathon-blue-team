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
      `— Сколько программистов нужно, чтобы вкрутить лампочку?
      — Ни одного. Это hardware problem.`,
      `— Вчера долго пыталась объяснить бабуле, что работаю программистом.
      — Удалось?
      — Короче, сошлись на том, что чиню телевизоры и развожу мышей.`,
      `Работа программиста и шамана имеет много общего — оба бормочут непонятные слова, совершают непонятные действия и не могут объяснить, как оно работает.`,
      `— Почему ваши дети всё время ссорятся?
      — Конфликт версий, — отвечает программист.`,
      `Один монитор — обычный программист, два монитора — продвинутый программист, три монитора — системный программист, четыре монитора — охранник.`,
      `— В чём разница между null и undefined?
      — null — это когда ты знаешь, что ничего нет.
      undefined — это когда ты даже не знаешь, есть ли что-то.`,
      `— Как отлаживают код настоящие мастера?
      — console.log("Почему я здесь?");`,
      `— В чём разница между let и const?
      — let — это "может быть, потом поменяю".
      const — это "клянусь, больше не трону (но потом всё равно поменяю)".`,
      `— Раньше у нас был "Callback Hell".
      Теперь у нас есть "Async/Await Heaven".
      Но код всё равно выглядит как чистилище.`,
      `— JavaScript:
      "Пишешь код → Всё работает → Обновляешь браузер → Всё сломалось".`,
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
    }, 9000);
  }
}
