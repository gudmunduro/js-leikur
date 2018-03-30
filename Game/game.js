
var GameMain = {
    created: false,


    create: function () {
        if (this.created) {
            this.reCreate();
            return;
        } // Þarf bara af því að Phaser crashar ef maður reynir að starta physics aftur
        game.world.setBounds(-10000, -10000, 20000, 20000);

        game.physics.startSystem(Phaser.Physics.BOX2D);
        game.physics.box2d.gravity.y = 500;
        game.physics.box2d.friction = 0.8;


        this.map = new this.Map();

        this.car = new this.Car(this.map.spawnLocation());

        this.map.createStars(this.car);
        let inst = this;
        this.map.collectStar.add(function (car, star) {
            inst.collectStar(car, star);
        });

        this._starCount = 0;
        this.starCountLabel = game.add.text(10, 10, "Stars: 0", { fill: "#ffffff" });
        this.starCountLabel.fontWeight = "bold"; // Þarf að gera þetta fyrst út af einhverju bug í phaser
        this.starCountLabel.fontWeight = "normal";
        this.starCountLabel.fixedToCamera = true;

        this.cursors = game.input.keyboard.createCursorKeys();

        game.camera.follow(this.car.body);

        this.created = true;
    },
    reCreate: function () {
        this.map = new this.Map();

        this.car = new this.Car(this.map.spawnLocation());

        this.map.createStars(this.car);
        let inst = this;
        this.map.collectStar.add(function (car, star) {
            inst.collectStar(car, star);
        });

        this._starCount = 0;

        game.camera.follow(this.car.body);
    },
    update: function () {
        if (this.car.body.x > this.map.endLocation().x)
        {
            main.setMode(0);
        }

        if (this.cursors.down.isDown) { this.car.brake(); } // 
        else if (this.cursors.left.isDown && !this.cursors.right.isDown || game.input.pointer1.isDown && game.input.pointer1.x < window.innerWidth / 2) { this.car.driveBackwards(); }
        else if (this.cursors.right.isDown && !this.cursors.left.isDown || game.input.pointer1.isDown && game.input.pointer1.x > window.innerWidth / 2) { this.car.driveForward(); }
        else { this.car.disableMotor(); } // roll if no keys pressed
    },

    destroy: function () {
        this.car.destroy();
        this.map.destroy();
        this.starCountLabel.destroy();
    },

    //

    collectStar: function (car, star) {
        if (star.sprite == null || star == null)
        {
            return;
        }
        this.stars++;
        star.sprite.destroy();
        star.destroy();
    },

    get stars() {
        return this._starCount;
    },

    set stars(value) {
        this._starCount++;
        this.starCountLabel.text = "Stars: " + this._starCount;
    }
}