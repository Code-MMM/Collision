var fixed, moving;


function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving  = createSprite(200, 200, 50, 50);
  fixed.shapeColor = "green";
  moving.shapeColor = "green";
}

function draw() {
  moving.x = World.mouseX
  moving.y = World.mouseY
  background(100,100,150);  

  if (fixed.x - moving.x <= fixed.width/2 + moving.width/2 && fixed.x - moving.x >= -(fixed.width/2 + moving.width/2) && 
  fixed.y - moving.y <= fixed.height/2 + moving.height/2 && fixed.y - moving.y >= -(fixed.height/2 + moving.height/2)) {
    fixed.shapeColor = "red";
    moving.shapeColor = "red";
  }
  else {
    fixed.shapeColor = "green";
    moving.shapeColor = "green";
  }

  

  drawSprites();
}