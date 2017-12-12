// var Engine = Matter.Engine,
// World = Matter.World,
// Bodies = Matter.Bodies;
//
// var engine;
// var world;
// var particles = [];

function preload() {
  // soundFormats('mp3');
  // alarmSound = loadSound('assets/sounds/analog-watch-alarm_daniel-simion.mp3');
}

let threeD = {};

function setup() {
  createCanvas(640, 480);
  threeD = createGraphics(640, 480, WEBGL);
  threeD.show();
  angleMode(DEGREES);

  // alarmSound.setVolume(0.1);
}

function draw() {
  resetMatrix();
  const cx = 0;
  const cy = 0;
  let hr = hour();
  let mn = ensureTwoDigits(minute());
  let sc = ensureTwoDigits(second());
  background(0);
  translate(320, 240);
  rotate(-90);
  noFill();

  let end = map(mouseX, 0, width, 0, 360);

  strokeWeight(12);
  stroke(255);
  const hrEnd = map(hr % 12, 0, 12, 0, 360);
  arc(cx, cy, 335, 335, 0, hrEnd);

  push();
  rotate(hrEnd);
  line(cx, cy, 70, cy);
  pop();

  strokeWeight(8);
  stroke(255, 100, 150);
  const mnEnd = map(mn, 0, 60, 0, 360);
  arc(cx, cy, 300, 300, 0, mnEnd);

  push();
  rotate(mnEnd);
  line(cx, cy, 90, cy);
  pop();

  strokeWeight(4);
  stroke(150, 255, 100);
  const scEnd = map(sc, 0, 60, 0, 360);
  arc(cx, cy, 275, 275, 0, scEnd);

  push();
  rotate(scEnd);
  line(cx, cy, 110, 0);
  pop();

  rotate(90);
  noStroke();
  fill(100, 150, 255);


  textAlign(CENTER);
  // textSize(40);
  textFont('Courier', 40);
  text(hr + 'h' + mn + 'm' + sc + 's', -100, 185, 220, 50);

  threeD.resetMatrix();
  threeD.sphere(100);

}

function ensureTwoDigits(val) {
  val = val.toString();
  if (val.length < 2) {
    val = '0' + val;
  }
  return val;
}
