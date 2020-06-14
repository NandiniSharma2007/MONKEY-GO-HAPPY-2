//Global Variables
var bananaImage,obtacleGroup,bananaGroup,backgroundImage;
var player_running,obstacleImage,ground;
var Background,score;


function preload(){
  backgroundImage=loadImage("jungle.jpg");
  player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("Banana.png");
  obstacleImage=loadImage("stone.png");
}


function setup() {
  createCanvas(600,300);
  score=0;
  Background=createSprite(300,150,600,300);
  Background.addImage(backgroundImage);
  
  Background.velocityX=-2;
  Background.x=Background.width/2;
  
  ground=createSprite(150,300,600,10);
  ground.velocityX=-2;
  ground.x=ground.width/2;
  ground.visible=false;
  
  
  monkey=createSprite(50,200);
  monkey.addAnimation("running",player_running);
  monkey.scale=0.19;
    bananaGroup=new Group();
  obstaclesGroup=new Group();
     
}


function draw(){
 background(255); 
  monkey.collide(ground);
  if (Background.x>0){
    Background.x=Background.width/2;
  }
  if (ground.x>0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-2;
      
  } 
        if (bananaGroup.isTouching(monkey)){
    score=score+2;
    monkey.scale=monkey.scale+0.03;
    bananaGroup.destroyEach();
  }
          if (obstaclesGroup.isTouching(monkey)){
    score=score+2;
            monkey.scale=monkey.scale/2;
  obstaclesGroup.destroyEach();
  }
    
  switch(score){
    case 10:monkey.scale=0.12;
      break;
       case 20:monkey.scale=0.14;
      break;
       case 30:monkey.scale=0.16;
      break;
       case 40:monkey.scale=0.18;
      break;
      default:break;
      

  
  }
monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground); 
  spawnBanana();
  spawnObstacles();
  drawSprites();
   stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+score,400,50);
}
function spawnBanana () {
  if (frameCount%80===0){
   var banana=createSprite(310,250);
    banana.addImage(bananaImage);
    banana.scale=0.09;
    banana.velocityX=-2;      
    banana.y=Math.round(random(150,250));
    bananaGroup.add(banana);
  banana.lifetime=200;
  }
}
function spawnObstacles (){
  if (frameCount%300===0){
    var obstacle=createSprite(320,250);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.09;
    obstacle.velocityX=-4;
    obstacle.y=Math.round(random(150,200));
    obstaclesGroup.add(obstacle);
  }
}