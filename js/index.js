import Game from "./Game.js";

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = canvas.height*16/9;

let game = new Game();
window.game = game;
window.canvas = canvas;
window.scale = canvas.height/1080;

let lastTime = 0;
function gameLoop (timestamp) {
    let dt = timestamp - lastTime;
    lastTime = timestamp;

    //console.log('FPS: ' + Math.round(1000/dt));

    game.update(dt);
    game.clear(ctx);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
