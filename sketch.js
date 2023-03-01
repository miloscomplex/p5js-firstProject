let x;
let y;
let pos;

function setup() {
  createCanvas(800, 400);
  // x = 400; 
  // y = 200;
  pos = createVector(width/2, height/2);
  background(0);
}

function draw() {
  stroke(255, 100);
  strokeWeight(2);
  point(pos.x, pos.y);
  pos.x = pos.x + random(-1,1);
  pos.y = pos.y + random(-1,1);
  
  var r = floor(random(4));
}

