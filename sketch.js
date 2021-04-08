const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImages,bin;

function preload(){
    binImages = loadImage("Images/dustbingreen.png");
}
function setup(){
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    ball = new Paper();

	bin = createSprite(620,500,20,50);
    bin.addImage(binImages);
    bin.scale = 0.50;

	lineL = new Bin(570,520,20,100);
	lineR = new Bin(675,520,20,100);
	lineB = new Bin(620,570,120,20);

	//Create the Bodies Here.
  
}
function draw(){
    background(0);
    Engine.update(engine);

	ground.display();
    ball.display();
    bin.display();
	lineL.display();
    lineR.display();
    lineB.display();
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:74,y:-75});
    }
}