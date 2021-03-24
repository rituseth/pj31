class Man {
    constructor(x,y){
    var options = {
        isStatic:true
       
    }
this.r = 300
this.x = x
this.y=y

    this.body=Bodies.circle(x,y, 45,  options) 
    this.image = loadImage("walking_1.png"," walking_2.png ","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png ")
    World.add(world,this.body);

    }  

display(){
    fill ("blue")
    ellipseMode(RADIUS);
    ellipse(this.body.position.x , this.body.position.y+65 ,45,45)
  
}};
