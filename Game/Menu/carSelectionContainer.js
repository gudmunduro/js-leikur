
class CarSelectionContainer extends Container {

    create() {
        this.createButtons();
        this.createTexts();
    }

    createButtons() {
        this.buttons = {
            rightButton: {

                button: null,

                create: function () {
                    this.button = game.add.button(game.world.centerX + 100, 200, 'arrow.right', null, this, 2, 1, 0);
                    this.button.fixedToCamera = true;
                    this.button.onInputOver.add(this.over, this);
                    this.button.onInputOut.add(this.out, this);
                    this.button.onInputDown.add(this.down, this);
                    this.button.scale.set(0.1);
                },

                over: function () {
                    if (Menu.data.selectedCar >= Menu.data.cars.length - 1) Menu.data.selectedCar = 0;
                    else Menu.data.selectedCar++;

                    this.texts.selectedCar.text = Menu.data.cars[Menu.data.selectedCar];
                },

                out: function () {

                },

                down: function () {
                    if (Menu.data.selectedCar >= Menu.data.cars.length - 1) Menu.data.selectedCar = 0;
                    else Menu.selectedCar++;

                    this.texts.selectedCar.text = Menu.data.cars[Menu.data.selectedCar];
                }
            },
            leftButton: {

                button: null,

                create: function () {
                    this.button = game.add.button(game.world.centerX - 160, 200, 'arrow.left', null, this, 2, 1, 0);
                    this.button.fixedToCamera = true;
                    this.button.onInputOver.add(this.over, this);
                    this.button.onInputOut.add(this.out, this);
                    this.button.onInputDown.add(this.down, this);
                    this.button.scale.set(0.1);
                },

                over: function () {
                    if (Menu.data.selectedCar <= 0) Menu.data.selectedCar = Menu.data.cars.length - 1;
                    else Menu.data.selectedCar--;

                    this.texts.selectedCar.text = Menu.data.cars[Menu.data.selectedCar];
                },

                out: function () {

                },

                down: function () {
                    if (Menu.data.selectedCar <= 0) Menu.data.selectedCar = Menu.data.cars.length - 1;
                    else Menu.data.selectedCar--;

                    this.texts.selectedCar.text = Menu.data.cars[Menu.data.selectedCar];
                }
            },

            playButton: {
    
                button: null,
    
                create: function () {
                    this.button = game.add.button(game.world.centerX - 100, 400, 'playbutton', null, this, 2, 1, 0);
                    this.button.fixedToCamera = true;
                    this.button.onInputDown.add(this.down, this);

                    this.onPlayButtonPressed = function () {}
                },
    
                down: function () {
                    this.onPlayButtonPressed();
                }
            }
        };

        this.buttons.leftButton.create();
        this.buttons.rightButton.create();
        this.buttons.playButton.create();

        this.addView(this.buttons.leftButton.button);
        this.addView(this.buttons.rightButton.button);
        this.addView(this.buttons.playButton.button);
    }

   createTexts() {
        this.texts = {
            selectedCar: game.add.text(game.world.centerX - 30, 220, "Truck")
        };

        this.addView(this.texts.selectedCar);
    }

}