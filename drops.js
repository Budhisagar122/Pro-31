class Rainfall{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10);
        this.r=10;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r)
        for(var i=0; i<maxDrops; i++){
            maxDrops.push(new createDrop(random(0,400),random(0,400)));
        }
    }
    update(){
            if(this.body.position.y>height){
                Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
            
        }
        
    }
}