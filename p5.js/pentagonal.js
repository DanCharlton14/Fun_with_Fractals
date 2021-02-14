let rn;
let p1, p2, p3;
let a1, a2, a3, a4, m1, m2, m3, m4;
let start_point;
let current_point;
let next_point;
let direction;
let move;
let points;
let tslider;
let button;
let theta;


function setup() {
  createCanvas(400, 400);
  button = createButton("Reset");
  button.mousePressed(resetSketch);
  points = [];
  start_point = createVector(width/2, height/2);
  points.push(start_point);
  phi = (1+sqrt(5))/2

  c1 = createVector(200+cos(0)*150, 200+sin(0)*150);
  c2 = createVector(200+cos(TWO_PI / 5)*150, 200+sin(TWO_PI / 5)*150);
  c3 = createVector(200+cos(2*TWO_PI / 5)*150, 200+sin(2*TWO_PI / 5)*150);
  c4 = createVector(200+cos(3*TWO_PI / 5)*150, 200+sin(3*TWO_PI / 5)*150);
  c5 = createVector(200+cos(4*TWO_PI / 5)*150, 200+sin(4*TWO_PI / 5)*150);


  stroke('purple');
  strokeWeight(10);
  stroke('blue');
  strokeWeight(5);
  point(start_point);
  tslider = createSlider(1,256,126,25)

   
}

function draw() {
  background(0);
  frameRate(tslider.value());
  stroke('purple');
  strokeWeight(10);
  point(c1);
  point(c2);
  point(c3);
  point(c4);
  point(c5);
  stroke('red');
  strokeWeight(2);
  rn = random([1, 2, 3,4,5]);
  if(rn == 1){
    direction = p5.Vector.sub(c1, start_point);
    direction.mult(2/3);
  }
  if(rn == 2){
    direction = p5.Vector.sub(c2, start_point);
    direction.mult(2/3);
  }
  if(rn == 3){
    direction = p5.Vector.sub(c3, start_point);
    direction.mult(2/3);
  }
  if(rn == 4){
    direction = p5.Vector.sub(c4, start_point);
    direction.mult(2/3);
  }
  if(rn == 5){
    direction = p5.Vector.sub(c5, start_point);
    direction.mult(2/3);
  }
  move = p5.Vector.add(start_point, direction);
  points.push(move);
  for(let i = 0; i < points.length; i++){
    push();
    translate(width/2, height/2);
    theta = atan(points[i].y/points[i].x);
    pop();
    colorMode(HSB, 360);
    stroke(map(theta, -PI/2, PI/2, 0, 360), 360, 360);
    point(points[i]);
  }
  start_point = move;

}

function resetSketch(){
  points = [];
  start_point = createVector(width/2, height/2);
  points.push(start_point);
  phi = (1+sqrt(5))/2

  c1 = createVector(200+cos(0)*150, 200+sin(0)*150);
  c2 = createVector(200+cos(TWO_PI / 5)*150, 200+sin(TWO_PI / 5)*150);
  c3 = createVector(200+cos(2*TWO_PI / 5)*150, 200+sin(2*TWO_PI / 5)*150);
  c4 = createVector(200+cos(3*TWO_PI / 5)*150, 200+sin(3*TWO_PI / 5)*150);
  c5 = createVector(200+cos(4*TWO_PI / 5)*150, 200+sin(4*TWO_PI / 5)*150);


  stroke('purple');
  strokeWeight(10);
  stroke('blue');
  strokeWeight(5);
  point(start_point);
  
}
