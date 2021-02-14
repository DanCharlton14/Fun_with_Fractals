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
let sel;
let button;


function setup() {
  createCanvas(400, 400);
  points = [];
  start_point = createVector(width/2, height/2);
  points.push(start_point);
  b1 = createVector(width * 0.9, height * 0.9);
  b2 = createVector(width/10, height * 0.9);
  b3 = createVector(width/10, height/10);
  b4 = createVector(width * 0.9, height /10);
  m = createVector(width/2, height/2);

  stroke('purple');
  strokeWeight(10);
  stroke('blue');
  strokeWeight(5);
  point(start_point);
  tslider = createSlider(1,120, 60);
  
  button = createButton("Reset");
  button.mousePressed(resetSketch);
  button.position(width * 0.6, height);
   
}

function draw() {
  background(0);
  frameRate(tslider.value());
  stroke('purple');
  strokeWeight(10);
  point(b1);
  point(b2);
  point(b3);
  point(b4);
  point(m);
  stroke('blue');
  strokeWeight(2);
  rn = random([1, 2, 3,4,5]);
  if(rn == 1){
    direction = p5.Vector.sub(b1, start_point);
    direction.mult(2/3);
  }
  if(rn == 2){
    direction = p5.Vector.sub(b2, start_point);
    direction.mult(2/3);
  }
  if(rn == 3){
    direction = p5.Vector.sub(b3, start_point);
    direction.mult(2/3);
  }
  if(rn == 4){
    direction = p5.Vector.sub(b4, start_point);
    direction.mult(2/3);
  }
  if(rn == 5){
    direction = p5.Vector.sub(m, start_point);
    direction.mult(2/3);
  }
  move = p5.Vector.add(start_point, direction);
  points.push(move);
  for(let i = 0; i < points.length; i++){
    point(points[i]);
  }
  start_point = move;
}

function resetSketch(){
   points = [];
  start_point = createVector(width/2, height/2);
  points.push(start_point);
  b1 = createVector(width * 0.9, height * 0.9);
  b2 = createVector(width/10, height * 0.9);
  b3 = createVector(width/10, height/10);
  b4 = createVector(width * 0.9, height /10);
  m = createVector(width/2, height/2);

  stroke('purple');
  strokeWeight(10);
  stroke('blue');
  strokeWeight(5);
  point(start_point);
  
}
