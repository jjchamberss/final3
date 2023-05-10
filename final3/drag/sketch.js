let w, L, c, o, m, e, t, O, y, s, k, h, b, star, ass;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    //as long as you add the class "dragme" to the image, it should work.

    w = createImg('images/w.png')
    w.position(0, 0);
    w.class('dragme')

    e = createImg('images/e.png')
    e.position(50, 0);
    e.class('dragme')

    L = createImg('images/L.png')
    L.position(150, 0);
    L.class('dragme')

    c = createImg('images/c.png')
    c.position(200, 100);
    c.class('dragme')


    o = createImg('images/o.png')
    o.position(300, 70);
    o.class('dragme')

    m= createImg('images/m.png')
    m.position(400, 10);
    m.class('dragme')

    e= createImg('images/e.png')
    e.position(500, 50);
    e.class('dragme')

    t= createImg('images/t.png')
    t.position(750, 50);
    t.class('dragme')
    
    O= createImg('images/O.png')
    O.position(800, 0);
    O.class('dragme')

    m= createImg('images/m.png')
    m.position(1100, 50);
    m.class('dragme')

    y= createImg('images/y.png')
    y.position(1200, 70);
    y.class('dragme')

    s= createImg('images/sbubble.png')
    s.position(100, 400);
    s.class('dragme')

    k= createImg('images/kbubble.png')
    k.position(220, 400);
    k.class('dragme')

    e= createImg('images/ebubble.png')
    e.position(340, 400);
    e.class('dragme')

    t= createImg('images/tbubble.png')
    t.position(460, 400);
    t.class('dragme')

    c= createImg('images/cbubble.png')
    c.position(580, 400);
    c.class('dragme')

    h= createImg('images/hbubble.png')
    h.position(700, 400);
    h.class('dragme')

    b= createImg('images/bbubble.png')
    b.position(820, 400);
    b.class('dragme')

    o= createImg('images/obubble.png')
    o.position(940, 400);
    o.class('dragme')

    o= createImg('images/obubble.png')
    o.position(1060, 400);
    o.class('dragme')

    k= createImg('images/kbubble.png')
    k.position(1180, 400);
    k.class('dragme')

    star= createImg('images/star.png')
    star.position(1180, 200);
    star.class('dragme')

    star= createImg('images/star.png')
    star.position(250, 0);
    star.class('dragme')

    ass= createImg('images/ass-1.png')
    ass.position(250, 30);
    ass.class('dragme')

   
 
  }
  
  


  document.body.style.backgroundColor = "beige";
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
