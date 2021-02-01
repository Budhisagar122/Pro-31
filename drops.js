class Drop{
    constructor(x,y){
        this.body = Bodies.circle(x,y,5);
        this.r=5;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r)
       
    }
    update(){
            if(this.body.position.y>height){
                Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
            
        }
        
    }
}