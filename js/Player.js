import Entity from './Entity.js';

export default class Player extends Entity {
    constructor() {
        super();
        this.position.x = 50*window.game.scale;
        this.position.y = 100*window.game.scale;
        this.color = 'white';
        this.velocity = 500*window.game.scale;
        this.height = 100*window.game.scale;
        this.width = 10*window.game.scale;
        this.type = 'square';
    }

    update(dt) {
        window.game.InputManager.inputSequence.forEach((input) => {
            if (input == 'up' && this.position.y > 0) {
                this.position.y -= dt / 1000 * this.velocity;
            } else if (input == 'down' && this.position.y < window.game.canvas.height - this.height) {
                this.position.y += dt / 1000 * this.velocity;
            }
        });
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}