let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("hello", 5, 22) ;
      break ;

      case 1:
       text("I miss you", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      text("what is new with you?", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("yayyyy!", 5, 22) ;
            // put a picture here
      break ;


  }

}
