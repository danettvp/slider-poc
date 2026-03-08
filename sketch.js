
let widthSlider;
let heightSlider;
let lineSlider;

function setup() {

  createCanvas(400,400);

  widthSlider = select('#widthSlider');
  heightSlider = select('#heightSlider');
  lineSlider = select('#lineSlider');

}

function draw() {

  background(240);

  let fishWidth = widthSlider.value();
  let fishHeight = heightSlider.value();
  let lineWidth = lineSlider.value();

  translate(width/2, height/2);

  strokeWeight(lineWidth);
  stroke(0);
  fill(200,220,255);

  // body
  ellipse(0,0, fishWidth, fishHeight);

  // tail
  triangle(
    -fishWidth/2,0,
    -fishWidth/2 - fishWidth/3, -fishHeight/2,
    -fishWidth/2 - fishWidth/3, fishHeight/2
  );

  // eye
  fill(0);
  ellipse(fishWidth/4, -fishHeight/8, fishHeight/10);

}