let ball;
let paddle;
let ballSpeedX = 5;
let ballSpeedY = 4;
let score = 0;


function setup() {
createCanvas(800, 600);

  ball = {
    x: width / 2,
    y: height / 2,
    radius: 20,
  };
  paddle = {
    x: width / 2 - 60,
    y: height - 20,
    width: 120,
    height: 15,
    speed: 10,
  };
}

function draw() {
  background(0);
  
  //Ball
  fill(255, 0, 0);
  ellipse(ball.x, ball.y, ball.radius * 2);

  //Paddle
  fill(0, 0, 255);
  rect(paddle.x, paddle.y, paddle.width, paddle.height);

  //Score
  fill(255);
  textSize(24);
  textAlign(LEFT);
  text("Score: " + score, 10, 30);

  //Ball position
  ball.x += ballSpeedX;
  ball.y += ballSpeedY;

  //Bounce
  if (ball.x < ball.radius || ball.x > width - ball.radius) {
    ballSpeedX *= -1;
  }
  if (ball.y < ball.radius) {
    ballSpeedY *= -1;
  }

  //if ball hits the paddle
  if (ball.y + ball.radius > paddle.y &&
      ball.x > paddle.x &&
      ball.x < paddle.x + paddle.width) {
    ballSpeedY *= -1;
    score++;
  }

  //if ball hits the bottom of the screen
  if (ball.y > height) {
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text('Game Over', width / 2, height / 2);
    noLoop(); // Stop game
  }

  // Control the paddle with the mouse
  paddle.x = mouseX - paddle.width / 2;

  // Control the paddle with touch
  if (touches.length > 0) {
    paddle.x = touches[0].x - paddle.width / 2;
  }

  //Paddle moving side to side at the bottom
  paddle.x = constrain(paddle.x, 0, width - paddle.width);
}
