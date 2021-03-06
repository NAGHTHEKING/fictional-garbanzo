class Circul {
    constructor(x, y, width) {
      var options = {
          isStatic:true,
          'restitution':0.3,
          'friction':0.5,
          'density':2
      }
      this.body = Bodies.circle(x, y, width, options);
      this.width = width;
      //this.height = height;
      //this.image= loadImage("sprites/paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(255);
     ellipse(0, 0, this.width,this.width);
      pop();
    }
  };