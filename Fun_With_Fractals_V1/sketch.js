var rn;
var p1, p2, p3;


function setup() {
  createCanvas(400, 400);
  p1 = [width/2, height/5];
  p2 = [width/4, height * 0.75];
  p3 = (width * 0.75, height * 0.75);
  stroke('purple');
  strokeWeight(10);
   
}

function draw() {
  background(220);
  point(p1);
  point(p2);
  point(p3);
  stroke('purple');
  strokeWeight(10);
  
  
  
}