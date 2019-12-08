var red = 0;
var orange = 0;
var yellow = 0;
var green = 0;
var blue = 0;
var purple = 0;
var pink = 0;

var pressPower = 1;
var unlocked = 0;




function redPlus(){
  red += pressPower;
  document.getElementById("red").innerHTML = red;
}

function redUp(){
  if (red >= 100){
    orange += Math.floor(red/100);
    red %= 100;
    document.getElementById("redup").innerHTML = 0;
    document.getElementById("orange").innerHTML = orange;
    document.getElementById("red").innerHTML = red;
  }
}
function orangeUp(){
  if (orange >= 100){
    yellow += Math.floor(orange/100);
    orange %= 100;
    document.getElementById("orangeup").innerHTML = 0;
    document.getElementById("orange").innerHTML = orange;
    document.getElementById("yellow").innerHTML = yellow;
  }
}
function yellowUp(){
  if (yellow >= 100){
    green += Math.floor(yellow/100);
    yellow %= 100;
    document.getElementById("orangeup").innerHTML = 0;
    document.getElementById("yellow").innerHTML = yellow;
    document.getElementById("green").innerHTML = green;
  }
}
function greenUp(){
  if (green >= 100){
    blue += Math.floor(green/100);
    green %= 100;
    document.getElementById("greenup").innerHTML = 0;
    document.getElementById("blue").innerHTML = blue;
    document.getElementById("green").innerHTML = green;
  }
}
function blueUp(){
  if (blue >= 100){
    purple += Math.floor(blue/100);
    blue %= 100;
    document.getElementById("greenup").innerHTML = 0;
    document.getElementById("blue").innerHTML = blue;
    document.getElementById("purple").innerHTML = purple;
  }
}
function purpleUp(){
  if (purple >= 100){
    pink += Math.floor(purple/100);
    red = 0;
    orange = 0;
    yellow = 0;
    green = 0;
    blue = 0;
    purple = 0;
document.getElementById("pink").innerHTML = pink;
document.getElementById("orangebox").style.display = "none";
document.getElementById("yellowbox").style.display = "none";
document.getElementById("greenbox").style.display = "none";
document.getElementById("bluebox").style.display = "none";
document.getElementById("purplebox").style.display = "none";
document.getElementById("redup").innerHTML = 0;
document.getElementById("orangeup").innerHTML = 0;
document.getElementById("yellowup").innerHTML = 0;
document.getElementById("greenup").innerHTML = 0;
document.getElementById("blueup").innerHTML = 0;
document.getElementById("purpleup").innerHTML = 0;
  }
}


var last = Date.now()
var goal = last + 1000;
var last1 = Date.now()
var goal1 = last + 50;

function refresh () {
  last1 = Date.now();
  if (last1 >= goal1) {
    goal1 = goal1 + 50;
    //under
    if (red >= 100){
      document.getElementById("orangebox").style.display = "block";
      document.getElementById("redup").innerHTML = Math.floor(red/100);
    }
    if (orange >= 100) {
        document.getElementById("yellowbox").style.display = "block";
      document.getElementById("orangeup").innerHTML = Math.floor(orange/100);
    }
    if (yellow >= 100) {
        document.getElementById("greenbox").style.display = "block";
      document.getElementById("yellowup").innerHTML = Math.floor(yellow/100);
    }
    if (green >= 100) {
        document.getElementById("bluebox").style.display = "block";
      document.getElementById("greenup").innerHTML = Math.floor(green/100);
    }
    if (blue >= 100) {
        document.getElementById("purplebox").style.display = "block";
      document.getElementById("blueup").innerHTML = Math.floor(blue/100);
    }
    if (purple >= 100) {
      document.getElementById("purpleup").innerHTML = Math.floor(purple/100);
    }

    document.getElementById("red").innerHTML = red;
    document.getElementById("orange").innerHTML = orange;
    document.getElementById("yellow").innerHTML = yellow;
    document.getElementById("green").innerHTML = green;
    document.getElementById("blue").innerHTML = blue;
    document.getElementById("purple").innerHTML = purple;
    document.getElementById("pink").innerHTML = pink;
  }
}
setInterval(refresh, 50);


function gameLoop () {
  last = Date.now();
  if (last >= goal) {
    goal = goal + 1000;
    //under
    red += orange;
    orange += yellow;
    yellow += green;
    green += blue;
    blue += purple;
  }
}
setInterval(gameLoop, 1000);
