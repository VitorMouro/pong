import Game from './Game.js';
import Player from './Player.js';
import Ball from './Ball.js';

let game = new Game();

game.canvas.height = window.innerHeight;
game.canvas.width = game.canvas.height * 16 / 9;
game.scale = game.canvas.height / 1080;

game.entities.push(new Player);
game.entities.push(new Ball);

