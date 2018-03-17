// import { config } from "./Config";

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: main.create, main.update: main.update, render: main.render });

var main = {
    preload: function()
    {

    },

    create: function() {
        gameMain.create();
    },

    update: function() {
        gameMain.update();
    },

    render: function() {
        game.debug.box2dWorld();
    }
}
