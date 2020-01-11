import InputManager from './InputManager.js';
import SceneManager from './SceneManager.js';

export default class Game {

    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.scale = 1;
        this.scene = null;
        this.SceneManager = new SceneManager;
        this.InputManager = new InputManager;
        window.game = this;
        this.lastTime = 0;
        requestAnimationFrame(this.loop.bind(this));
    }

    loop(timestamp) {
        requestAnimationFrame(this.loop.bind(this));

        this.dt = timestamp - this.lastTime;
        this.lastTime = timestamp;

        this.update(this.dt);
        this.clear(this.ctx);
        this.draw(this.ctx);
    }

    update(dt) {
        this.scene.entities.forEach((entity) => {
            entity.update(dt);
        });
    }

    clear(ctx) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    draw(ctx) {
        this.scene.entities.forEach((entity) => {
            entity.draw(ctx);
        });
    }
}