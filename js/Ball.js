import Entity from './Entity.js';

export default class Ball extends Entity{

    constructor () {
        super();
        this.position.x = 0;
        this.position.y = 0;
        this.radius = 10;
        this.color = 'white';
        this.velocity = {
            x: 1,
            y: 1
        }
        this.speed = 1000;
    }

    draw (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    update (dt) {
        this.position.x += this.velocity.x*this.speed*dt/1000;
        this.position.y += this.velocity.y*this.speed*dt/1000;
        if(this.position.y+this.radius >= window.canvas.height)
            this.velocity.y *= -1;
        if(this.position.y-this.radius <= 0)
            this.velocity.y *= -1;
        if(this.position.x+this.radius >= window.canvas.width)
            this.velocity.x *= -1;
        if(this.position.x-this.radius <= 0)
            this.velocity.x *= -1;
    }
}