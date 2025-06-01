import { Module } from '../core/module';
import { getRandomColor } from '../utils';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    document.body.style.backgroundImage = 'none';
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
}
