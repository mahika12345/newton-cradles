class Ball {
    constructor(x,y,radius) {
      var options = {
        
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = this.radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("brown");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };