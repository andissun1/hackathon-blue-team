import {Menu} from './core/menu'
import {BackgroundModule} from './modules/background.module'

export class ContextMenu extends Menu {

  open(y, x) {

    const menu = document.querySelector('ul')
    menu.classList.toggle('open')

    // const li = document.createElement('li')
    // li.textContent = 'Пункт'
    // li.className = 'menu-item'

    // menu.append(li)

    menu.style.top = `${x}px`;
    menu.style.left = `${y}px`;

    // throw new Error(`"open" method should be implemented in Menu"`)
  }

  close() {
    this.el.classList.remove('open')
    

    // throw new Error(`"close" method should be implemented in Menu"`)
  }

  add() {
    const sample = new BackgroundModule(Date.now(), 'Покемон')
    this.el.innerHTML = sample.toHTML()

    console.log(this.el);
  
  }
}