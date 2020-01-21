// This should make the colors on the page go haywire!
// Lets go for a ride!
var goingForARide = false;
function byte2Hex(n)
 {
   var nybHexString = "0123456789ABCDEF";
   return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
 }

function RGB2Color(r,g,b)
{
  return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
}

function RGBA2Color(r,g,b, a)
{
  return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ',' + a + ')';
}

  function makeColorGradient(frequency1, frequency2, frequency3,
                              phase1, phase2, phase3,
                              center, width, len)
   {
     if (center == undefined)   center = 128;
     if (width == undefined)    width = 127;
     if (len == undefined)      len = 50;
      var red = Math.sin(frequency1 + phase1) * width + center;
      var grn = Math.sin(frequency2 + phase2) * width + center;
      var blu = Math.sin(frequency3 + phase3) * width + center;
      //console.log(red, grn,blu);
      if (goingForARide) {
        document.getElementById('colorMeSilly').style.backgroundColor =  RGB2Color(red,grn,blu);
        document.getElementById('mainPageTitle').style.color =  RGB2Color(red,grn,blu);
        document.body.getElementsByClassName('qwerty')[0].style.backgroundColor = RGBA2Color(red,grn,blu,0.2);
      }
      //       box-shadow: inset 0 0 30px;
   }

   var frequency = 0.3;
   var frequency2 = 0.7;
   var frequency3 = 1.2;
function trip() {
  setTimeout(function() {
    makeColorGradient(frequency3,frequency2,frequency,0,2,4);
    frequency += 0.3;
    frequency2 += 0.2;
    frequency3 += 0.1;
    trip();
  }, 30);
}

function startTheTrip() {
  if(goingForARide) {
    goingForARide = false;
  } else {
    goingForARide = true;
  }
}

trip();
