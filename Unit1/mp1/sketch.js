function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {

  background(100);


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    rect(200, 200, 200, 200);

  } else {
    // when the mouse isn't pressed!
    ellipse(100, 100, 100, 100)

  }



  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);

  text('Lorem ipsum or whatever \n do this to indent', 20, 20) ;

  // escape character, basically quotes ur words \ \
  //back slash n indents \n
}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
