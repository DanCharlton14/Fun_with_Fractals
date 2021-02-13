let rn;
let p1, p2, p3;
let start_point;
let current_point;
let next_point;
let direction;
let move;
let points = [];

function setup() {
  createCanvas(400, 400);
  start_point = createVector(width/2, height/2);
  points.push(start_point);
  p1 = createVector(width/2, height/5);
  p2 = createVector(width/4, height * 0.75);
  p3 = createVector(width * 0.75, height * 0.75);
  stroke('purple');
  strokeWeight(10);
  stroke('blue');
  strokeWeight(5);
  point(start_point);
  
   
}

function draw() {
  background(220);
  frameRate(100);
  stroke('purple');
  strokeWeight(10);
  point(p1);
  point(p2);
  point(p3);
  stroke('blue');
  strokeWeight(5);
  rn = random([1, 2, 3]);
  if(rn == 1){
    direction = p5.Vector.sub(p1, start_point);
    direction.mult(0.5);
  }
  if(rn == 2){
    direction = p5.Vector.sub(p2, start_point);
    direction.mult(0.5);
  }
  if(rn == 3){
    direction = p5.Vector.sub(p3, start_point);
    direction.mult(0.5);
  }
  move = p5.Vector.add(start_point, direction);
  points.push(move);
  for(let i = 0; i < points.length; i++){
    point(points[i]);
  }
  start_point = move;
  

}