
class Car {

    constructor(spawnLocation = 0) {
        this.spawnLocation = spawnLocation;
        this.sprite = game.add.sprite(this.spawnLocation, -1 * this.PTM(), this.sprite());
        game.physics.box2d.enable(this.sprite, false);
        this.body = this.sprite.body;

        this.createCar();
        this.createWheels();
    }

    createWheels() {
        this.wheelSprites = [];
        this.wheelBodies = [];
        this.driveJoints = [];

        let fWheel = this.wheelsPosition().front;
        let bWheel = this.wheelsPosition().back;

        this.wheelSprites[0] = game.add.sprite(bWheel.x * this.PTM() + this.spawnLocation, bWheel.y * -this.PTM(), this.wheelSprite());
        this.wheelSprites[1] = game.add.sprite(fWheel.x * this.PTM() + this.spawnLocation, fWheel.y * -this.PTM(), this.wheelSprite());
        game.physics.box2d.enable(this.wheelSprites[0], false);
        game.physics.box2d.enable(this.wheelSprites[1], false);

        this.wheelBodies[0] = this.wheelSprites[0].body;
        this.wheelBodies[1] = this.wheelSprites[1].body;
        this.wheelBodies[0].setCircle(0.3 * this.PTM());
        this.wheelBodies[1].setCircle(0.3 * this.PTM());

        this.driveJoints[0] = game.physics.box2d.wheelJoint(this.body, this.wheelBodies[0], bWheel.x * this.PTM(), this.rideHeight() * this.PTM(), 0, 0, 0, 1, this.wheelFrequency(), this.damping(), 0, this.motorTorque(), true); // rear
        this.driveJoints[1] = game.physics.box2d.wheelJoint(this.body, this.wheelBodies[1], fWheel.x * this.PTM(), this.rideHeight() * this.PTM(), 0, 0, 0, 1, this.wheelFrequency(), this.damping(), 0, this.motorTorque(), true); // front
    }

    setMotor(enabled, speed) {
        for (let i = 0; i < this.driveJoints.length; i++) {
            this.driveJoints[i].EnableMotor(enabled);
            this.driveJoints[i].SetMotorSpeed(speed);
        }
    }

    destroy() {
        this.sprite.destroy();
        this.body.destroy();
        for (let wheel of this.wheelBodies) {
            wheel.destroy();
        }
        for (let wheel of this.wheelSprites) {
            wheel.destroy();
        }
        this.wheelSprites = [];
        this.wheelBodies = [];
        this.driveJoints = [];
    }

    //

    driveForward() {
        this.setMotor(true, this.speed());
    }

    driveBackwards() {
        this.setMotor(true, this.backwardsSpeed() * -1);
    }

    brake() {
        this.setMotor(true, 0);
    }

    disableMotor() {
        this.setMotor(false, 0);
    }

    //

    createCar() {

    }

    sprite() {
        return '';
    }

    wheelSprite() {
        return '';
    }

    wheelFrequency(){
        return 3.5;
    }

    damping() {
        return 0.5;
    }

    motorTorque() {
        return 2;
    }

    rideHeight() {
        return 0.5;
    }

    speed() {
        return 50;
    }

    backwardsSpeed() {
        return this.speed();
    }

    PTM() {
        return 50;
    }

    wheelsPosition() {
        return {
            back: { x: -0.82, y: 0.6 },
            front: { x: 1.05, y: 0.6 }
        }
    }

    set polygon(value){
        this.body.setPolygon(value);
    }

}