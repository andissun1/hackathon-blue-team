import { Module } from '../core/module';
import { createMessage } from '../utils';

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.timerElement = null;
  }

  trigger() {
    this.showTimer();
  }

  showTimer() {
    let seconds = prompt('Введите кол-во секунд отсчета');
    seconds = Math.abs(seconds);

    if (seconds) {
      let timer = setInterval(() => {
        if (seconds >= 0) {
          if (!this.timerElement) {
            this.timerElement = createMessage();
            document.body.appendChild(this.timerElement);
          }

          this.timerElement.textContent = `Обратный отсчет пошел. Осталось ${seconds} секунд`;
          seconds--;
        } else {
          clearInterval(timer);
          this.timerElement.textContent = '*Приостановка таймера*';
        }
      }, 1000);

      setTimeout(() => {
        document.body.removeChild(this.timerElement);
        this.timerElement = null;
      }, Number(seconds) * 1000 + 4000);
    } else {
      alert('Некорректорое занчение. Вводите числа.');
    }
  }
}
