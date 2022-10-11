x = 100 // variable one
var blueL = "#ADD8E6"; // variable two


function setup() {
    createCanvas(800,600);
    background(0, 0, 255); // color = blue

    fill(255, 204, 0); // circle is now yellow
    circle(x, 20, 30);

    stroke('#222222');
    strokeWeight(3)
    fill(blueL); // rectangle is now light blue
    rect(40, 40, 70, 70);
}