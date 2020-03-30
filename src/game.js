const block = require('./block');

function Game() {
    this.addBlock();
}

Game.DIM_X = 600;
Game.DIM_Y = 600;
Game.NUM_BLOCK = 10;

Game.prototype.randomPosition = function () {
    
}

module.exports = Game;