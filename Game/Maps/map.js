

class Map {

    constructor() {
        this.body = new Phaser.Physics.Box2D.Body(game, null, 0, 0, 0);
        this.body.setChain(this.groundVertices());
    }

    destroy() {
        this.body.destroy();
    }

    //

    groundVertices() {
        return [];
    }
}