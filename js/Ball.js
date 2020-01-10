import Entity from './Engine/Entity.js';

export default class Ball extends Entity {

    constructor() {
        super();
        this.position.x = window.game.canvas.width / 2;
        this.position.y = window.game.canvas.height / 2;
        this.radius = 5 * window.game.scale;
        this.color = 'white';
        this.velocity = {
            x: Math.cos(45),
            y: Math.sin(45)
        }
        this.speed = 500 * window.game.scale;
        this.type = 'circle';
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    update(dt) {
        this.position.x += this.velocity.x * this.speed * dt / 1000;
        this.position.y += this.velocity.y * this.speed * dt / 1000;
        if (this.position.y + this.radius >= window.game.canvas.height)
            this.velocity.y *= -1;
        if (this.position.y - this.radius <= 0)
            this.velocity.y *= -1;
        if (this.position.x + this.radius >= window.game.canvas.width)
            this.velocity.x *= -1;
        if (this.position.x - this.radius <= 0)
            this.velocity.x *= -1;
    }
}