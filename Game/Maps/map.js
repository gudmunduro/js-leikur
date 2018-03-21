

class Map {

    constructor() {
        game.stage.backgroundColor = this.color();

        this.sprite = game.add.sprite(0, 300, this.sprite());
        game.physics.box2d.enable(this.sprite, true);
        this.body = this.sprite.body;

        this.body.static = true;
        this.body.setChain(this.groundVertices());
    }

    destroy() {
        this.body.destroy();
    }

    //

    sprite() {
        return '';
    }

    color() {
        return '#124184';
    }

    spawnLocation() {
        return 0;
    }

    groundVertices() {
        return [];
    }
}