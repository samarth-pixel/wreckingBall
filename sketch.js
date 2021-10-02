const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box, box1, box2, box3, box4, box5, box6, box7, box8, box9;
var ball, rope;
function setup() {
  createCanvas(2000,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,600, 1200, 20);
  box = new Box(900,100,70,70);
  box1 = new Box(950,100,70,70);
  box2 = new Box(1000,100,70,70);
  box3= new Box(1050,100,70,70);
  box4 = new Box(1100,100,70,70);
  box5 = new Box(1150, 100, 90, 90);
  box6 = new Box(1200, 100, 90, 90);
  box7 = new Box(1250, 100, 90, 90);
  box8 = new Box(1300, 100, 90, 90);
  box9 = new Box(1350, 100, 90, 90);
  ball = new Ball(200,200,80,50);
  rope = new Rope(ball.body, {x : 500, y: 50});

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ball.display();
  rope.display();

}
function mouseDragged() {
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}