var canvas = document.getElementById('mainCanvas');
//okay you need to have an array of these shape objects that you loop through every frame during some handleanimation function and draw each of them with all their characteristics each time. also your shapes dont appear except the very first one when drawing. this is estremely strange. you MUST use the debugger to figure out why this is happening. i suspect it might be because youre not using some close function when youre done drawing? but i really dont have time to figure it out.
function handleChildAnimation() {
  SHAPECHILDREN.children.forEach(function(child, index, object) {

    var radians = (Math.PI / 180) * child.angle,
      cos = Math.cos(radians),
      sin = Math.sin(radians);
    child.x += SHAPECHILDREN.baseSpeed * sin;
    child.y += SHAPECHILDREN.baseSpeed * cos;
    /*
              if (CHILD.x > GAME.canvas.width) {
                SHAPECHILDREN.snap = true;
              } else if (CHILD.x < 0) {
                SHAPECHILDREN.snap = true;
              } else if (CHILD.y > GAME.canvas.height) {
                SHAPECHILDREN.snap = true;
              } else if (CHILD.y < 0) {
                SHAPECHILDREN.snap = true;
              }
*/
  });
};
var score = 0;
var sideNum = 3;
var timer = 0;
var counter = 0;
var counterThing = 0;
var timesPerSec = 0;

function renderShape(context) {
  drawShape(sideNum);
}



function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');

  if (GAME.started) {
    counter++;
    counterThing++;
    context.font = "25px Arial";
    context.clearRect(0, 0, 500, 500);
    if (counter == 135) {
      timer++;
      counter = 0;
    }
    if (counterThing == 134) {
      timesPerSec = 0;
      if (timesPerSec < 5) {
        multiplier = 1;
      }
    }
    context.fillText("Time: " + Math.trunc(timer), 35, 450);
    renderShape(context);
    RenderChildren(context);
    handleChildAnimation();
    context.fillText("Score: " + score, 35, 50);

  }
  if (timer > 60) {
    context.font = "30px Arial";
    context.fillText("Game Over", 135, 200);
    GAME.started = false;
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
