const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1= new Box(200,300,50,80)
    box2 = new Box(230,100,50,80)
    ground = new Ground(200,height,400,20)
}

function draw(){
    background("yellow");
    Engine.update(engine);
    box1.display()
    box2.display()
    ground.display()
}