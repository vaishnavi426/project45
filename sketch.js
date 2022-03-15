const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var bgimg, buntingImg, joystickImg, reindeerImg, santaImg, stockingImg;
var treeImg, wreathImg, gift2, giftImg;
var obj, img, giftGroup;

function preload()
{
  bgimg = loadImage("assets/bg2.png");
  buntingImg = loadImage("assets/bunting.png");
  joystickImg = loadImage("assets/joystick.png");
  reindeerImg = loadImage("assets/reindeer.png");
  santaImg =loadImage("assets/santa.png");
  stockingImg = loadImage("assets/stocking.png");
  treeImg = loadImage("assets/tree.png");
  wreathImg = loadImage("assets/wreath.png");
  giftImg = loadImage("assets/gift.png");
}

function setup() {
  createCanvas(1200,600)

  engine = Engine.create();
  world = engine.world;

  giftGroup = new giftGroup();
}

function draw() 
{
  background(51);
  imageMode(CENTER);
  image(bgimg,600,300,1200,600);

  spawnGifts();

  //gift.display();
  Engine.update(engine);
  drawSprites();
}

function spawnGifts() {
  if (frameCount % 100 === 0) {
    var x = random(250,1000)
    gift2 = createSprite(x,10,80,80);
    gift2.addImage('gift',giftImg);
    gift2.scale = 0.17;
    gift2.velocityY = 0.8;
    giftGroup.add(gift2);

    obj = createSprite(gift2.position.x,gift2.position.y+10,60,60);
    obj.velocityY = gift2.velocityY;

    gift2.depth = obj.depth+1;

    var rand = Math.round(random(1,7));
    switch(rand){
      case 1: obj.addImage(buntingImg);
              obj.scale = 0.2;
      break;
      case 2: obj.addImage(joystickImg);
              obj.scale = 0.05;
      break;
      case 3: obj.addImage(reindeerImg);
              obj.scale = 0.15;
      break;
      case 4: obj.addImage(santaImg);
              obj.scale = 0.015;
      break;
      case 5: obj.addImage(stockingImg);
              obj.scale = 0.2;
      break;
      case 6: obj.addImage(treeImg);
              obj.scale = 0.025;
      break;
      case 7: obj.addImage(wreathImg);
              obj.scale = 0.5;
      break;
      default : break;
    }
  }
}