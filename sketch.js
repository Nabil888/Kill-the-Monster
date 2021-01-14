const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImage;
var hero,monster;
var sling;
var c1,c2,c3;
var cbs = [];
var gameState = 0;
//var h1,h2,h3,h4,h5,h1Image,h2Image,h3Image,h4Image,h5Image;
function preload(){
    bgImage = loadImage("sprites/bg2.jpg");
   
    //h1 = loadImage("sprites/heart1.png");
    //h2 = loadImage("sprites/heart1.png");
    //h3 = loadImage("sprites/heart1.png");
    //h4 = loadImage("sprites/heart1.png");
    //h5 = loadImage("sprites/heart1.png");
   
}

function setup(){
    createCanvas(1600,800);
    engine = Engine.create()
    world = engine.world;
    
    
    for(i = 810; i<1007;i+=50){
        cbs.push(new CBlock(i,490,49,49));
    }
    for(i = 810; i<1007;i+=50){
        cbs.push(new CBlock(i,460,49,49));
    }
    for(i = 810; i<1007;i+=50){
        cbs.push(new CBlock(i,430,49,49));
    }
    for(i = 810; i<1007;i+=50){
        cbs.push(new CBlock(i,400,49,49));
    }
    for(i = 810; i<1007;i+=50){
        cbs.push(new CBlock(i,370,49,49));
    }
    for(i = 810; i<1007;i+=50){
        cbs.push(new CBlock(i,340,49,49));
    }
    c1 = new Cloud(300,700,200,100);
    c2 = new Cloud(1170,500,370,100);
    c3 = new Cloud(900,550,200,100);
    //cb1 = new CBlock(812,490,25,25);

    hero = new Hero(300,400,130,130);
    monster = new Monster(1200,200,300,330);
    sling = new Fly(hero.body,{x:300,y:400});
}

function draw(){
    background(bgImage);
    Engine.update(engine);
        
    
    
    //ground2.display();
    hero.display();
    monster.display();
    c1.display();
    c2.display();
    c3.display();
    
    for(var i = 0;i<cbs.length;i++){
        cbs[i].display();
    }
    push();
    imageMode(CENTER);
    //image(h1,monster.body.position.x-140,monster.body.position.y-100,30,30);
    //image(h2,monster.body.position.x-110,monster.body.position.y-100,30,30);
    //image(h3,monster.body.position.x-80,monster.body.position.y-100,30,30);
    //image(h4,monster.body.position.x-50,monster.body.position.y-100,30,30);
    //image(h5,monster.body.position.x-20,monster.body.position.y-100,30,30);
    pop();
    
}

	


function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if((keyCode === 32&&hero.body.speed<3)||(hero.body.position.x>1600||hero.body.position.x<0||hero.body.position.y<0||hero.body.position.y>800)){
        Matter.Body.setPosition(hero.body,{x:300,y:400});
        sling.attach(hero.body);
    }
}
