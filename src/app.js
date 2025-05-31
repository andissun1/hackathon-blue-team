import "./styles.css";
import { ContextMenu } from "./menu";

const menu = new ContextMenu(".menu");
menu.add();
document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  menu.open(event.clientX, event.clientY);
  console.log(event);
});
