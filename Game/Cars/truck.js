
class Truck extends Car {

    createCar() {
        this.polygon = [-82, -5, -56, -8, -45, -21, -31, -22, 18, -23, 41,
                        -11, 83, -6, 84, 8, 90, 18, 82, 21, 74, 10, 67, 2, 47, 1, 42, 10,
                        38, 23, -39, 21, -44, 12, -53, 5, -68, 5, -74, 12, -77, 19,
                        -85, 19, -86, 13, -86, 3, -86, -5]
    }

    destroy() {
        super.destroy();
    }

    sprite() {
        return 'truck.body';
    }

    wheelSprite() {
        return 'truck.wheel';
    }

    motorTorque() {
        return 6;
    }

    damping() {
        return 0.2;
    }

    wheelsPosition() {
        return {
            back: { x: -1.15, y: 0.6 },
            front: { x: 1.15, y: 0.6 }
        }
    }

    rideHeight() {
        return 0.8;
    }

}