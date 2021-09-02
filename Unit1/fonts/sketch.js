var f1 ;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/Nowharehouse.ttf") ;
}

function draw() {
background('yellow')
  textFont(f1) ;
  textSize(48) ;
  text('hello world', 100, 100) ;
  textSize(28) ;
  text('hello world', 50, 50) ;


}
