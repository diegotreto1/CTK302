let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
      background('white');
      text("why did the chicken \ncross the road", 100, 100);
      break;

    case 1:
      background('yellow');
      text("to get to the other side", 100, 100);

      break;
  }
}

  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state++;
    if (state > 1) state = 0;

  }



  function mouseReleased() {
    state++;
    if (state > 1) {
      state = 0;
    }
  }
