
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundObject;
var paperObject;
var trashObject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
groundObject = new Ground(800,670,1600,20);
paperObject = new Paper(200,450,40);
trashObject = new Trash(1190,530);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  groundObject.display();
  paperObject.display();
  trashObject.display();
  drawSprites();
  
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:95,y:-85})
	}
}


