var movingRect;
var fixedRect;

//Hi Pushpanjali!

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 20, 50); // movingRect width = 20 ; w/2 = 10
  movingRect.shapeColor = "green";
  

  fixedRect = createSprite(200,200,80,40); //fixedRect width = 80 ; width/2 = 40
  fixedRect.shapeColor = "green";
}

function draw() {
  background(255,255,255); 

  console.log(movingRect.x - fixedRect.x)
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  
  if(movingRect.x - fixedRect.x <= movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x - movingRect.x <= movingRect.width/2+fixedRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y - movingRect.y <= movingRect.height/2+fixedRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  drawSprites();
}