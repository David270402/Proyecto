// sketch.js

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  background(255, 0, 200);
}

function windowResized() {
  centerCanvas();
}
function draw(){
  fill(random(0,255),random(0,255),random(0,255))
  rect(random(0,windowWidth),random(0,windowHeight),random(10,300),random(10,300));
  }