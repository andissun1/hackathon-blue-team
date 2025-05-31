import { Menu } from "./core/menu";
import { BackgroundModule } from "./modules/background.module";
import { ShapeModule } from "./modules/shape.module";
import random from "./utils";
export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.el = document.querySelector(selector);
    this.modules = [];

    document.body.addEventListener("click", ({ target }) => {
      if (target.offsetParent === this.el) {
        let findID = this.modules.findIndex((element) => {
          return element.type === +target.dataset.type;
        });
        this.modules[findID].trigger();
      }
    });
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
    const bg = new BackgroundModule(random(1, 99999999), "Случайный фон");
    this.el.innerHTML += bg.toHTML();
    this.modules.push(bg);
    const click = new ShapeModule(random(1, 99999999), "Нарисуй фигуру");
    this.el.innerHTML += click.toHTML();
    this.modules.push(click);
  }
}
