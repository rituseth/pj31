
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var drop =[]
var maxDrops = 100
var engine, world;
var m

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    m = new Man(200,100)
   for (var i=0; i<maxDrops; i++){
     drop.push(new Drops(random(0,500) , random(0,500)))
   }
  
   var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	
	Render.run(render);
   
}

function draw(){
    Engine.update(engine);
background(0);


m.display()
    for (var i=0; i<maxDrops; i++){
      drop[i].display();
      drop[i].update();
    }

   

}

