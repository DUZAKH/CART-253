/**
 * I learn to draw pt.3
 * Kiana
 * 
 * A fish (hopefully)
 * 
 * Uses:
 * p5 
 * www.p5.js
 * 
 */

"use strict";

/** 
 * creates canvas
*/
function setup() {
    //my square canvas
    createCanvas(640,640);

}


/**
 * makes a turquoise background and makes an orange vinyl record
*/
function draw() {
    // A turquoise background
    background(48,213,200);

    //vinyl 

    //orange vinyl record
    // push to remember 
    push();
    fill(500,100,0);
    stroke(500,100,0);
    ellipse(320,320,480,480);
    //pop to restore original settings
    pop();

    //black record label
    push();
    fill(0, 0, 0);
    noStroke();
    ellipse(320, 320, 140, 140);
    pop();

    // record hole 
    push();
    fill(48,213,200);
    stroke(48,213,200);
    ellipse(320, 320, 20, 20);
    pop();
}