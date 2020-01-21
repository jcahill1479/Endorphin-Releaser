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
      color : 2
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
