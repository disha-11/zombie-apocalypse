var helicopterIMG, helicopterSprite, packageSprite,packageIMG,zombieIMG;
var bg, bgIMG;
var p1,p2,p1IMG,p2IMG;
var packageBody,ground,zombie,zombie2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	zombieIMG=loadImage("zombie.png")
	bgIMG=loadImage("bg.png")
	p1IMG=loadImage("man2.png")
	p2IMG=loadImage("man1.png")


}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	bg=createSprite(400,350,10,10);
	bg.addImage(bgIMG)
	bg.scale=1.2;
	bg.velocityX=2;

	
	
packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	zombie2=createSprite(800,600,10,10);
	zombie2.addImage(zombieIMG)
	zombie2.scale=0.8;
	zombie2.velocityX=-2.0; 
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 zombie=Bodies.rectangle(800,600,10,10,{isStatic:true});
	 World.add(world,zombie);
	 


	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
if(bg.x>900){
	bg.x=bg.width/2;
}

  
   packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
texts();
zombiec();
people();
keyPressed();
drawSprites();
 
}


function keyPressed() {
	if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);    
	 }
   }

  function zombiec(){
	if (frameCount%540===0){
		zombie=createSprite(800,600,10,10);
		zombie.addImage(zombieIMG)
		zombie.scale=0.8;
		zombie.velocityX=-2.0; 
}
if (frameCount%400===0){
	zombie=createSprite(800,550,10,10);
	zombie.addImage(zombieIMG)
	zombie.scale=0.8;
	zombie.velocityX=-2.0; 
  }
}

  function people(){
	  if(frameCount%350===0){
		p1=createSprite(800,600,10,10);
		p1.addImage(p2IMG)
		p1.scale=0.25;
		p1.velocityX=-2;
	  }
  } 
  
  function texts(){
	textSize(20);
	fill ("black");
	text ("Press The Down Arrow to deliver the parcel",50,350);
  }

	
	
