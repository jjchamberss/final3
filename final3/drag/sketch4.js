let flwr;
function draw() {
    background(500, 50, 10);


  }
function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    background= createImg('images/background.png')
    background.position(0, 0);
    background= createImg('images/background.png')
    background.position(470,0);
    background= createImg('images/background.png')
    background.position(940,0);
    background= createImg('images/background.png')
    background.position(1400,0);

    flwr= createImg('images/flwr.png')
    flwr.position(700, 600);
    

    flwr2= createImg('images/flwr2.png')
    flwr2.position(430, 200);
   
    flwr2= createImg('images/flwr2.png')
    flwr2.position(430, -10);

    flwr= createImg('images/flwr.png')
    flwr.position(600, 70);
   
    flwr= createImg('images/flwr.png')
    flwr.position(0, 0);

    flwr2= createImg('images/flwr2.png')
    flwr2.position(430, 400);
   
    drawing= createImg('images/draw.png')
    drawing.position(0, 50);

    drawing= createImg('images/draw.png')
    drawing.position(200, 500);
   
    flwr2= createImg('images/flwr2.png')
    flwr2.position(900, 270);
    
    drawing= createImg('images/draw.png')
    drawing.position(900, 300);


    flwr2= createImg('images/flwr2.png')
    flwr2.position(900, 600);

    t= createImg('images/t.png')
    t.position(200, 200);

    h= createImg('images/hbubble.png')
    h.position(250, 300);

    a= createImg('images/a.png')
    a.position(300, 400);

    t= createImg('images/t.png')
    t.position(320, 450);

    s= createImg('images/sbubble.png')
    s.position(400, 600);

    a= createImg('images/a.png')
    a.position(700, 450);

    L= createImg('images/L.png')
    L.position(920, 400);

    L= createImg('images/L.png')
    L.position(1200, 400);
}


