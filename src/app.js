import './styles.css'
import {ContextMenu} from './menu'

const menu = new ContextMenu('.menu')

document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault()

  menu.add()
  menu.open(event.clientX, event.clientY)
})