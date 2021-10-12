let img1, img2, img3;
let numberOfTouches;


function setup() {
  createCanvas(400, 400);


  img1 = loadImage("assets/desync.png");
  img1 = loadImage("assets/feedback.png");
  img1 = loadImage("assets/velvetdesync.png");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + 'touches', 5, 10);
  background('green');

  switch (numberOfTouches) {
    case 0:
      text("hey there", 5, 22);
      break;

    case 1:
      text("i think my tv broke", 5, 22);
      // put a picture here
      image(img1, width / 2, height / 2, 100, 100);
      break;

    case 2:
      text("can you fix it?", 5, 22);
      // put a picture here
      image(img2, width / 2, height / 2 - 120, 100, 100);
      break;

    case 3:
      text("thankyou!", 5, 22);
      // put a picture here
      image(img3, width / 2, height / 2 + 120, 100, 100);
      break;


  }
}
