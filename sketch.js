var hr;
var mn;
var sc;
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 angleMode(DEGREES);
}

function draw() {
  background(0);  

  
  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  var scAngle = map(sc,0,60,0,360);
  var mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);


  // second arm
  push();
  rotate(scAngle);
  stroke(16,0,181);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //minute arm
  push();
  rotate(mnAngle);
  stroke(62,215,21);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //hour arm
  push();
  rotate(hrAngle);
  stroke(225,0,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
  drawSprites();
}
