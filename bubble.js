var Square = function (x, y) {
  this.x = x;
  this.y = y;
};

Square.prototype = {

  squareSize: 20,

  update: function() {
    if (this.y < height - this.squareSize) this.x + random(-1, 1);
    this.y += random(0, 2);
    if (this.y >= height - this.squareSize) this.y = height - this.squareSize;
    if (this.x - this.squareSize <= 0) this.x = this.squareSize + random(-1, 1);
  },

  display: function () {
    noStroke();
    fill(100, 300, 255, 100);
    rect(this.x, this.y, this.squareSize, this.squareSize);
  }

};
