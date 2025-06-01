import {Module} from '../core/module'

export class BackgroundModule extends Module {
    constructor(type, text) {
    super(type, text)
  }

  trigger() {
    document.body.style.backgroundImage = 'none'
    const randomColor = this.getRandomColor()
    document.body.style.backgroundColor = randomColor


    // throw new Error(`Trigger method should be implemented in module "${this.type}"`)
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }

  getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
}