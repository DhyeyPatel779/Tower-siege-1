const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground

function setup() {
engine = Engine.create();
world = engine.world;

  var canvas = createCanvas(800,400);
  
 ground = new Ground(50,200,800,50)
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
ground.display();  


  drawSprites();
}