import { Menu } from './core/menu';
import { BackgroundModule } from './modules/background.module';
import { RandomMessageModule } from './modules/random.message.module';
import { RandomSoundModule } from './modules/random.sound.module';
import { ShapeModule } from './modules/shape.module';
import { TimerModule } from './modules/timer.module';
import { ClicksModule } from './modules/clicks.module';
import { RandomImagesModule } from './modules/random.images.background';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);

    this.modules = [];

    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.open(event.clientX, event.clientY);
    });
  }

  open(y, x) {
    const menu = document.querySelector('ul');
    menu.classList.toggle('open');
    menu.style.top = `${x}px`;
    menu.style.left = `${y}px`;
  }

  close() {
    this.el.classList.remove('open');
  }

  findIndex(event) {
    if (event.target.offsetParent === this.el) {
      let findID = this.modules.findIndex((element) => {
        return element.type === event.target.dataset.type;
      });
      this.modules[findID].trigger();
    }
  }

  add() {
    document.body.addEventListener('click', this.findIndex.bind(this));

    // console.log("Add background module");
    const background_module = new BackgroundModule('Background', 'Сменить фон');

    this.el.insertAdjacentHTML('beforeend', background_module.toHTML());
    this.modules.push(background_module);

    const random_message_module = new RandomMessageModule(
      'RandomMessage',
      'Случайное сообщение'
    );
    this.el.insertAdjacentHTML('beforeend', random_message_module.toHTML());
    this.modules.push(random_message_module);

    const random_sound_module = new RandomSoundModule(
      'RandomSound',
      'Рандомный звук'
    );
    this.el.insertAdjacentHTML('beforeend', random_sound_module.toHTML());
    this.modules.push(random_sound_module);

    const shape = new ShapeModule('Shape', 'Случайная фигура');
    this.el.insertAdjacentHTML('beforeend', shape.toHTML());
    this.modules.push(shape);

    const timer = new TimerModule('Timer', 'Таймер');
    this.el.insertAdjacentHTML('beforeend', timer.toHTML());
    this.modules.push(timer);

    const clicksCounter = new ClicksModule(
      'ClicksCounter',
      'Счётчик кликов (за 10 секунд)'
    );
    this.el.insertAdjacentHTML('beforeend', clicksCounter.toHTML());
    this.modules.push(clicksCounter);

    const random_images_module = new RandomImagesModule(
      'RandomImage',
      'Фон итальянского брейнрот'
    );
    this.el.insertAdjacentHTML('beforeend', random_images_module.toHTML());
    this.modules.push(random_images_module);
  }
}
