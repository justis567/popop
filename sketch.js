

var background,background_Img
var ballon,bomb,bomb_Img,ballon_Img,world,engine


function preload(){
background_Img=loadImage("background.png")
ballon_Img=loadImage("balloon.png")
bomb_Img=loadImage("bomb.png")

}
  



function setup() {
  createCanvas(1600,800);
 balloon=createSprite(400, 200, 50, 50);
 balloon.addImage(ballon_Img)
 balloon.scale=0.25


 

 
}

function draw() {
  background(background_Img); 

 
  if (World.frameCount % 100 == 0) {
    if (bomb == 1) {
      bomb();
    }
    bomb=createSprite(1600,200,20,20)
  bomb.addImage(bomb_Img)
  bomb.velocityX=-25
  bomb.scale=0.25
  bomb.lifetime=100

  var bomb = Math.round(random(1,4));
  
  
  }
  
  

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-15
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +15
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-15
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +15
  }
  
  
  
 
  
  




  drawSprites();
 
}









 
 
 