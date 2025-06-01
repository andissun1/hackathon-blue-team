import { Module } from '../core/module';
import { random } from '../utils'

export class RandomMessageModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.messageElement = null; // Храним элемент сообщения
        this.hideTimeout = null; // Таймер для скрытия сообщения
    }

    trigger() {
        const randomPhrase = this.getRandomPhrase();
        console.log(randomPhrase);
        this.showMessage(randomPhrase);
    }

    getRandomPhrase() {
        const phrases = [
            "The early bird catches the worm",
            "Actions speak louder than words",
            "Beauty is in the eye of the beholder",
            "Don't count your chickens before they hatch",
            "Every cloud has a silver lining",
            "Fortune favors the bold",
            "Honesty is the best policy",
            "If the shoe fits, wear it",
            "Knowledge is power",
            "Look before you leap"
        ];
        
        // return phrases[Math.floor(Math.random() * phrases.length)];

        return phrases[random(0, phrases.length -1)]
    }

    showMessage(message) {
        if (!this.messageElement) {
            this.messageElement = document.createElement('div');
            this.messageElement.id = 'random-message';
            this.messageElement.style.position = 'fixed';
            this.messageElement.style.top = '20px';
            this.messageElement.style.left = '20px'; 
            this.messageElement.style.backgroundColor = '#333';
            this.messageElement.style.color = '#fff';
            this.messageElement.style.padding = '10px'; 
            this.messageElement.style.borderRadius = '10px';
            this.messageElement.style.opacity = '1'; 
            this.messageElement.style.transition = 'opacity 0.8s ease'; 
            document.body.appendChild(this.messageElement);
        }

        this.messageElement.innerText = message;

        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }

        this.hideTimeout = setTimeout(() => {
            this.messageElement.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(this.messageElement); 
                this.messageElement = null;
            }, 300); 
        }, 1500);
    }
}