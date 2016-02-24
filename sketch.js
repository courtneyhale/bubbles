var Square = [];

setup = function () {
  createCanvas(600, 600);
  // your code goes here
};

draw = function () {
  background(0);
  rect(100,300,200,400);

if (mouseIsPressed) square.push(new square(mouseX, mouseY));

 for (var i = 0; i < square.length; ++i) {
   square[i].update();
   square[i].display();
 }
// your code goes here
};
