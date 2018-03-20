
class SportsCar extends Car {

    createCar() {
        this.polygon = [-112, 3, -76, -10, -62, -14, -42, -23, -30,
                        -26, 1, -26, 5, -19, 15, -11, 35, -9, 78, -9, 93, -5, 100,
                        -2, 110, 0, 115, 4, 115, 8, 111, 13, 113, 19, 110, 21, 103,
                        22, 98, 24, 93, 15, 90, 10, 85, 8, 82, 5, 71, 6, 64, 10, 61,
                        14, 58, 20, 53, 27, 34, 29, 2, 30, -28, 30, -36, 22, -42,
                        13, -49, 7, -57, 6, -67, 6, -73, 10, -79, 18, -83, 26, -96,
                        27, -99, 26, -106, 25, -109, 22, -115, 22, -118, 19, -115,
                        15, -114, 10];

    }

    destroy() {
        super.destroy();
    }

    sprite() {
        return 'sprcar.body';
    }

    wheelSprite() {
        return 'sprcar.wheel';
    }

    motorTorque() {
        return 8;
    }

    damping() {
        return 0.8;
    }

    speed() {
        return 200;
    }

    wheelsPosition() {
        return {
            back: { x: -1.10, y: 0.6 },
            front: { x: 1.55, y: 0.6 }
        }
    }

    rideHeight() {
        return 0.7;
    }

}