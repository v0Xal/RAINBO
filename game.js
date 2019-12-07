var red = 0;
var orange = 0;
var yellow = 0;
var green = 0;
var blue = 0;
var purple = 0;
var pink = 0;

var pressPower = 1;




function redPlus(){
  red += pressPower;
  document.getElementById("red").innerHTML = red;
}

var last = Date.now()
var goal = last + 1000;

function gameLoop () {
  last = Date.now();
  if (last >= goal) {
    goal = goal + 1000;

    document.getElementById("red").innerHTML = red;
    overflow();
  }
}
setInterval(gameLoop, 1000);
