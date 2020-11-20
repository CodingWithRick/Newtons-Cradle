const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, bob1, bob2, bob3, bo4, bob5, rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 100, 300, 10);


	bob1 = new Bob(300, 300);
	bob2 = new Bob(350, 300);
	bob3 = new Bob(400, 300);
	bob4 = new Bob(450, 300);
	bob5 = new Bob(500, 300);


	rope1 = new Rope(bob1.body, roof.body, -100, 0);
	rope2 = new Rope(bob2.body, roof.body, -50, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 50, 0);
	rope5 = new Rope(bob5.body, roof.body, 100, 0);
	Engine.run(engine);

}


function draw() {
	background(255);
	rectMode(CENTER);
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {
			'x': -50,
			'y': -50
		})
	}
}



