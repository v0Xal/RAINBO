var red = 0;
var orange = 0;
var yellow = 0;
var green = 0;
var blue = 0;
var purple = 0;
var pink = 0;

var pressPower = 1;




function redPlus(){
  if (red >= 100){
    document.getElementById("orangeappear").style.display = "block";
    document.getElementById("redup").innerHTML = red / 100;
  }
  red += pressPower;
  document.getElementById("red").innerHTML = red;
}

function redUp(){
  if (red >= 100){
    orange += red/100;
    red *= 0;
    document.getElementById("redup").innerHTML = 0;
    document.getElementById("orange").innerHTML = orange;
    document.getElementById("red").innerHTML = red;
  }
}


var last = Date.now()
var goal = last + 1000;
var last1 = Date.now()
var goal1 = last + 1000;

function refresh () {
  last1 = Date.now();
  if (last1 >= goal1) {
    goal1 = goal1 + 50;
    //under
    if (red >= 100){
      document.getElementById("orangeappear").style.display = "block";
      document.getElementById("redup").innerHTML = red/100;
    }
    document.getElementById("orange").innerHTML = orange;
    document.getElementById("red").innerHTML = red;
  }
}
setInterval(refresh, 50);


function gameLoop () {
  last = Date.now();
  if (last >= goal) {
    goal = goal + 1000;
    //under
    red += orange
  }
}
setInterval(gameLoop, 1000);
