
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paperObject;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject = new Paper(200,200,10,10,PI/2);
  var render = Render.create({
    element: document.body,
    engine:engine,
    options :{
      width: 1600,
      height:700,
      wireframes: false
    }
  });

	Engine.run(engine);
  Render.run(render);
}


function draw() {
  var z = 0.1;
  var f = -0.24;
  
  rectMode(CENTER);
  background(230);
  

  groundObject.display();
  dustbinObj.display();
  paperObject.display();


  
    if(keyCode === UP_ARROW){
    Matter.Body.setStatic(paperObject.body,false);
    z = z + 0.1;
    f = f - 0.5;
    keyCode = ESCAPE;
    }
    else{
    z = z - 0.1;
    f = f + 0.1;
    }

  
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:z,y:f});
  
  //console.log(paperObject.body.position.x);
  //console.log(paperObject.body.position.y);
  
    
  if(paperObject.body.position.x >= 950 && paperObject.body.position.x <= 1000 &&
    paperObject.body.position.y >= -20 && paperObject.body.position.y <= 50 ){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1000, y:1000});
    }
else{
  if (paperObject.body.position.y > 200 ){
    paperObject.body.position.x = 200;
    paperObject.body.position.y = 200;
    Matter.Body.setStatic(paperObject.body,true);
    z = 0.1;
    f = -0.24;
    
    }
  }

  }
  

