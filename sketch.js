
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;

var leftSide;
var rightSide;

function preload(){

}

function setup() {
	createCanvas(800, 700);

	var Edge1_options={
		isStatic: true
	  };

	  var Edge2_options={
		isStatic: true
	  };

	leftSide = createSprite(500,650,10,150);
	rightSide = createSprite(750,650,10,150);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={	
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}



	ball=Bodies.circle(100,100,20,ball_options);
 	World.add(world,ball);

	ground = new Ground(0,700,1600,10);

	Engine.run(engine);

	Edge1=Bodies.rectangle(500,650,10,150,Edge1_options);
  	World.add(world,Edge1);
	
	Edge2=Bodies.rectangle(750,650,10,150,Edge2_options);
	World.add(world,Edge2);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();

  keyPressed();

  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{
			x:1,y:4
		  },{
			x:2,y:3
		  })
	}
}
	if(keyCode === DOWN_ARROW){
		if(keyCode === UP_ARROW){
			Matter.Body.applyForce(ball,{
				x:-1,y:4
			  },{
				x:-2,y:3
			  })
		}
	}
