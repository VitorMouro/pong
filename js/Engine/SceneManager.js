export default class SceneManager {
    constructor () {
        this.scenes = [];
    }

    setScene (key) {
        this.scenes.forEach((scene) => {
            if(scene.name == key)
                window.game.scene = scene;
        });
    }
}