


let song
let fft
let a
let fr = 60
let layermax
let cCount = 0
function preload(){
  song = loadSound('tape proj.mp3')
}

function setup() {
  c = createCanvas(1024,1024);
  colorMode(HSL, 360, 100, 100,100)  
  fft = new p5.FFT()
  textSize(20)
	angleMode(RADIANS)
  textAlign(CENTER)
  frameRate(fr)
  a = TWO_PI/(song.duration()*60)
  layermax = floor(random(3,6))
}


function draw() {
  let spec1 = fft.analyze().reverse()
  push()
  translate(width/2,height/2)
  noFill()
	if(song.isPlaying()){
  	rotate(cCount*a)
		cCount++
	}
	if(song.isPlaying()){
  for(let i=0;i<spec1.length;i++){
    strokeWeight(0.02*spec1[i])
    stroke(360,100,80,0.05*spec1[i])
    rX = random(-20,20)
   		
			for(let layer=1;layer<layermax;layer++){
					circle(rX,(layer*i/layermax)*0.6,1)
			}
		}
  }
  pop()
  text('Play', width/2, height/2);
}


function mouseClicked(){
  if(song.isPlaying()){
    song.pause()
  }else{
		background(0,0,100)
		cCount = 0
    song.play()
  }
}

