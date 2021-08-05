
var edges, ground, groundimg
var trex ,trex_running;
function preload(){
  
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
groundimg = loadImage("ground2.png")

}



function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(80, 160, 20, 50)
 
 trex.addAnimation("running",trex_running)
trex.scale = 0.5;

trex.x = 50

ground = createSprite(200, 180, 400, 20)
ground.addImage("ground",groundimg)

edges = createEdgeSprites();
}



function draw(){
  background("black")

ground.velocityX = -3;

console.log(ground.x)

if(ground.x<0){
  ground.x = ground.width/2;
}

//console.log(trex.y)

  if(keyDown("space")){
    trex.velocityY = -8;
  }

  trex.velocityY = trex.velocityY + 0.5;
  
  trex.collide(ground);

drawSprites();
}
