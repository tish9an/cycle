var jaxon, jaxon_running, edges;
var pathImage, invisibleSide1, invisibleSide2;

var path;



function preload(){
  //pre-load images
  jaxon_running = loadAnimation ("Runner-1.png", "Runner-2.png")
  pathImage = loadImage ("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite (200,100,400,20);
  path.addImage("path", pathImage);

  path.scale = 1.3;

  jaxon = createSprite(50,350,20,50);
  jaxon.addAnimation ("running", jaxon_running)
  edges - createEdgeSprites();


  jaxon.scale = 0.1;
  jaxon.x = 50

  if (jaxon.x < 10) {jaxon.x = 10}

  
// invisibleSide1 = createSprite(10,50,400,50);
// invisibleSide1.visible = false;

// invisibleSide2 = createSprite(390,350,400,350);
// invisibleSide2.visible = false;

}

function draw() {
  background(0);
  path.velocityY = -2;
  console.log (path.Y)

  if (path.y <0) {
    path.y = 200;
  }

  {
  
    if(keyIsDown(RIGHT_ARROW)) {
      jaxon.position.x = jaxon.position.x + 5;
  
  }
  
  if(keyIsDown(LEFT_ARROW)) {
    jaxon.position.x = jaxon.position.x - 5;
  
  }

  // jaxon.collide(invisibleSide1);
  // jaxon.collide(invisibleSide2);



drawSprites();

}

}