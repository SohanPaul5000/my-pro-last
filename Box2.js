class Box2{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':1.3,
            'friction':5.0,
            'density':80
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        //console.log(this.body.speed);
        if(this.body.speed>30){
          World.remove(world,this.body)
        }
        else{
  
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       rectMode(CENTER);
       fill("purple");
       stroke("green");
       strokeWeight(4);
       rect(0,0,this.width,this.height);
        pop();
      }
      }
  }