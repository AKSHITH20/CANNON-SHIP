const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,bodies;
var backgroundImg,platform,cannon;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    }

function setup(){
    var canvas = createCanvas(1200,400);

 //creating a physics engine   
    engine = Engine.create();
    world = engine.world; 

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    cannon = new Cannon(150, 100);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
  //making all the variables to display  
    cannon.display();
    ground.display();      
    platform.display();         
}