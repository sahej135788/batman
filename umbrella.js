class Umbrella{
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.image=loadImage("images/Walking Frame/walking_1.png")
      this.body = Bodies.circle(x,y,600,options);
      this.radius=600
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y,600,600);
    }
  };
