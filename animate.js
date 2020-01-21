
function sidesRandom() {
  var min = Math.ceil(7);
  var max = Math.floor(3);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function InitializeShape() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  var SHAPE = {
    initialized : true,
      Xcenter : 0,
      Ycenter : 0,
      sides : 0,
      size : 0,
      color :
  };
  switch (SPACE_SHIP.color) {
    case 3:
      context.strokeStyle = 'green';
      break;
    case 2:
      context.strokeStyle = 'blue';
      break;
    case 1:
      context.strokeStyle = 'orange';
      break;
    case 0:
      context.strokeStyle = 'red';
      break;
    default:
      context.strokeStyle = 'white';
      break;
  }
}

function renderShape() {
  var canvas = document.getElementsByClassName('canvas');
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
    SHAPE.sides = sidesRandom();
    SHAPE.size = 20,
    SHAPE.Xcenter = 25,
    SHAPE.Ycenter = 25;

context.beginPath();
context.moveTo (SHAPE.Xcenter +  SHAPE.size * Math.cos(0), SHAPE.Ycenter +  SHAPE.size *  Math.sin(0));

for (var i = 1; i <= SHAPE.sides;i += 1) {
    context.lineTo (SHAPE.Xcenter + SHAPE.size * Math.cos(i * 2 * Math.PI / SHAPE.sides), SHAPE.Ycenter + SHAPE.size * Math.sin(i * 2 * Math.PI / SHAPE>sides));
}

context.strokeStyle = "#000000";
context.lineWidth = 1;
context.stroke();
}

function runGame() {
  initializeShape();
  window.requestAnimationFrame(runGame);
}


//Shape Drawing
//pointX[i] = ( sin( i / n * 2 * PI ) * radius ) + xOffset;
//pointY[i] = ( cos( i / n * 2 * PI ) * radius ) + yOffset;
