
class Car {

    constructor() {
        this.body = new Phaser.Physics.Box2D.Body(game, null, 0, -1 * this.PTM());
        this.createCar();
        this.createWheels();
    }

    createWheels() {
        this.wheelBodies = [];
        this.driveJoints = [];

        this.wheelBodies[0] = new Phaser.Physics.Box2D.Body(game, null, -0.82 * this.PTM(), 0.6 * -this.PTM());
        this.wheelBodies[1] = new Phaser.Physics.Box2D.Body(game, null, 1.05 * this.PTM(), 0.6 * -this.PTM());
        this.wheelBodies[0].setCircle(0.3 * this.PTM());
        this.wheelBodies[1].setCircle(0.3 * this.PTM());

        this.driveJoints[0] = game.physics.box2d.wheelJoint(this.body, this.wheelBodies[0], -0.82 * this.PTM(), this.rideHeight() * this.PTM(), 0, 0, 0, 1, this.wheelFrequency(), this.damping(), 0, this.motorTorque(), true); // rear
        this.driveJoints[1] = game.physics.box2d.wheelJoint(this.body, this.wheelBodies[1], 1.05 * this.PTM(), this.rideHeight() * this.PTM(), 0, 0, 0, 1, this.wheelFrequency(), this.damping(), 0, this.motorTorque(), true); // front
    }

    setMotor(enabled, speed) {
        for (let i = 0; i < this.driveJoints.length; i++) {
            this.driveJoints[i].EnableMotor(enabled);
            this.driveJoints[i].SetMotorSpeed(speed);
        }
    }

    destroy() {
        this.body.destroy();
        for (let wheel of this.wheelBodies) {
            wheel.destroy();
        }
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

    set polygon(value){
        this.body.setPolygon(value);
    }

}