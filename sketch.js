const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var box1,box2,box3,dustbinImg;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	//Making the paper ball
	paper = new Paper(80,400,70);

	//Making the ground
	ground = new Ground(800,650,1600,20);
	
	//making dustbin boxes 
	box1 = new Box(1395,575,20,140);
	box2 = new Box(1450,640,150,20);
	box3 = new Box(1505,575,20,140);
	dustbin = createSprite(1450,575);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.4

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("WHITE");
  
   //display all elements
   paper.display();
	drawSprites();
   ground.display();
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:170,y:-120})
	}
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-170,y:-120})
	}
}
