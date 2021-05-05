const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bgImg;
var snow;

function preload(){
  bgImg=loadImage("snow3.jpg");
   //snowImg=loadAnimation("snow5.webp");
   girlImg=loadImage("girl_in_snow-removebg-preview (1).png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  girl=createSprite(400, 200, 50, 50);
  girl.addImage(girlImg);
  girl.scale=0.5;
  snow=new Snow();
}

function draw() {
  background(bgImg);  
 
  Engine.update(engine);

  snowFall();
  
  snow.display();
 //console.log(snow)
 drawSprites();
}

function keyPressed(){
  if(keyCode==UP_ARROW){
    girl.x=girl.x-40 
  }
}

function snowFall(){
 // console.log(frameCount);
  if(frameCount % 60 ===0){
   // snow=new Snow(random(50,750),0);
   snow=new Snow();
   // snow.display();
  }
}