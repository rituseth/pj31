class Drops {
    constructor(x,y){
    var options = {
        
        restitution:0.1,
        friction:0.01
        
     
    }
this.r = 2
this.x = x
this.y=y

    this.body=Bodies.circle(x,y, 2,  options) 
   
    World.add(world,this.body);

    }
   
       
update(){
    if(this.body.position.y> height){
        Matter.Body.setPosition(this.body , {x:random(0,490) , y:random(0,590) })
    }
}

       
display(){


  
    fill ("blue")
    
    ellipseMode(RADIUS);
    ellipse(this.body.position.x , this.body.position.y , this.r,this.r)
  
}};


