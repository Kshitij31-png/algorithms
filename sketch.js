var fixedRect,movingRect;
function setup()
{
  createCanvas(800,400);
 fixedRect=createSprite(200,100,80,40);
 fixedRect.shapeColor="green";
 fixedRect.debug=true;
 fixedRect.velocityX=3;
 movingRect=createSprite(400,100,50,30);
 movingRect.shapeColor="green";
 movingRect.velocityX=-3;
 movingRect.debug=true;
 
}
function draw()
{background("black");
drawSprites();

//  movingRect.x=World.mouseX;
//  movingRect.y=World.mouseY; 
 console.log(movingRect.x-fixedRect.x);
 if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2)
  {
    movingRect.velocityX=(-1)*movingRect.velocityX;
    fixedRect.velocityX=(-1)*fixedRect.velocityX;

  }
 if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
 &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
{
  movingRect.velocityY=(-1)*movingRect.velocityY;
  fixedRect.velocityY=(-1)*fixedRect.velocityY;
}

}