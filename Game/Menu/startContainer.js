
class StartContainer extends Container {

    create() {
        this.createButtons();
    }

    createButtons(){
        this.buttons = {
            playButton: {
    
                button: null,
    
                create: function () {
                    this.button = game.add.button(game.world.centerX - 100, 400, 'playbutton', null, this, 2, 1, 0);
                    this.button.fixedToCamera = true;
                    this.button.onInputOver.add(function () {}, this);
                    this.button.onInputOut.add(function () {}, this);
                    this.button.onInputDown.add(this.down, this);

                    this.onStartButtonPressed = function () {};
                },
    
                down: function () {
                    console.log("!");
                    this.onStartButtonPressed();
                }
            }
        };

        this.buttons.playButton.create();
        this.addView(this.buttons.playButton.button);
    }

    

}