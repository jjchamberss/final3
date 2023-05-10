
y=0;setup=_=>{createCanvas(w=1424,w);h=w/9;q=w/2}
draw=_=>{if(y<w)for(x=w;x--;line(x,y,x,y+l))stroke(l=f((x-h)/q,(y-h)/q),l*2,l*4)
y++}
f=(x,y,n=4)=>n?f(cos(3*x)-sin(4*y),x*x-y*y-2*x*y,n-1):(x-y)**2*24

document.body.style.backgroundColor = "black";
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);

  }