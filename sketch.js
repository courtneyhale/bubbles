var squares = [];

setup = function () {
  createCanvas(600, 500);
  // your code goes here
};

draw = function () {
  background(0);

if (mouseIsPressed) squares.push(new Square(mouseX, mouseY));

 for (var i = 0; i < squares.length; ++i) {
   squares[i].update();
   squares[i].display();
 }
// your code goes here
};
