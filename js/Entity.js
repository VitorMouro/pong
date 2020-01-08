export default class Entity {
    constructor () {
        this.position = {
            x: 0,
            y: 0
        }
        this.color = 'white';
    }

    update (dt) {
        return;
    }

    draw (ctx) {
        return;
    }
}