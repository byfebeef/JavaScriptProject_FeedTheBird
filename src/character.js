function character(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
}


// character.prototype.draw(ctx)

character.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(...this.pos, this.radius, 0, 2 * Math.PI);
    ctx.StrokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = this.color;
    ctx.fill();
}

// character.prototype.move = function () {
//     console.log(this.pos);
//     // debugger
//     this.pos[0] += this.vel[0];
//     this.pos[1] += this.vel[1];


//     if (this.pos[1] < 0 || this.pos[1] > 900) {
//         this.vel[1] = -this.vel[1];
//     }

//     if (this.pos[0] < 0 || this.pos[0] > 900) {
//         this.vel[0] = -this.vel[0];
//     }


//     // this.pos = this.game.wrap(this.pos);
// }

// character.prototype.isCollidedWith = function (otherObject) {
//     let x_1 = this.pos[0];
//     let y_1 = this.pos[1];

//     let x_2 = otherObject.pos[0];
//     let y_2 = otherObject.pos[1];

//     const distance = function Dist([x_1, y_1], [x_2, y_2]) {
//         return sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2);
//     }

//     let totalRadii = this.radius + otherObject.radius;


//     if (totalRadii < distance()) {
//         return true;
//     } else {
//         return false;
//     }
// }



module.exports = character;