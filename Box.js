class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':1.3,
          'friction':3.0,
          'density':50
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
        
    //boxarray=[box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20]
    //console.log(boxarray);
    
    }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed>20){
        
        World.remove(world,this.body)
        //boxarray.pop();
      //console.log(boxarray);
        
      }

      else{

      
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
     rectMode(CENTER);
     fill("white");
     stroke("black");
     strokeWeight(3);
     rect(0,0,this.width,this.height);
      pop();
    }
    }
}