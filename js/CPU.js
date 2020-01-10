import Entity from './Entity.js';

export default class CPU extends Entity {
    constructor(activated) {
        super();
        this.activated = activated;
        this.type = 'square';
        this.height = 100 * window.game.scale;
        this.width = 10 * window.game.scale;
        this.position.x = (window.game.canvas.width - 50 * window.game.scale) - this.width;
        this.position.y = (window.game.canvas.height / 2) - this.height / 2;
        this.color = 'white';
        this.velocity = 500 * window.game.scale;
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