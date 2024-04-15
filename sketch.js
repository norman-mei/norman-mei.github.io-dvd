function setup() {
  createCanvas(400, 400);
  dvdLogo = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8j2ZvogClZN_eBG7qKeZUCcHweqjjsulAsOGOzKvhkQ2iEEzF');
}

let x = 100;
let y = 100;
let xSpeed = 3;
let ySpeed = 3;
let colors = [[255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0], [255, 0, 255], [0, 255, 255]];
let currentColor = 0;


function draw() {
  background(220);
  fill(colors[currentColor][0], colors[currentColor][1], colors[currentColor][2]);
  image(dvdLogo, x, y, 80, 60);

  x += xSpeed;
  y += ySpeed;

  if (x <= 0 || x >= width - 80) {
    xSpeed *= -1;
    currentColor = (currentColor + 1) % colors.length;
  }
  if (y <= 0 || y >= height - 60) {
    ySpeed *= -1;
    currentColor = (currentColor + 1) % colors.length;
  }

  if ((x <= 0 && y <= 0) || (x >= width - 80 && y <= 0) || (x <= 0 && y >= height - 60) || (x >= width - 80 && y >= height - 60)) {
    noLoop();

    textSize(32);
    text('Congratulations!', 100, height / 2);
  }
}
