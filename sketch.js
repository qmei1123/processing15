var i;
var y;
let ragged = [];
var yOne;
var yTwo;
var yThree;
var yFour;
var yFive;
var x = 0;
var y = 0;
var circle; ;
function setup() {
    createCanvas(1600, 1000);
    background(75);
    ragged = new Ragged();
    frameRate(1.5);
    circleSize = random(6);
}
        
class Ragged {
    constructor() {
    }
//    move() {
//        xOne = xOne + random(-5, 5);
//        xTwo = xTwo + random(-5, 5);
//    }
    show() {
            fill(190);
        stroke(random(100, 255));
        strokeWeight(random(2));
        beginShape();
            vertex(xOne + i, yOne + y);
            vertex(xTwo + i, yTwo + y/2);
        endShape(CLOSE);
    }
}

function draw() {
    for (x = 100 * sin(60); x < width; x += 100) {
        for (y = 50 * cos(60); y < height; y += 100) {
            noStroke();
            fill(random(51, 150));
            ellipse(x, y, 5, 5);     
            ellipse(random(x, -x), random(y, -y), circleSize, circleSize);

        //    ragged.move();
        }
    }
    
    for (i = 0; i < width; i += 100) {
        for (y = 0; y < height; y += 100) {
            xOne = 100 * sin(60);
            xTwo = random(-40, 18);
            
            yOne = 300 * cos(60);
            yTwo = random(-18, 30);
            ragged.show();
        }
    }
}


