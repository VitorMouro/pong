import game from './Engine/bootstrap.js';

// Scenes
import mainScene from './Scenes/mainScene.js';
game.SceneManager.scenes.push(mainScene);

import menuScene from './Scenes/menuScene.js';
game.SceneManager.scenes.push(menuScene);

// Set first Scene
game.SceneManager.setScene('mainScene');
