var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90)
  weight = random(400,1500)


  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  thickness = random(22,83) 


  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor = color(80,80,80);

  
}

function hasCollided(Lbullet,Lwall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge= wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true 
  }
  return false;
}

if (hasCollided(bullet,wall)) 
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);

  }



if (damage<10);
{
    wall.shapeColor=color(0,255,0);
}




