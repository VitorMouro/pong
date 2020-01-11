import Scene from "../Engine/Scene.js";
import Ball from '../Prefabs/Ball.js';

var menuScene = new Scene('menuScene');

menuScene.entities.push(new Ball);

export default menuScene;