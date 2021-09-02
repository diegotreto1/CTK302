var f1 ;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/Nowharehouse.ttf") ;
  f2 = loadFont("assets/font1.TTF") ;
  textAlign(CENTER) ;
}

function draw() {
background('yellow')
  textFont(f1) ;
  textSize(48) ;
  text('hello world', width/2, 100) ;

textFont(f2);
  textSize(28) ;
  text('whats up', width/2, 160) ;

}
