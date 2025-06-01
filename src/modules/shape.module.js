import { Module } from '../core/module';
import { random } from '../utils';
import { getRandomColor } from '../utils';

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);

    this.forms = [`triangle`, `circle`, `cube`, 'trapezoid'];
  }

  trigger() {
    let shape = document.createElement(`div`);
    let randomForm = this.forms[random(0, 10)];
    this.createRandomStyle(shape);
    this.createRandomForm(shape, randomForm);
    document.body.append(shape);

    setTimeout(() => {
      document.body.removeChild(shape);
    }, 3000);
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }

  getRandomGradient() {
    return `linear-gradient(${random(0, 180)}deg, ${getRandomColor(
      'rgba'
    )}, ${getRandomColor('rgba')}, ${getRandomColor('rgba')})`;
  }

  createRandomStyle(shape) {
    shape.style.background = this.getRandomGradient();
    shape.style.width = `${random(50, 300)}px`;
    shape.style.height = `${random(50, 300)}px`;
    shape.style.transform = `rotate(${random(0, 360)}deg)`;
    shape.style.position = `absolute`;
    shape.style.top = `${random(1, window.innerHeight)}px`;
    shape.style.left = `${random(1, window.innerWidth)}px`;
  }

  createRandomForm(shape, randomForm) {
    switch (randomForm) {
      case 'circle':
        shape.style.borderRadius = `50%`;
        break;
      case 'triangle':
        shape.style.borderRadius = `1 / cos(30deg)`;
        shape.style.clipPath = `polygon(50% 100%, 100% 0, 0 0)`;
        break;
      case 'cube':
        let oneSize = `${random(50, 300)}px`;
        shape.style.width = oneSize;
        shape.style.height = oneSize;
        shape.style.borderRadius = `10px`;
        break;
      case 'trapezoid':
        shape.style.borderLeft = `30px solid transparent`;
        shape.style.borderRight = `30px solid transparent`;
        shape.style.borderBottom = `100px solid orange`;
        shape.style.background = `none`;
        break;
    }
  }
}
