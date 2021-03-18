
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;

	uno = new Rooph(380,20,900,20)
	dos= new Rooph(320,20,900,20)
	tres= new Rooph(260,20,900,20)
	phor=new Rooph(200,20,900,20) 
body1= new Circul(200,400,30)
body2 = new Circul(260,400,30)
body3= new Circul(320,400,30)
body4 = new Circul(380,400,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200,200,201);
 
body1.display()
body2.display()
body3.display()
body4.display()
 uno.display()
  dos.display()
  tres.display()
  phor.display()
  drawSprites();
 
 
    line (uno.body.position.x,uno.body.position.y,body4.body.position.x,body4.body.position.y);
	line(tres.body.position.x,tres.body.position.y,body2.body.position.x,body2.body.position.y);
	line(dos.body.position.x,dos.body.position.y, body3.body.position.x,body3.body.position.y);
	line(phor.body.position.x,phor.body.position.y,body1.body.position.x,body1.body.position.y);
}



