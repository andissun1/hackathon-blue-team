import { Module } from "../core/module";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {}

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
}
