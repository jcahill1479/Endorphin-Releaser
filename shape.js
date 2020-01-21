
function drawShape(sides) {
  var context = canvas.getContext('2d');
  var sides = sideNum;
  var size = 50;
  var xcenter = 250;
  var ycenter = 250;

  context.beginPath();
  context.moveTo(xcenter + size * Math.cos(0), ycenter + size * Math.sin(0));

  for (var i = 1; i <= sides; i += 1) {
    context.lineTo (xcenter + size * Math.cos(i * 2 * Math.PI / sides), ycenter + size * Math.sin(i * 2 * Math.PI / sides));
  }
  context.stroke();
  context.fill();
}

function sidesRandom() {

  return Math.trunc(Math.random()*5)+3;
}

function RandomRGBColor() {
  var r = Math.random() * 255;
  var g = Math.random() * 255;
  var b = Math.random() * 255;
  return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
}
