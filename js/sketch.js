let x, y, Xadder, Yadder;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("p5container");
    x = width/2;
    y = height/2;
    adder = 1;
}

function draw() {
    background(220);
    circle(x ,y ,50, 50);
    x = x + Xadder;
    if (x > width || x < 0){
        Xadder *= -1;
    }

    y = y + Yadder;
    if (y > height || y < 0){
        Yadder *= -1;
    }
}