import {Module} from '../core/module'

export class BackgroundModule extends Module {
    constructor(type, text) {
    super(type, text)
  }

  trigger() {
    throw new Error(`Trigger method should be implemented in module "${this.type}"`)
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}