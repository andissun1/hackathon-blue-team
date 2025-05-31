import { Module } from "../core/module";

export class Canvas extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    this.draw();
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
  draw() {}
}
