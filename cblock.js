class CBlock{
    constructor(x,y,w,h){
        var options = {
            restitution: 0.3,
            density:10,
            friction:0.1
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        
        this.w = w;
        this.h = h;
        this.v = 255;
        this.image = loadImage("sprites/cloudblock.png");
    }
    
    display(){
        if(this.body.speed<5){
            if(this.image){
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(this.body.angle);
            imageMode(CENTER);
            image(this.image,0,0,this.w,this.h);
            pop();
            }
        }
        else{
            if(this.image){
            this.v-=7;
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(this.body.angle);
            imageMode(CENTER);
            tint(255,this.v);
            image(this.image,0,0,this.w,this.h);
            pop();
            
            
            }
            if(this.v<0){
            World.remove(world,this.body);
            this.image = null;
            
            }
            
        }
    }

}