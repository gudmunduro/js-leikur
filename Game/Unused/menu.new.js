
var Menu = {
    create: function () {
        game.world.setBounds(0, 0, 800, 600);
        game.stage.backgroundColor = '#124184';

        Menu.currentContainer = undefined;
        Menu.methods.setContainer(0);
    },
    update: function () {

    },
    destroy: function () {
        if (Menu.currentContainer != undefined)
        {
            Menu.currentContainer.destroy();
        }
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
                case "Box dude car": return BoxDudeCar;
                default: console.log("Error: Car not found"); return null;
            }
        },

        setContainer: function (to) {
            if (Menu.currentContainer != undefined)
            {
                Menu.currentContainer.destroy();
            }
            switch (to) {
                case 0: {
                    Menu.currentContainer = new StartContainer();
                    Menu.currentContainer.onStartButtonPressed = function() {
                        this.setContainer(1);
                    }
                    break;
                }
                case 1: {
                    console.log("!aa");
                    Menu.currentContainer = new MapSelectionContainer();
                    Menu.currentContainer.onNextButtonPressed = function() {
                        this.setContainer(2);
                    }
                    break;
                }
                case 2: {
                    Menu.currentContainer = new CarSelectionContainer();
                    Menu.currentContainer.onPlayButtonPressed = function () {
                        let car = Menu.methods.getCarClass(Menu.data.cars[Menu.data.selectedCar]);
                        let map = Menu.methods.getMapClass(Menu.data.maps[Menu.data.selectedMap]);
                        main.startGame(car, map);
                    }
                    break;
                }
            }
        }
    }
}