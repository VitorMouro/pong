import Game from './Game.js';

let game = new Game();

game.canvas.height = window.innerHeight - 10;
game.canvas.width = game.canvas.height * 16 / 9;
game.scale = game.canvas.height / 1080;

export default game;



