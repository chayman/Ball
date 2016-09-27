var x=100;
var y=100;
var speed = 5;
var c;

function setup() {
createCanvas(windowWidth,windowHeight);
c= color(10,255,150);
}

function draw() {
  background(255);
  fill(0);
  noStroke();
    text("X coordinate is:" + x,20,20);
    
noStroke();
fill(c);


 
ellipse(x,y,50,50);
if(x >= width-25){
 speed = -speed;

 c=color(random(255),random(255),random(255));
}
if (x<=25){
  speed = -speed
   c=color(random(255),random(255),random(255));

}
x = x + speed;
}

