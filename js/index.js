import Game from './Engine/Game.js';
import Player from './Player.js';
import Ball from './Ball.js';
import CPU from './CPU.js';

let game = new Game();

game.canvas.height = window.innerHeight - 10;
game.canvas.width = game.canvas.height * 16 / 9;
game.scale = game.canvas.height / 1080;

game.entities.push(new Player);
game.entities.push(new Ball);
game.entities.push(new CPU(false));

// Should probably implement a Scene System and a SceneManager