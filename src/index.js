const character = require('./character');

window.character = character;

window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    x = new character({
        pos: [30, 30],
        vel: [10, 10],
        radius: 10,
        color: "#FFDFFA"
    });

    // document.body.style.backgroundColor = "#414CBC ";

    // let as = new Game();
    // as.draw(ctx);


    // let gameView = new GameView(ctx);
    // gameView.start();



});