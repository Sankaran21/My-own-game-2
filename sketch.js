var player;
var edges;
var boyImage,bacGImage,enemyImage,coronaImage,schoolImage,CCImage;
var engine,world;
var corona1,corona2,corona3,coron4;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16;
var edges;
var coin1,coin2,coin3,coinImage
var score=0;
var coronaG;
var lifes=3;
var gameState=0;
var endImage,gameOverImage,youWinImage;
var title;

function preload(){
   bacGImage=loadImage("Pictures/Background.png");
   enemyImage=loadImage("Pictures/Antagonists.png");
   coronaImage=loadImage("Pictures/Corona.png");
   CCImage=loadImage("Pictures/Community Center.png");
   schoolImage=loadImage("Pictures/School Image.png");
   endImage=loadImage("Pictures/End image.jpg");
   gameOverImage=loadImage("Pictures/gameover.png");
  youWinImage=loadImage("Pictures/You win.jpg");
  coinImage=loadImage("Pictures/Coin.png");
   
}
function setup(){
    createCanvas(displayWidth-30,displayHeight-150);

    corona1=createSprite(770,390,30,30);
    corona1.addImage(coronaImage);
    corona1.scale=0.1;
    corona1.velocityX=random(-4.8,4.8);
    corona1.velocityY=random(-4.8,4.8);
    corona1.setCollider("circle",0,0,40);

    corona2=createSprite(25,685,30,30);
    corona2.addImage(coronaImage);
    corona2.scale=0.1
    corona2.velocityX=random(-4.8,4.8);
    corona2.velocityY=random(-4.8,4.8);
    corona2.setCollider("circle",0,0,40);

    corona3=createSprite(1350,690,30,30);
    corona3.addImage(coronaImage);
    corona3.scale=0.1
    corona3.scale=0.1
    corona3.velocityX=random(-4.8,4.8);
    corona3.velocityY=random(-4.8,4.8);
    corona3.setCollider("circle",0,0,40);

    corona4=createSprite(1465,25,30,30);
    corona4.addImage(coronaImage);
    corona4.scale=0.1
    corona4.scale=0.1
    corona4.velocityX=random(-4.8,4.8);
    corona4.velocityY=random(-4.8,4.8);
    corona4.setCollider("circle",0,0,40);

    //coronaG=createGroup();
    //coronaG.shapeColor("Black");
    
    coin1=createSprite(630,50,40,40);
    coin1.addImage(coinImage);
    coin1.scale=0.125;
    coin1.setCollider("circle",0,0,40);


    coin2=createSprite(1130,680,40,40);
    coin2.addImage(coinImage);
    coin2.scale=0.125;
    coin2.setCollider("circle",0,0,40);


    coin3=createSprite(1383,273,40,40);
    coin3.addImage(coinImage);
    coin3.scale=0.125;
    coin3.setCollider("circle",0,0,40);



  player=new Boy();
  wall1=createSprite(50,100,200,20);
  wall2=createSprite(350,100,20,200);
  wall3=createSprite(250,250,20,300);
  wall4=createSprite(550,450,20,500);
  wall5=createSprite(250,650,300,20);
  wall6=createSprite(200,550,20,100);
  wall7=createSprite(350,450,20,200);
  wall8=createSprite(735,275,20,200);
  wall9=createSprite(990,480,500,20);
  wall10=createSprite(895,625,20,100);
  wall11=createSprite(1050,260,400,20);
  wall12=createSprite(1050,235,20,300);
  wall13=createSprite(725,620,400,20);
  wall14=createSprite(1284,123,20,75);
  wall15=createSprite(850,80,20,100);
  wall16=createSprite(90,390,20,250);       
   

}
function draw(){
  if(gameState==0){
   background(endImage);
   title=createElement("h1");
   title.html("Welcome to the Corona Game");
   title.position(width/2-250,height/2-150);
   title.style("font-size","50px");
   textSize(36);
   textFont("Felix Titling");
   fill("Black");
   text("Press S key to start",width/2-150,height/2);
  if(keyDown("s")){
   gameState=1;
   title.hide();

  }
   }
   if(gameState==1){

   background(255,235,149);
   textSize(20);
   fill("Black");
   text("Score: "+score,1390,30);
   
   player.display();
   player.control();
   
   console.log(mouseX,mouseY);
   edges=createEdgeSprites();

   corona1.bounceOff(edges);
   corona2.bounceOff(edges);
   corona3.bounceOff(edges);
   corona4.bounceOff(edges);

   player.boy.bounceOff(edges);
   
   

   player.boy.collide(wall1)
   player.boy.collide(wall2);
   player.boy.collide( wall3);
   player.boy.collide(wall4);
   player.boy.collide(wall5);
   player.boy.collide(wall6);
   player.boy.collide(wall7);
   player.boy.collide(wall8);
   player.boy.collide(wall9);
   player.boy.collide(wall10);
   player.boy.collide(wall11);
   player.boy.collide(wall12);
   player.boy.collide(wall13);
   player.boy.collide(wall14);
   player.boy.collide(wall15);
   player.boy.collide(wall16);
   console.log(mouseX,mouseY);
  // console.log(player.boy.height/2);

   image(bacGImage,500,0,250,100);
   image(schoolImage,1005,610,250,100);
   image(CCImage,1270,205,250,100);

   drawSprites();


   if(lifes>=0){
    
   
   if(player.boy.isTouching(corona1)||player.boy.isTouching(corona2)||player.boy.isTouching(corona3)||player.boy.isTouching(corona4) ){
   player.boy.x=25;
   player.boy.y=40;
   lifes-=1;
   }

   if(player.boy.isTouching(coin1)){
     coin1.destroy();
     score=score+100;
     }

     if(player.boy.isTouching(coin2)){
      coin2.destroy();
      score=score+100;
}

  if(player.boy.isTouching(coin3)){
  coin3.destroy();
  score=score+100;
 }
  // gameState=2;
  }
  if(lifes==0){
   gameState=2;
  }
}
  if(gameState===2){
    background(endImage);
    imageMode(CENTER);
    image(gameOverImage,width/2,height/2,500,100);

  }

  
if(score===300){
background(endImage);
imageMode(CENTER);
image(youWinImage,width/2,height/2,500,100)
}
   
   
   
}

