

function renderShape() {
  var canvas = document.getElementsByClassName('canvas');
  var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');
  var sides = 0;

}

function runGame() {
  renderShape();
  window.requestAnimationFrame(runGame);
}


//Shape Drawing
//pointX[i] = ( sin( i / n * 2 * PI ) * radius ) + xOffset;
//pointY[i] = ( cos( i / n * 2 * PI ) * radius ) + yOffset;
