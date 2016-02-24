var Square = function (x, y) {
  this.x = x;
  this.y = y;
};

Square.prototype = {

  squareHeight: 5,
  squareWidth: 5,

  update: function() {
    this.x += random(-1, 1);
    this.y += random(0, -2);
    if (this.y - this.squareHeight <= 0) this.y = this.squareHeight + random(0, 2);
  },

  display: function () {
    noStroke();
    fill(102, 217, 255, 100);
    rect(this.x, this.y, this.sqaureHeight, this.squareWidth);
  }

};
