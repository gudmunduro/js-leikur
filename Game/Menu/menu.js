
var Menu = {
    create: function () {
        game.stage.backgroundColor = '#124184';
        this.buttons.playButton.button = game.add.button(game.world.centerX - 100, 400, 'playbutton', this.buttons.playButton.pressed, this, 2, 1, 0);
        this.buttons.playButton.button.onInputOver.add(this.buttons.playButton.over, this);
        this.buttons.playButton.button.onInputOut.add(this.buttons.playButton.out, this);
        this.buttons.playButton.button.onInputUp.add(this.buttons.playButton.up, this);
    },
    update: function () {

    },
    destroy: function () {
        this.buttons.playButton.button.destroy();
    },


    buttons: {
        playButton: {

            button: null,

            over: function () {
                main.setMode(1);
            },

            out: function () {

            },

            up: function () {
                console.log("button pressed");
            },

            pressed: function () {
                console.log("button pressed");
            }
        }
    }
}