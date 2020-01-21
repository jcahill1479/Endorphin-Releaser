var canvas = document.getElementById('mainCanvas');
    context = canvas.getContext('2d'),

canvas.addEventListener('click', function(event) {
  //generateShapeChildren();
}

//function generateShapeChildren(){}

function handleAsteroidAnimation() {
    ASTEROIDS.asteroids.forEach(function(asteroid, index, object) {

          var radians = (Math.PI / 180) * asteroid.angle,
              cos = Math.cos(radians),
              sin = Math.sin(radians);
          CHILD.x += ASTEROIDS.baseSpeed * sin;
          CHILD.y +=  ASTEROIDS.baseSpeed * cos;
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
  size = 3;
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
  return [100,100];
}

function GetNewChildDirection() {
  return Math.floor(Math.random() * Math.floor(SHAPECHILDREN.maxDirectionAngle));
}

function RenderAsteroids(context) {
  // This function is run for each asteroid
  ASTEROIDS.asteroids.forEach(
    function(asteroid, index, object) {
        context.moveTo(asteroid.x, asteroid.y);
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.strokeRect(asteroid.x, asteroid.y, 10, 10);
  });
}
