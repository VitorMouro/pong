import CollisionDetector from './CollisionDetector.js'

export default class Physics {
    constructor () {
        this.CollisionDetector = new CollisionDetector;
    }

    update (dt) {
        this.CollisionDetector.update(dt);
    }
}