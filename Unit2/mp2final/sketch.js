let state = 0;
let timer = 0;
let vol;
let mic;
let img1;
let img2;
let img3;
let img4;


function setup() {
  createCanvas(1080, 720);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();

  img1 = loadImage('assets/feedback.png');
  img2 = loadImage('assets/feedbackloop.png');
  img3 = loadImage('assets/fractals.png');
  img4 = loadImage('assets/bomask.png');
}


function draw() {

  switch (state) {
    case 0:
      background('black');

      image(img1, 200, 200);
      img1.resize(300, 300);
      text('Here are some designs I created! Click the image to begin!', 100, 100);
      textSize(30);
      break;

    case 1:
      background('black');
      // get the sound input
      vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1
      if (vol > .1) {
        state = 2;
      }
      image(img2, 200, 200);
      img2.resize(720, 480);
      text('I like to make video art specifically a technique called video feedback! say something to move to the next image!', 100, 100);
      textSize(30);
      break;

    case 2:
      background('green');
      timer++;
      if (timer > 8*60) {
        timer = 0;
        state = 3;
      }
      image(img3, 200, 200);
      img3.resize(720, 480);
      text('I mainly use old video mixers and current software like touchdesigner', 100, 100);
      textSize(30);
      break;

    case 3:
      background('red');
      timer++;
      if (timer > 8*60) {
        timer = 0;
        state = 0;
      }
      image(img4, 200, 200);
      img4.resize(720, 480);
      text('I have been doing this for about a year now! Thanks for checking it out!', 100, 100);
      textSize(30);
      break;

  }

  fill('white');
  text(mouseX + "," + mouseY, 15, 15);
}

function mouseReleased() {
  if ((state == 0) && (mouseX > 200) && (mouseX < 350) &&
    (mouseY > 200) && (mouseY < 350)) {
    state = 1;
  }


}

function touchStarted() {
  getAudioContext().resume();

}
