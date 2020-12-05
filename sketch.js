const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  

  box1 = new Box(200,200,50,50);
  box2 = new Box(240,100,40,80);
  ground = new Ground(200,380,400,20);
}

function draw() {
  background("lightBlue");  
  Engine.update(engine);
  fill("blue");
  box1.display();
  fill("red");
  box2.display();
  ground.display();
}