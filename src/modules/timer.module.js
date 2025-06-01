import { Module } from "../core/module";

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.timerElement = null;
  }

  trigger() {
    this.showTimer();
  }

  showTimer() {
    let seconds = prompt("Введите кол-во секунд отсчета");

    let timer = setInterval(() => {
      if (seconds >= 0) {
        if (!this.timerElement) {
          this.timerElement = document.createElement("div");
          this.timerElement.id = "random-message";
          this.timerElement.style.position = "fixed";
          this.timerElement.style.top = "20px";
          this.timerElement.style.left = "20px";
          this.timerElement.style.backgroundColor = "#333";
          this.timerElement.style.color = "#fff";
          this.timerElement.style.padding = "10px";
          this.timerElement.style.borderRadius = "10px";
          this.timerElement.style.zIndex = "1000";
          this.timerElement.style.opacity = "1";
          this.timerElement.style.transition = "opacity 0.8s ease";
          document.body.appendChild(this.timerElement);
        }
        this.timerElement.textContent = `Обратный отсчет пошел. Осталось ${seconds} секунд`;
        seconds--;
      } else {
        clearInterval(timer);
        this.timerElement.textContent = "*Приостановление таймера*"
        this.timerElement = null;
      }
    }, 1000);
  }
}
