var car,wall,speed,weight; 

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="white"
  wall=createSprite(1500, 200, 20, height/2);
  wall.shapeColor="brown"

  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(0); 

  if (mousePressedOver(car)) {
    car.velocityX=speed
  }

  if (wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX=0
    var deformation= 0.5*weight*speed*speed/22500

    if (deformation<100) {
      car.shapeColor=color(0, 255, 0)
      wall.shapeColor="brown"
    }

    if (deformation>100&&deformation<180) {
      car.shapeColor=color(230, 230, 0)
      wall.shapeColor="brown"
    }

    if (deformation>180) {
      car.shapeColor=color(255, 0, 0)
      wall.shapeColor="brown"
    }
  }

  drawSprites();
}