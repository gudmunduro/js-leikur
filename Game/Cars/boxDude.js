
class BoxDudeCar extends Car {

    createCar() {
        this.polygon = [-46, -16, 48, -16, 48, 16, -47, 16];
    }

    destroy() {
        super.destroy();
    }

    sprite() {
        return 'boxDude.body';
    }

    wheelSprite() {
        return 'boxDude.wheel';
    }

    motorTorque() {
        return 40;
    }

    damping() {
        return 0.2;
    }

    wheelsPosition() {
        return {
            back: { x: -1.05, y: 0.6 },
            front: { x: 1.05, y: 0.6 }
        }
    }

    wheelsScale() {
        return 3;
    }

    rideHeight() {
        return 1.0;
    }

}