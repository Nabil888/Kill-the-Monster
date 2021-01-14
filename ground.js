class Ground{
    constructor(x,y,w,h){
        var options = {
             isStatic:true,
             density:2,
             friction:1,
             restitution:0.01
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
        //this.ground= loadImage("sprites/ground2.png");
    }
    display(){
        var pos = this.body.position;
        push();
        //stroke("brown");
        //strokeWeight(50);
        fill("red");
        rectMode(CENTER);
        
        //imageMode(CENTER);
        //image(this.ground,pos.x,pos.y-20,this.w,this.h);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}

