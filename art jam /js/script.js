/**
 * Shear the Sheep 
 * Kiana Rezaee
 * 
 * did you know sheep cannot shed their own fur? 
 * shepherd's are a neccessity to their survival 
 * take care of Sheep, you can shave him by touching his fur circles!
 */

"use strict";


// makes a sheep body variable and gives it velocity and acceleration
//this allows the sheep to speed up over time
let sheep ={
    x: 20,
    y:340,
    w:100,
    h:80,

    // the base sheep velocity
    velocity: {
        x: 0,
        y: 0,
    },
    //its minimum velocity
    minVelocity: {
        x:-3,
        y:0
    },
    //its maximum velocity
    maxVelocity:{
        x: 3,
        y: 0,
    },
    acceleration:{
        x: 0.025,
        y:0
    }
};


let fur= {
//the white fur color
    r: 0,
    g: 0,
    b: 100,

////not working yet but it will be how the fur falls off
//fallVelocity: {
   //x:0,
   // y:0,
//},

//minFallVelocity:{
    //x:0,
    //y:-3,
//},

//maxFallVelocity:{
    //x:0,
    //y:0.025
//},


// each individual fur circle is a variable ellipse so it can be "shaved" off
firstEllipse: { 
     x: 20, 
     y: 10, 
     w: 40,}, 
secondEllipse: {
     x: 50, 
     y: 10, 
     w: 40, },
thirdEllipse: { 
    x: 80, 
    y: 10, 
    w: 40, },
fourthEllipse: {
     x: 100, 
     y: 10, 
     w: 40, },
fifthEllipse: {
     x: 20,
     y: 70,
     w: 40, },
sixthEllipse: {
     x: 50, 
     y: 70, 
     w: 40, },
seventhEllipse: {
     x: 80, 
     y: 70, 
     w: 40, },
    };

/**
 * Creates the canvas, sets up color hue mode
*/
function setup() {
    //defines canvas size
    createCanvas(480, 480);

    //allows me to use hues and saturation
    colorMode(HSL)
}


 // draws a sheep on a mountain
function draw() {
    //sheep constrain position 
    sheep.x= constrain(sheep.x,20,300)

    //sheep speed increases
    sheep.velocity.x= sheep.velocity.x + sheep.acceleration.x;
    sheep.velocity.y= sheep.velocity.y + sheep.acceleration.y;

    sheep.velocity.x = constrain(sheep.velocity.x, sheep.minVelocity.x, sheep.maxVelocity.x);
    sheep.velocity.y = constrain(sheep.velocity.y, sheep.minVelocity.y, sheep.maxVelocity.y);
    
    // Move the sheep  by adding its velocity in x and y
    sheep.x = sheep.x + sheep.velocity.x;
    sheep.y = sheep.y + sheep.velocity.y;
    drawSky();
    drawMountain();
    drawMountainDarkSide();
    drawGrass();
    drawSheep();
    drawFur();
}

function drawSky() {
    //background sky color 
    background(200,37,55);
}

function drawMountain (){

    //mountain in the background
    push();
    noStroke();
    fill(358,37,28);
    triangle(0,480,240,240,480,480);
    pop();
}

function drawMountainDarkSide(){
    //mountain dark side
    push();
    noStroke();
    fill(358,37,30);
    triangle(0,480,240,240,240,480);
    pop();
}

function drawGrass(){
    //grass 
    push();
    noStroke();
    fill(118,50,35);
    rect(0,400,480,300);
    pop();
}

function drawFur(){
    //sheep fur
    push();
    noStroke();
    fill(fur.r, fur.g, fur.b);
    //each individual circle is one fur ball
    ellipse(sheep.x + fur.firstEllipse.x, sheep.y + fur.firstEllipse.y, fur.firstEllipse.w);
    ellipse(sheep.x + fur.secondEllipse.x, sheep.y + fur.secondEllipse.y, fur.secondEllipse.w);
    ellipse(sheep.x + fur.thirdEllipse.x, sheep.y + fur.thirdEllipse.y, fur.thirdEllipse.w);
    ellipse(sheep.x + fur.fourthEllipse.x, sheep.y + fur.fourthEllipse.y, fur.fourthEllipse.w);
    ellipse(sheep.x + fur.fifthEllipse.x, sheep.y + fur.fifthEllipse.y, fur.fifthEllipse.w);
    ellipse(sheep.x + fur.sixthEllipse.x, sheep.y + fur.sixthEllipse.y, fur.sixthEllipse.w);
    ellipse(sheep.x + fur.seventhEllipse.x, sheep.y + fur.seventhEllipse.y, fur.seventhEllipse.w);
    pop();
}

function drawSheep(){
    //sheep body
    push();
    noStroke();
    fill(0,0,100);
    rect(sheep.x, sheep.y, sheep.w, sheep.h);
    pop();

    //sheep legs 
    push();
    noStroke();
    fill(0,0,0);
    rect(sheep.x + 0  * sheep.w/4, sheep.y + sheep.h, sheep.w/8, sheep.h/2);
    pop();

    push();
    noStroke(); 
    fill(0,0,0);
    rect(sheep.x + 1 * sheep.w/4, sheep.y + sheep.h, sheep.w/8, sheep.h/2);
    pop();

    push();
    noStroke();
    fill(0,0,0);
    rect(sheep.x + 2 * sheep.w/4, sheep.y + sheep.h, sheep.w/8, sheep.h/2);
    pop();

    push();
    noStroke();
    fill(0,0,0);
    rect(sheep.x + 3 * sheep.w/4, sheep.y + sheep.h, sheep.w/8, sheep.h/2);
    pop();

    //sheep ear
    push();
    noStroke();
    fill(0,0,0);
    rect(sheep.x + sheep.w - 7 , sheep.y, sheep.w/5, sheep.h/3)

    //sheep head
    push();
    noStroke();
    fill(0,0,0);
    rect(sheep.x + sheep.w, sheep.y, sheep.w/3, sheep.h/2);
    pop(); 

    //sheep tail
    push();
    noStroke();
    fill(0,0,100);
    rect(sheep.x -1 * sheep.w/4 , sheep.y, sheep.w/4, sheep.h/3);
    pop();
};