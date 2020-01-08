import InputManager from './InputManager.js';
import Player from "./Player.js";
import Ball from './Ball.js';

export default class Game {

    constructor () {
        this.InputManager = new InputManager();
        this.entities = [];
        this.entities.push(new Player());
        this.entities.push(new Ball());
    }

    update (dt) {
        this.entities.forEach((entity) => {
            entity.update(dt);
        });
    }

    clear (ctx) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    draw (ctx) {
        this.entities.forEach((entity => {
            entity.draw(ctx);
        }));
    }
}