class Cloud{
    constructor(x,y,w,h){
        var options = {
            isStatic: true,
            restitution: 0.3
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
        this.c = loadImage("sprites/cloud.png");
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.c,this.body.position.x,this.body.position.y-20,this.w+50,this.h+20);
        pop();
    }
}