const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop1;
var maxDrops=100;

function preload(){
    
}

function setup(){
    createCanvas(350,600)
    engine = Engine.create();
    world = engine.world;

    drop1=new Rainfall(100,10,0.1);
    createDrop();
}

function draw(){
    background("black")
    Engine.update(engine);

    drop1.display(); 
}   

function createDrop(){
    if(frameCount%100===0){
        push();
        Rainfall.update 
    }
}

