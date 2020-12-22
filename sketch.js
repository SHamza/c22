const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;

var myengine,myworld;
var ground,ball;



function setup() {
  createCanvas(800,400);
  myengine =Engine.create();
  myworld =myengine.world;
  var gopt={
    isStatic:true
  }
  ground =Bodies.rectangle(300,350,400,20,gopt);
  World.add(myworld,ground);
 
  ball =Bodies.circle(400,200,30,{restitution:0.8,friction:0.9});
  World.add(myworld,ball);
  console.log(ground);
}
function draw(){
  background(0);
  var pos =ground.position;
  var bpos =ball.position;
  Engine.update(myengine);
  rectMode(CENTER);
  rect(pos.x,pos.y,400,20);


  
  ellipseMode(RADIUS);
  ellipse(bpos.x,bpos.y,30,30);

}