const block = require('./block');
const GameView = require('./game_view');




window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    let gameView = new GameView(ctx);
    gameView.start();



});