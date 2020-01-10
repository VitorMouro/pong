export default class Entity {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        }
        this.color = 'white';
        this.type = 'none';
    }

    update(dt) {
        return;
    }

    draw(ctx) {
        return;
    }
}