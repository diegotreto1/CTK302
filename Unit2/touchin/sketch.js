let img1, img2, img3;
let numberOfTouches;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch (numberOfTouches) {
    case 0:
      text("hey there", 5, 22);
      break;

    case 1:
      text("i think my tv broke", 5, 22);
      // put a picture here
      img1 = loadImage("assets/desync.png");
      break;

    case 2:
      text("can you fix it?", 5, 22);
      // put a picture here
      img1 = loadImage("assets/velvetdesync.png");
      break;

    case 3:
      text("thankyou!", 5, 22);
      // put a picture here
      img1 = loadImage("assets/feedback.png");
      break;


}
}
