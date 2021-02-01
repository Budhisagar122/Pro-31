class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true,
        }
        this.body = Bodies.circle(x,y,-10,options);
        this.r=-10;  
        World.add(world,this.body);
        this.image=loadImage("walking_1.png")
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r)
        image(this.image,this.body.position.x,this.body.position.y)
    }
}