// import { config } from "./Config";

var main = {

    currentMode: 0,
    currentGame: null,

    preload: function()
    {
        game.load.image('ground', '/Game/Assets/img/ground.jpg');
        game.load.image('car', '/Game/Assets/Img/Cars/spr_vintage.png');

        // Buttons
        game.load.image('playbutton', '/Game/Assets/Img/Buttons/playButton.png');
        game.load.image('playbutton.hover', '/Game/Assets/Img/Buttons/playButton.hover.png');
        game.load.image('arrow.right', '/Game/Assets/Img/Buttons/Arrows/right.gif');
        game.load.image('arrow.left', '/Game/Assets/Img/Buttons/Arrows/left.gif');
    },

    create: function () {
        switch (main.currentMode) {
            case 0: Menu.create(); break;
            case 1: GameMain.create(); break;
        }
    },

    update: function () {
        switch (main.currentMode) {
            case 0: Menu.update(); break;
            case 1: GameMain.update(); break;
        }
    },

    render: function () {
        if (main.currentMode == 1) game.debug.box2dWorld();
    },

    setMode: function (mode) {
        switch (main.currentMode) {
            case 0: Menu.destroy(); break;
            case 1: GameMain.destroy(); break;
        }

        switch (mode) {
            case 0: Menu.create(); break;
            case 1: GameMain.create(); break;
        }
        main.currentMode = mode;
    },

    startGame: function(car, map) {
        GameMain.Car = car;
        GameMain.Map = map;
        main.setMode(1);
    }
}

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: main.preload, create: main.create, update: main.update, render: main.render });
