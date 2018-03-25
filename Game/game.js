
var GameMain = {
    create: function () {

        game.world.setBounds(-10000, -10000, 20000, 20000);

        game.physics.startSystem(Phaser.Physics.BOX2D);
        game.physics.box2d.gravity.y = 500;
        game.physics.box2d.friction = 0.8;

        this.map = new this.Map();

        this.car = new this.Car(this.map.spawnLocation());

        this.map.createStars(this.car);
        this.map.collectStar.add(this.collectStar);

        this.cursors = game.input.keyboard.createCursorKeys();

        game.camera.follow(this.car.body);
    },
    update: function () {
        if (this.cursors.down.isDown) { this.car.brake(); } // 
        else if (this.cursors.left.isDown && !this.cursors.right.isDown) { this.car.driveBackwards(); }
        else if (this.cursors.right.isDown && !this.cursors.left.isDown) { this.car.driveForward(); }
        else { this.car.disableMotor(); } // roll if no keys pressed
    },

    destroy: function () {
        this.car.destroy();
        this.map.destroy();
    },

    //

    collectStar: function (car, star) {
        if (star.sprite == null || star == null)
        {
            return;
        }
        GameMain.stars++;
        star.sprite.destroy();
        star.destroy();
    },


    // Variables
    stars: 0
}