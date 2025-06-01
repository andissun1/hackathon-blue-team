
import { Module } from '../core/module';
import { random } from '../utils';

export class RandomImagesModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.images = [
        'https://i.postimg.cc/GpZ22b9M/puw.jpg',
        'https://i.postimg.cc/MTdvKr3s/image.jpg',
        'https://i.postimg.cc/9fpBNSv1/image.png',
        'https://i.postimg.cc/4yTVf1kn/image.jpg',
        'https://i.postimg.cc/8zq5gzVz/image.png',
        'https://i.postimg.cc/yd82f0rg/image.png',
        'https://i.postimg.cc/T2DvBJ3g/image.jpg',
        'https://i.postimg.cc/nrZ2RxLd/image.jpg',

    ];
  }

  trigger() {
    const randomImageUrl = this.images[random(0, this.images.length - 1)];
    document.body.style.backgroundImage = `url(${randomImageUrl})`
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover' 
  }

}