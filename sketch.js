 var bgImg1, bg;
 var form;

 function preload(){
   bgImg1 = loadImage("images/start.png");

 }


function setup() {
  createCanvas(displayWidth, displayHeight);
  form = new Form();
  

}

function draw() {
  background(bgImg1); 
  form.display(); 
  drawSprites();
}