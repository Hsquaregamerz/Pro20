var BG,BGA;
var C,CA,R,RA;
var C2,R2;
var C3,R3;

function preload() {
    //load the images here
    BGA=loadImage("garden.png");
    CA=loadImage("cat1.png");
    RA=loadImage("mouse1.png");
    C2=loadAnimation("cat2.png","cat3.png");
    R2=loadAnimation("mouse2.png","mouse3.png");
    C3=loadAnimation("cat4.png");
    R3=loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    BG=createSprite(500,500);
    BG.addImage(BGA);
    C=createSprite(900,700);
    C.addImage(CA);
    C.scale=0.1;
    R=createSprite(100,700);
    R.addImage(RA);
    R.scale=0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

keyPressed();

if(C.isTouching(R)){
C.addAnimation("cat_col",C3);
C.changeAnimation("cat_col",C3);
R.addAnimation("rat_col",R3);
R.changeAnimation("rat_col",R3);
C.velocityX=0;
}

R.debug=true;

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here\
  if (keyDown("left")){
    C.velocityX=-2;
    C.addAnimation("cat_running",C2);
    C.changeAnimation("cat_running",C2);
    R.addAnimation("rat_running",R2);
    R.changeAnimation("rat_running",R2);

}



}
