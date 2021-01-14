class Hero{
    constructor(x,y,w,h){
        var options = {
            density:1,
            friction:1,
            restitution:0.2
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.image = loadImage("sprites/hero.png");
        this.w = w;
        this.h = h;
    }
    display(){
        var pos = this.body.position;
        var ang = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}