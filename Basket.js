class Basket{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:0.3
        }   
        this.body.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    } 
    display(){
        var pos= this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTRE);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}