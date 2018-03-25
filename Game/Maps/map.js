

class Map {

    constructor() {
        game.stage.backgroundColor = this.color();

        this.sprite = game.add.sprite(0, 300, this.sprite());
        game.physics.box2d.enable(this.sprite, true);
        this.body = this.sprite.body;

        this.body.static = true;
        this.body.setChain(this.groundVertices());

        this.collectStar = new Phaser.Signal();
        this.stars = game.add.group();
    }

    createStars(car){
        this.stars.enableBody = true;
        this.stars.physicsBodyType = Phaser.Physics.BOX2D;
        /*car.body.setBodyContactCallback(this.stars, function (player, star) {
            console.log("!")
            this.collectStar.dispatch(player, star);
        }, this);*/
        for (let location of this.starLocations()){
            let star = this.stars.create(location.x, location.y, 'star');
            star.body.static = true;
            star.scale.set(2);
            star.sensor = true;
            star.body.setCollisionCategory(2);
        }

        car.body.setCategoryContactCallback(2, function (car, star) {
            this.collectStar.dispatch(car, star);
        }, this);
        car.wheelBodies[0].setCategoryContactCallback(2, function (car, star) {
            this.collectStar.dispatch(car, star);
        }, this);
        car.wheelBodies[1].setCategoryContactCallback(2, function (car, star) {
            this.collectStar.dispatch(car, star);
        }, this);
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

    starLocations() {
        return [];
    }


}