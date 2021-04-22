
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball1;
var ball2;
var ball3;
var ball4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   ground = new Ground (400,200,500,20);
	//Create the Bodies Here.
	ball1 = new Ball(400,300,10,10);
	ball2 =  new Ball (300,300,5,15);
	ball3 = new Ball(200,300,8,8);
	ball4 = new Ball (100,300,4,4);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
}



