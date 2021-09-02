let img1, img2, img3 ;


function setup() {
  createCanvas(500, 500);
  img1 = loadImage("assets/artstudio.jpg") ;
  img2 = loadImage("assets/elektron.jpg") ;
  img3 = loadImage("assets/skatepark.jpg") ;
  imageMode(CENTER) ;
}

function draw() {
background('green') ;
image(img1, width/2, height/2, 100, 100) ;
image(img2, width/2, height/2-120, 100,100) ;
image(img3, width/2, height/2+120, 100, 100) ;
}
