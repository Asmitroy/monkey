
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,time;
var ground,groundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  ground = createSprite(400,350,900,10);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background(220);
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  time=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+time,150,100);
  
  ground.velocityX=-4;
  ground.x=ground.width/2;
  monkey.collide(ground);
  
  if(keyDown("space")&&monkey.y>=310){
    monkey.velocityY=-15.5;
    
  }
  
  monkey.velocityY+=0.5;
  
  monkey.collide(ground);
  food();
  obs();
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(410,Math.round(random(120,200)),20,20);
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.scale=0.1;
    banana.lifetime=100;
    FoodGroup.add(banana);
  }
}

function obs(){
  if(frameCount%300===0){
    obstacle=createSprite(410,310,20,20);
    obstacle.collide(ground);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX=-4; 
    obstacle.scale=0.2;
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
  }
}







