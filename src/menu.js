import {Menu} from './core/menu'
import {BackgroundModule} from './modules/background.module'

export class ContextMenu extends Menu {
    constructor(selector) {
      super(selector)
    this.el = document.querySelector(selector)
    this.modules = []

    document.body.addEventListener('click', ({target}) => {
      
      if (target.offsetParent === this.el) {

        let findID = this.modules.findIndex((element) => {
          return element.type == target.dataset.type
        })
        

        if (findID > -1) {
        this.modules[findID].trigger()
      }
      }
    })
  }

  open(y, x) {

    const menu = document.querySelector('ul')
    menu.classList.toggle('open')

    menu.style.top = `${x}px`;
    menu.style.left = `${y}px`;

    // throw new Error(`"open" method should be implemented in Menu"`)
  }

  close() {
    this.el.classList.remove('open')
    
    // throw new Error(`"close" method should be implemented in Menu"`)
  }

  add() {
    const sample = new BackgroundModule(Date.now(), 'Случайный фон')
    this.el.innerHTML = sample.toHTML()
    
    this.modules.push(sample)
  
  }
}