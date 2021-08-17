
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.3,
		frictionAir:0,
		isStatic:false,
		density:1.2,
	  }

	//Create the Bodies Here.
	ground =new Ground(200,690,10000,20);

	ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  var piller_options ={
    isStatic: true
  };

  var piller2_options ={
    isStatic: true
  };

  piller=Bodies.rectangle(200,690,40,20,piller_options);
  World.add(world,piller)

  
  piller2=Bodies.rectangle(290,690,40,20,piller2_options);
  World.add(world,piller2)




 
}


function draw() {
  rectMode(CENTER);
  background("Red");

  ellipse(ball.position.x,ball.position.y,20);

   Engine.update(engine);

  ground.Display();

 

  rect(piller.position.x,piller.position.y,20,560);

  rect(piller2.position.x,piller2.position.y,20,560);
  
 

  
  
  
  
  drawSprites();
 
}
   function keyPressed (){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(ball,ball.position , {x : 85, y : -85})
	  }
  }

  






