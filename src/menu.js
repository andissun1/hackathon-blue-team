import { Menu } from "./core/menu";
import { BackgroundModule } from "./modules/background.module";
import { ShapeModule } from "./modules/shape.module";
import random from "./utils";
import { Canvas } from "./modules/canvas.module";
export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.el = document.querySelector(selector);
    this.modules = [];
  }

  open(y, x) {
    const menu = document.querySelector("ul");
    menu.classList.toggle("open");
    menu.style.top = `${x}px`;
    menu.style.left = `${y}px`;

    // throw new Error(`"open" method should be implemented in Menu"`)
  }

  close() {
    this.el.classList.remove("open");

    // throw new Error(`"close" method should be implemented in Menu"`)
  }

  add() {
    document.body.addEventListener("click", this.findIndex.bind(this));
    const click = new ShapeModule(random(1, 99999999), "Нарисуй фигуру");
    this.el.innerHTML += click.toHTML();
    this.modules.push(click);
    const canvas = new Canvas(random(1, 99999999), "Карандаш");
    this.el.innerHTML += canvas.toHTML();
    this.modules.push(canvas);
  }
  findIndex(event) {
    console.log(event);
    if (event.target.offsetParent === this.el) {
      let findID = this.modules.findIndex((element) => {
        return element.type === +event.target.dataset.type;
      });
      this.modules[findID].trigger();
    }
  }
}
