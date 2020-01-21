
var CHILD  = {
  x : 0,
  y : 0,
  angle : 0
};

var SHAPECHILDREN = {
  children : [],
  maxDirectionAngle : 360,
  spawnDistance : {
    xMin : 50,
    xMax : 100,
    yMin : 50,
    yMax : 100
  },
  baseSpeed : 5
}

function AddChild(size) {
  // Generate asteroid location
  var locationXY = GetNewChildLocation();
  var direction = GetNewChildDirection();

  // Add asteroid
  SHAPECHILDREN.children.push(
    {
      x : locationXY[0],
      y : locationXY[1],
      angle : direction,
      size : size,
      snap : false
    }
  );
}

function GetNewChildLocation(){
  return [250,250];
}

function GetNewChildDirection() {
  return Math.floor(Math.random() * Math.floor(SHAPECHILDREN.maxDirectionAngle));
}

function drawShapeChild(child, sides, context) {
  var sides = sideNum;
  var size = 20;
  var xcenter = child.x;
  var ycenter = child.y;

  context.beginPath();
  context.moveTo(xcenter + size * Math.cos(0), ycenter + size * Math.sin(0));

  for (var i = 1; i <= sides; i += 1) {
    context.lineTo (xcenter + size * Math.cos(i * 2 * Math.PI / sides), ycenter + size * Math.sin(i * 2 * Math.PI / sides));
  }
  context.stroke();
  context.fill();
}

function RenderChildren(context) {
  // This function is run for each asteroid
  SHAPECHILDREN.children.forEach(
    function(child, index, object) {
        context.moveTo(child.x, child.y);
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        drawShapeChild(child, sideNum, context);
  });
}
