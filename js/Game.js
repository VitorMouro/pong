import InputManager from './InputManager.js';

export default class Game {

    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.scale = 1;
        this.InputManager = new InputManager();
        this.entities = [];
        window.game = this;
        this.lastTime = 0;
        requestAnimationFrame(this.loop.bind(this));
    }

    loop(timestamp) {
        requestAnimationFrame(this.loop.bind(this));

        this.dt = timestamp - this.lastTime;
        this.lastTime = timestamp;

        //console.log('FPS: ' + Math.round(1000/dt));

        this.update(this.dt);
        this.clear(this.ctx);
        this.draw(this.ctx);

    }

    update(dt) {
        this.entities.forEach((entity) => {
            entity.update(dt);
        });
    }

    clear(ctx) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    draw(ctx) {
        this.entities.forEach((entity) => {
            entity.draw(ctx);
        });
    }
}