export default class InputManager {

    constructor () {
        window.addEventListener('keydown', this.keyPressed.bind(this), false);
        window.addEventListener('keyup', this.keyUnpressed.bind(this), false);
        this.key = {
            right: 39,
            left: 37,
            up: 38,
            down: 40,
            backspace: 8,
            space: 32,
            enter: 13,
            escape: 27,
            tab: 9
        };
        this.inputSequence = [];
    };
    
    keyUnpressed (event) {
        if (event.keyCode == this.key.right) {
            if (this.inputSequence.indexOf('right') > -1)
                this.inputSequence.splice(this.inputSequence.indexOf('right'), 1);
        } else if (event.keyCode == this.key.left) {
            if (this.inputSequence.indexOf('left') > -1)
                this.inputSequence.splice(this.inputSequence.indexOf('left'), 1);
        }
        if (event.keyCode == this.key.up) {
            if (this.inputSequence.indexOf('up') > -1)
                this.inputSequence.splice(this.inputSequence.indexOf('up'), 1);
        } else if (event.keyCode == this.key.down) {
            if (this.inputSequence.indexOf('down') > -1)
                this.inputSequence.splice(this.inputSequence.indexOf('down'), 1);
        }
    }

    keyPressed (event) {
        if (event.keyCode == this.key.right) {
            if (this.inputSequence.indexOf('right') == -1)
                this.inputSequence.push('right');
        } else if (event.keyCode == this.key.left) {
            if (this.inputSequence.indexOf('left') == -1)
                this.inputSequence.push('left');
        }
        if (event.keyCode == this.key.up) {
            if (this.inputSequence.indexOf('up') == -1)
                this.inputSequence.push('up');
        } else if (event.keyCode == this.key.down) {
            if (this.inputSequence.indexOf('down') == -1)
                this.inputSequence.push('down');
        }
        //console.log(event.keyCode);
    }

}