import Entity from './Entity.js';

export default class Player extends Entity {
    constructor () {
        super();
        this.position.x = 50;
        this.position.y = window.canvas.height/2;
        this.color = 'white';
        this.velocity = 500;
        this.height = 100;
        this.width = 10;
        this.type = 'square';
    }

    update (dt) {
        window.game.InputManager.inputSequence.forEach((input) => {
            if(input == 'up' && this.position.y > 0){
                this.position.y -= dt/1000*this.velocity*window.scale;
            }else if (input == 'down' && this.position.y < window.canvas.height-this.height){
                this.position.y += dt/1000*this.velocity*window.scale;
            }
        });
    }

    draw (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x*window.scale, this.position.y*window.scale, this.width*window.scale, this.height*window.scale);
    }
}