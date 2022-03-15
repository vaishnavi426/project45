class Objects
{
    constructor() {
        this.x = random(250,1000);
        this.y = 10;
        this.body = Bodies.rectangle(this.x,this.y,80,80);
        this.image = loadImage("assets/gift.png");
        //this.scale = 0.2;
        World.add(world,this.body);
    }
    display() {
        push() 
          console.log("this is right");
          this.body.setVelocityY = 0.002; 
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,80,80); 
        pop()
    }
}