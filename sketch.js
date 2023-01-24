var ball;
var edges;
var obstacle1;
var obstacle2;


function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,20,20);
  ball.shapeColor="green";
  //ball.setVelocity(7,-5);
  obstacle1=createSprite(100,200,120,10);
  obstacle1.shapeColor="red";
  obstacle2=createSprite(200,300,120,10);
  obstacle2.shapeColor="blue";
  edges=createEdgeSprites();
}

function draw() 
{
  background(100,0,100);
ball.bounceOff(edges);
ball.bounceOff(obstacle1);
ball.bounceOff(obstacle2);
if(keyDown("left")){
  ball.x=ball.x-2;
}
if(keyDown("up")){
  ball.y=ball.y-2;
}
if(keyIsDown(DOWN_ARROW)){
  ball.y=ball.y+2;
}
if(keyIsDown(RIGHT_ARROW)){
  ball.x=ball.x+2;
}
drawSprites();
}




