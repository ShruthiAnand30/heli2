var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bas1,bas2,bas3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	bas1= createSprite(420,650,200,20);
	bas1.shapeColor= color("red");
	bas1.setStatic = "true";

	bas2=createSprite(520,610,20,100);
	bas2.shapeColor= color("red");
	bas1.setStatic = "true";

	bas3=createSprite(320,610,20,100);
	bas3.shapeColor= color("red");
	bas1.setStatic = "true";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);
  	packageSprite.x= packageBody.position.x ;
  	packageSprite.y= packageBody.position.y ;
 
	  
 	drawSprites();
 
}

	function keyPressed() { 
		if (keyCode === DOWN_ARROW) { 
			Matter.Body.setStatic(packageBody,false); 
			bounceOff();
		} 
	}
function bounceOff(helicopterSprite,package){
    if (helicopterSprite.x - package.x < package.width/2 + helicopterSprite.width/2
      && package.x - helicopterSprite.x < package.width/2 + helicopterSprite.width/2) {
    helicopterSprite.velocityX = helicopterSprite.velocityX * (-1);
    package.velocityX = package.velocityX * (-1);
  }
  if (helicopterSprite.y - package.y < package.height/2 + helicopterSprite.height/2
    && package.y - helicopterSprite.y < package.height/2 + helicopterSprite.height/2){
    helicopterSprite.velocityY = helicopterSprite.velocityY * (-1);
    package.velocityY = package.velocityY * (-1);
  }
  }


