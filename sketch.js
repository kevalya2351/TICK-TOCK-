function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background("black");

  let h = hour();
  text('Current hour:\n' + h, 5, 050);

  let m = minute();
text('Current minute: \n' + m, 5, 100);

let s = second();
text('Current second: \n' + s, 5, 150);

angleMode(DEGREES);



push();
stroke("blue");
strokeWeight(7);
circle(300,200,100,0);
scAngle = map(sc,0,60,0,360);
pop();

push();
stroke("red");
strokeWeight(6);
circle(300,200,75,0);
scAngle = map(mn,0,60,0,360);
pop();

push();
stroke("green");
strokeWeight(5);
circle(300,200,50,0);
scAngle = map(hr,0,60,0,360);


pop();

  drawSprites();
}