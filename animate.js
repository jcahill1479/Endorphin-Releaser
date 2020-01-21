function sidesRandom() {
  var min = Math.ceil(7);
  var max = Math.floor(3);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function RandomRGBColor() {
  var r = Math.random() * 255;
  var g = Math.random() * 255;
  var b = Math.random() * 255;
  return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
}

var sideNum = 3;
function drawShape(sides) {
  var context = canvas.getContext('2d');
  var sides = sideNum;
  var size = 20;
  var xcenter = 100;
  var ycenter = 100;

  context.beginPath();
  context.moveTo(xcenter + size * Math.cos(0), ycenter + size * Math.sin(0));

  for (var i = 1; i <= sides; i += 1) {
    context.lineTo (xcenter + size * Math.cos(i * 2 * Math.PI / sides), ycenter + size * Math.sin(i * 2 * Math.PI / sides));
  }
  context.stroke();
  context.fill();
}

function renderShape() {
  sideNum = sidesRandom();
  drawShape(sideNum);
}


function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');

  if (GAME.started) {
    renderShape();
    context.clearRect(0, 0, 400, 400);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over", 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
