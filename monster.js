class Monster{
    constructor(x,y,w,h){
        var options = {
            density:10000000000,
            friction:1,
            restitution:0.2
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
        this.image = loadImage("sprites/monster.png");
        this.v = 255;
    }
    display(){
        var pos = this.body.position;
        if(this.body.speed<7){
            if(this.image){
                push();
                translate(pos.x,pos.y);
                rotate(this.body.angle);
                imageMode(CENTER);
                image(this.image,0,0,this.w,this.h);
                pop();
            }
        }
        else{
            if(this.image){
                this.v-=10;

                push();
                translate(pos.x,pos.y);
                rotate(this.body.angle);
                imageMode(CENTER);
                tint(255,this.v);
                image(this.image,0,0,this.w,this.h);
                pop();

                if(this.v<0){
                    World.remove(world,this.body);
                    this.image = null;
                
                }
            }
        }  
    }
}