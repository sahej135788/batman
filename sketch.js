const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a=[]
var t
var b=100
var c=0
function preload(){
 t1=loadImage("images/thunderbolt/1.png") 
 t2=loadImage("images/thunderbolt/2.png")   
 t3=loadImage("images/thunderbolt/3.png")   
 t4=loadImage("images/thunderbolt/4.png")     
}

function setup(){
    createCanvas(400,700)
    engine = Engine.create();
      world = engine.world;
  
     umbrella=new Umbrella(200,500)

     if(frameCount%150===0){
     for(var i=0;i<b;i++){
     a.push(new Drop(random(0,400),random(0,400)))
     }
     }
      
    
}

function draw(){
    background(0);  
    Engine.update(engine);   
    r=Math.round(random(1,4))
    if(frameCount%80===0){
    c=frameCount
    t=createSprite(random(10,370),random(10,30),10,10)
    switch(r){
    case 1:t.addImage(t1)
    break;
    case 2:t.addImage(t2)
    break;
    case 3:t.addImage(t3)
    break;
    case 4:t.addImage(t4)
    break;
    }
    t.scale=0.5
    }
    if(c+10===frameCount&&t){
    t.destroy()
    }
    umbrella.display()
    for(var i=0;i<b;i++){
    a[i].showdrop()
    a[i].update()
    }
    drawSprites()
}   

