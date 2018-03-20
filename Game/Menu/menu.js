
var Menu = {
    create: function () {
        game.stage.backgroundColor = '#124184';
        this.buttons.playButton.create();
        this.buttons.carLeftButton.create();
        this.buttons.carRightButton.create();
        this.buttons.mapLeftButton.create();
        this.buttons.mapRightButton.create();

        this.texts.carText = game.add.text(game.world.centerX - 30, 220, "Truck");
        this.texts.mapText = game.add.text(game.world.centerX - 30, 320, "Map1");
    },
    update: function () {

    },
    destroy: function () {
        this.buttons.playButton.button.destroy();
        this.buttons.carRightButton.button.destroy();
        this.buttons.carLeftButton.button.destroy();
        this.buttons.mapLeftButton.button.destroy();
        this.buttons.mapRightButton.button.destroy();

        this.texts.carText.destroy();
        this.texts.mapText.destroy();
    },


    buttons: {
        playButton: {

            button: null,

            create: function () {
                this.button = game.add.button(game.world.centerX - 100, 400, 'playbutton', null, this, 2, 1, 0);
                this.button.onInputOver.add(this.over, this);
                this.button.onInputOut.add(this.out, this);
                this.button.onInputDown.add(this.down, this);
            },

            over: function () {

            },

            out: function () {

            },

            down: function () {
                console.log("button pressed");
                let car = Menu.methods.getCarClass(Menu.data.cars[Menu.data.selectedCar]);
                let map = Menu.methods.getMapClass(Menu.data.maps[Menu.data.selectedMap]);
                main.startGame(car, map);
            }
        },
        carRightButton: {

            button: null,

            create: function () {
                this.button = game.add.button(game.world.centerX + 100, 200, 'arrow.right', null, this, 2, 1, 0);
                this.button.onInputOver.add(this.over, this);
                this.button.onInputOut.add(this.out, this);
                this.button.onInputDown.add(this.down, this);
                this.button.scale.set(0.1);
            },

            over: function () {
                if (Menu.data.selectedCar >= Menu.data.cars.length - 1) Menu.data.selectedCar = 0;
                else Menu.data.selectedCar++;

                Menu.texts.carText.text = Menu.data.cars[Menu.data.selectedCar];
            },

            out: function () {

            },

            down: function () {
                if (Menu.data.selectedCar >= Menu.data.cars.length - 1) Menu.data.selectedCar = 0;
                else Menu.selectedCar++;

                Menu.texts.carText.text = Menu.data.cars[Menu.data.selectedCar];
            }
        },
        carLeftButton: {

            button: null,

            create: function () {
                this.button = game.add.button(game.world.centerX - 160, 200, 'arrow.left', null, this, 2, 1, 0);
                this.button.onInputOver.add(this.over, this);
                this.button.onInputOut.add(this.out, this);
                this.button.onInputDown.add(this.down, this);
                this.button.scale.set(0.1);
            },

            over: function () {
                if (Menu.data.selectedCar <= 0) Menu.data.selectedCar = Menu.data.cars.length - 1;
                else Menu.data.selectedCar--;

                Menu.texts.carText.text = Menu.data.cars[Menu.data.selectedCar];
            },

            out: function () {

            },

            down: function () {
                if (Menu.data.selectedCar <= 0) Menu.data.selectedCar = Menu.data.cars.length - 1;
                else Menu.data.selectedCar--;

                Menu.texts.carText.text = Menu.data.cars[Menu.data.selectedCar];
            }
        },
        mapLeftButton: {

            button: null,

            create: function () {
                this.button = game.add.button(game.world.centerX - 160, 300, 'arrow.left', null, this, 2, 1, 0);
                this.button.onInputOver.add(this.over, this);
                this.button.onInputOut.add(this.out, this);
                this.button.onInputDown.add(this.down, this);
                this.button.scale.set(0.1);
            },

            over: function () {
                if (Menu.data.selectedMap <= 0) Menu.data.selectedMap = Menu.data.maps.length - 1;
                else Menu.data.selectedMap--;

                Menu.texts.mapText.text = Menu.data.maps[Menu.data.selectedMap];
            },

            out: function () {

            },

            down: function () {
                if (Menu.data.selectedMap <= 0) Menu.data.selectedMap = Menu.data.maps.length - 1;
                else Menu.data.selectedMap--;

                Menu.texts.mapText.text = Menu.data.maps[Menu.data.selectedMap];
            }
        },
        mapRightButton: {

            button: null,

            create: function () {
                this.button = game.add.button(game.world.centerX + 100, 300, 'arrow.right', null, this, 2, 1, 0);
                this.button.onInputOver.add(this.over, this);
                this.button.onInputOut.add(this.out, this);
                this.button.onInputDown.add(this.down, this);
                this.button.scale.set(0.1);
            },

            over: function () {
                if (Menu.data.selectedMap >= Menu.data.maps.length - 1) Menu.data.selectedMap = 0;
                else Menu.data.selectedMap++;

                Menu.texts.mapText.text = Menu.data.maps[Menu.data.selectedMap];
            },

            out: function () {

            },

            down: function () {
                if (Menu.data.selectedMap >= Menu.data.maps.length - 1) Menu.data.selectedMap = 0;
                else Menu.data.selectedMap++;

                Menu.texts.mapText.text = Menu.data.maps[Menu.data.selectedMap];
            }
        }
    },

    texts: {

    },

    data: {

        maps: [
            "Map1",
            "Map2"
        ],

        cars: [
            "Truck",
            "Sports car"
        ],

        selectedCar: 0,
        selectedMap: 0

    },

    methods: {
        getMapClass: function (str) {
            switch (str) {
                case "Map1": return Map1;
                case "Map2": return Map2;
                default: console.log("Error: Car not found"); return null;
            }
        },

        getCarClass: function (str) {
            switch (str) {
                case "Truck": return Truck;
                case "Sports car": return SportsCar;
                default: console.log("Error: Car not found"); return null;
            }
        }
    }
}