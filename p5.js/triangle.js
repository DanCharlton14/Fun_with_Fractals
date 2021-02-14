let rn;
let p1, p2, p3;
let start_point;
let current_point;
let next_point;
let direction;
let move;
let points;
let tslider;
let from;
let to;
let colourGrad;
let dropdown;
let button;
let inputBox;
let inputButton;
let input;
let coords;



function setup() {
  createCanvas(400, 400);
  inputBox = createInput("Start point, e.g. 200,200");
  inputButton = createButton("Submit");
  inputButton.position(width/10, height * 1.06);
  inputButton.mousePressed(submit);
  
  
  
  points = [];
  colorMode(RGB);
  start_point = createVector(width/2, height/2);
  points.push(start_point);
  p1 = createVector(width/2, height/5 * 0.5);
  p2 = createVector(width/10, height * 0.75 * 1.2);
  p3 = createVector(width * 0.9, height * 0.75 * 1.2);
  stroke('blue');
  strokeWeight(2);
  stroke('blue');
  strokeWeight(2);
  point(start_point);
  tslider = createSlider(1, 120, 60);
  from = color(255, 0, 0);
  to = color(0, 0, 255);
  
  button = createButton("Reset");
  button.mousePressed(resetSketch);
  button.position(width * 0.75, height);
}

function draw(){
  frameRate(tslider.value());
  background(0);
  strokeWeight(2);
  stroke('red');
  point(p1);
  point(p2);
  point(p3);
  stroke('blue');
  strokeWeight(2);
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
    colorMode(HSB, 100);
    colourGrad = map(points[i].y, height/10, height * 0.9, 0, 100);
    stroke(colourGrad, 100, 100)
    point(points[i]);
  }
  start_point = move;
  
}

function resetSketch(){
  points = [];
  colorMode(RGB);
  start_point = createVector(width/2, height/2);
  points.push(start_point);
  p1 = createVector(width/2, height/5 * 0.5);
  p2 = createVector(width/10, height * 0.75 * 1.2);
  p3 = createVector(width * 0.9, height * 0.75 * 1.2);
  stroke('blue');
  strokeWeight(2);
  stroke('blue');
  strokeWeight(2);
  point(start_point);
  
}

function submit(){
  input = inputBox.value();
  coords = input.split(',');
  start_point = createVector(int(coords[0]), int(coords[1]));
  points = [];
  colorMode(RGB);
  points.push(start_point);
  p1 = createVector(width/2, height/5 * 0.5);
  p2 = createVector(width/10, height * 0.75 * 1.2);
  p3 = createVector(width * 0.9, height * 0.75 * 1.2);
  stroke('blue');
  strokeWeight(2);
  stroke('blue');
  strokeWeight(2);
  point(start_point);
  
}
