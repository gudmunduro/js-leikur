
var main = {

    currentMode: 0,
    currentGame: null,
    debug: false,
    menu: null,

    preload: function () {

        // Maps
        game.load.image('road.ground', 'Game/Assets/Img/Maps/Road/ground.png');
        game.load.image('mountain.ground', 'Game/Assets/Img/Maps/Mountain/ground.png');

        // Cars
        game.load.image('sprcar.body', 'Game/Assets/Img/Cars/spr_vintage/body.png');
        game.load.image('sprcar.wheel', 'Game/Assets/Img/Cars/spr_vintage/wheel.png');
        game.load.image('truck.body', 'Game/Assets/Img/Cars/truck/body.png');
        game.load.image('truck.wheel', 'Game/Assets/Img/Cars/truck/wheel.png');
        game.load.image('boxDude.body', 'Game/Assets/Img/Cars/box_dude_car/body.png');
        game.load.image('boxDude.wheel', 'Game/Assets/Img/Cars/box_dude_car/wheel.png');

        // Buttons
        game.load.image('playbutton', 'Game/Assets/Img/Buttons/playButton.png');
        game.load.image('playbutton.hover', 'Game/Assets/Img/Buttons/playButton.hover.png');
        game.load.image('arrow.right', 'Game/Assets/Img/Buttons/Arrows/right.gif');
        game.load.image('arrow.left', 'Game/Assets/Img/Buttons/Arrows/left.gif');

        // Pickups
        game.load.image('star', 'Game/Assets/Img/star.png');
    },

    create: function () {
        switch (main.currentMode) {
            case 0: {
                main.menu = new MainMenu();
                game.canvas.style.display = "none";
                break;
            }
            case 1: GameMain.create(); break;
        }
    },

    update: function () {
        switch (main.currentMode) {
            case 0: break;
            case 1: GameMain.update(); break;
        }
    },

    render: function () {
        if (main.debug && main.currentMode == 1) game.debug.box2dWorld();
    },

    setMode: function (mode) {
        switch (main.currentMode) {
            case 0: {
                main.menu.destroy();
                break;
            }
            case 1: {
                GameMain.destroy();
                break;
            }
        }

        switch (mode) {
            case 0: {
                game.canvas.style.display = "none";
                main.menu = new MainMenu(); 
                break;
            }
            case 1: {
                game.canvas.style.display = "";
                GameMain.create();
                break;
            }
        }
        main.currentMode = mode;
    },

    startGame: function (car, map) {
        GameMain.Car = car;
        GameMain.Map = map;
        main.setMode(1);
    }
}


var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.WEBGL, 'phaser-example', { preload: main.preload, create: main.create, update: main.update, render: main.render });
