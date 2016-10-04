var x=100;
var y=150;
var speed = 5;
var c;
var rSlider, gSlider, bSlider;

function setup() {
createCanvas(windowWidth,windowHeight);
c= color(10,255,150);

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);
  text("red", 165, 35);
  text("green", 165, 65);
  text("blue", 165, 95);

    text("X coordinate is:" + x,20,20);
    
noStroke();
fill(c);


 
ellipse(x,y,50,mouseX);
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

function keyPressed() {if (key === 'a') {
    c = 255;
    console.log("a");
  } else {
    c = 255;
  }
}

