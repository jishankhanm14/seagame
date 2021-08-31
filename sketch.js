var ships,ship1,ship2,ship3,ship4;
var sea,sea1;
function preload(){
ships = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea1=createSprite(400,200)
  sea1.addImage(sea);
  sea1.scale=.28
  ship1 = createSprite(100,200,20,50);
  ship1.addAnimation("movingships",ships);
  ship1.scale=.2
}

function draw() {
  background("blue");
  sea1.velocityX=-2
  if(sea1.x<0){
    sea1.x=sea.width/8
  }
 drawSprites();

}