import { Module } from "../core/module";
import random from "../utils";

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    this.createEl();
    // throw new Error(`Trigger method should be implemented in module "${this.type}"`)
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
  createEl() {
    let arrShape = [
      `trapezoid`,
      `triangle`,
      `circle`,
      `squre`,
      `blob`,
      `wavy-circle`,
      `flower`,
      `polygon`,
      `starburst`,
    ];
    let shape = document.createElement(`div`);
    shape.style.background = `linear-gradient(${random(
      0,
      180
    )}deg,rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
      0,
      255
    )}, 1) 0%, rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
      0,
      255
    )}, 1) 35%, rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
      0,
      255
    )}, 1) 100%)`;
    shape.classList = `${arrShape[random(0, 10)]}`;
    shape.style.width = `${random(50, 300)}px`;
    shape.style.height = `${random(50, 300)}px`;
    shape.style.transform = `rotate(${random(0, 360)}deg)`;
    shape.style.position = `absolute`;
    shape.style.top = `${random(1, window.innerHeight)}px`;
    shape.style.left = `${random(1, window.innerWidth)}px`;

    document.body.append(shape);
  }
}
