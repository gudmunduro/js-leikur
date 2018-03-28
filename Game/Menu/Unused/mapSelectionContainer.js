
class MapSelectionContainer extends Container {

    create() {
        console.log("!3");
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
                    if (Menu.data.selectedMap >= Menu.data.maps.length - 1) Menu.data.selectedMap = 0;
                    else Menu.data.selectedMap++;
    
                    this.texts.selectedMap.text = Menu.data.maps[Menu.data.selectedMap];
                },
    
                out: function () {
    
                },
    
                down: function () {
                    if (Menu.data.selectedMap >= Menu.data.maps.length - 1) Menu.data.selectedMap = 0;
                    else Menu.data.selectedMap++;
    
                    this.texts.selectedMap.text = Menu.data.maps[Menu.data.selectedMap];
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
                    if (Menu.data.selectedMap <= 0) Menu.data.selectedMap = Menu.data.maps.length - 1;
                    else Menu.data.selectedMap--;
    
                    this.texts.selectedMap.text = Menu.data.maps[Menu.data.selectedMap];
                },
    
                out: function () {
    
                },
    
                down: function () {
                    if (Menu.data.selectedMap <= 0) Menu.data.selectedMap = Menu.data.maps.length - 1;
                    else Menu.data.selectedMap--;
    
                    this.texts.selectedMap.text = Menu.data.maps[Menu.data.selectedMap];
                }
            },

            nextButton: {
    
                button: null,
    
                create: function () {
                    this.button = game.add.button(game.world.centerX - 100, 400, 'playbutton', null, this, 2, 1, 0);
                    this.button.fixedToCamera = true;
                    this.button.onInputDown.add(this.down, this);

                    this.onNextButtonPressed = function () {};
                },
    
                down: function () {
                    this.onNextButtonPressed();
                }
            }
        };

        this.buttons.leftButton.create();
        this.buttons.rightButton.create();
        this.buttons.nextButton.create();

        this.addView(this.buttons.leftButton.button);
        this.addView(this.buttons.rightButton.button);
        this.addView(this.buttons.nextButton.button);
    }

    createTexts() {
        this.texts = {
            selectedMap: game.add.text(game.world.centerX - 30, 220, "Map1")
        };

        this.addView(this.texts.selectedMap);
    }

}