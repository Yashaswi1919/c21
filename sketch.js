var fixedRect, movingRect;
var car , wall;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 

  car = createSprite(200,200,50,50);
  car.shapeColor = "red";
  car.velocityX = 4;

  wall = createSprite(1000,200,30,200);
  wall.shapeColor  = "yellow";
}

function draw() {
  background(25,25,25);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(istouching(car,wall)){
    fill("white");
    text ("touching",200,200);


  }
  if(istouching(fixedRect,movingRect)){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  bounceoff(car,wall);
  //bounceoff(fixedRect,movingRect);
  

  
  
  drawSprites();
}
