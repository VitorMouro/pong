import Entity from './Entity.js';

export default class Player extends Entity {
    constructor () {
        super();
        this.position.x = 0;
        this.position.y = 0.5;
        this.color = 'white';
        this.velocity = 1;
        this.height = 10;
        this.width = 0.5;
        this.offset = 0.02;
    }

    update (dt) {
        window.game.InputManager.inputSequence.forEach((input) => {
            if(input == 'up' && this.position.y*window.innerHeight-this.height*window.innerHeight/100/2 >= 0){
                this.position.y -= dt/1000*this.velocity;
            }else if (input == 'down' && this.position.y*window.innerHeight+this.height*window.innerHeight/100/2 <= window.canvas.height){
                this.position.y += dt/1000*this.velocity;
            }
        });
    }

    draw (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect((this.position.x+this.offset*window.innerWidth)-(this.width*window.innerWidth/100)/2, (this.position.y*window.innerHeight)-(this.height*window.innerHeight/100)/2, this.width*window.innerWidth/100, this.height*window.innerHeight/100);
    }
}