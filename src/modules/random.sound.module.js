import { Module } from '../core/module';
import { random } from '../utils';

export class RandomSoundModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.sounds = [
      'https://www.pacdv.com/sounds/interface_sound_effects/sound1.mp3',
      'https://www.pacdv.com/sounds/interface_sound_effects/sound2.mp3',
      'https://www.pacdv.com/sounds/interface_sound_effects/sound3.mp3',
      'https://www.pacdv.com/sounds/interface_sound_effects/sound29.mp3',
      'https://www.pacdv.com/sounds/interface_sound_effects/sound40.mp3',
      'https://www.pacdv.com/sounds/interface_sound_effects/sound4.mp3',
      'https://www.pacdv.com/sounds/interface_sound_effects/sound5.mp3',
    ];
  }

  trigger() {
    const randomSoundUrl = this.sounds[random(0, this.sounds.length - 1)];
    const audio = new Audio(randomSoundUrl);
    audio.play();
  }
}