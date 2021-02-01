const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop1,boy;
var maxDrops=100;
var drops=[];
var thunder,thunder1,thunder2,thunder3;

function preload(){
    thunder1=loadImage("2.png");
    thunder2=loadImage("3.png");
    thunder3=loadImage("4.png");

}

function setup(){
    createCanvas(400,800)
    engine = Engine.create();
    world = engine.world;

   

    if(frameCount%150===0){
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,400)));
    }
    
}

   boy=new Umbrella(-200,60);
}

function draw(){
    background("black")
    Engine.update(engine);

    
    boy.display();
    

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    rand=Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case  1:thunder.addImage(thunder1);
            break;
            case  2:thunder.addImage(thunder2);
            break;
            case  3:thunder.addImage(thunder3);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6);
    }
}   

