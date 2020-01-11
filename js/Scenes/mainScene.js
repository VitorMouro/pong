import Scene from "../Engine/Scene.js";
import Player from "../Prefabs/Player.js";
import Ball from "../Prefabs/Ball.js";
import CPU from "../Prefabs/CPU.js";

let mainScene = new Scene('mainScene');
mainScene.entities.push(new Player);
mainScene.entities.push(new Ball);
mainScene.entities.push(new CPU(false));
export default mainScene;
