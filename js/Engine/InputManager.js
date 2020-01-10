export default class InputManager {

    constructor() {
        window.addEventListener('keydown', this.keyPressed.bind(this), false);
        window.addEventListener('keyup', this.keyUnpressed.bind(this), false);
        this.keys = {
            right: 39,
            left: 37,
            up: 38,
            down: 40,
            backspace: 8,
            space: 32,
            enter: 13,
            escape: 27,
            tab: 9,
            w: 87,
            a: 65,
            s: 83,
            d: 68
        };
        this.inputSequence = [];
    }

    keyUnpressed(event) {
        for (var key in this.keys)
            if (event.keyCode == this.keys[key] && this.inputSequence.indexOf(key) > -1)
                this.inputSequence.splice(this.inputSequence.indexOf(key), 1);
    }

    keyPressed(event) {
        for (var key in this.keys)
            if (event.keyCode == this.keys[key] && this.inputSequence.indexOf(key) == -1)
                this.inputSequence.push(key);
        console.log(this.inputSequence);
    }

}