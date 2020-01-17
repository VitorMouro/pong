export default class CollisionDetector {
    constructor() {
        this.collisions = [];
    }

    update(dt) {
        var entities = window.game.scene.entities;
        for (var i = 0; i < entities.length; i++) {
            if (entities[i].type == 'rect') {
                for (var j = i + 1; j < entities.length; j++) {
                    if (entities[j].type == 'rect') {
                        // Colision rect-rect
                    } else if (entities[j].type == 'circle') {
                        // Colision rect-circle
                    }
                }
            } else if (entities[i].type == 'circle') {
                for (var j = i + 1; j < entities.length; j++) {
                    if (entities[j].type == 'rect') {
                        // Colision circle-rect
                    } else if (entities[j].type == 'circle') {
                        // Colision circle-circle
                    }
                }
            }
        }
    }
}