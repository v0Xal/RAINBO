//COLORS
var red = 0;
var orange = 0;
var yellow = 0;
var green = 0;
var blue = 0;
var purple = 0;
var pink = 0;

//Pink Upgrades
var pressPower = 1;
var upCost = 100;
var upCostCost = 1;
var maxPurple = 1000;



function redPlus(){
  red += pressPower;
  document.getElementById("red").innerHTML = red;
}

function redUp(){
  if (red >= upCost){
    orange += Math.floor(red/upCost);
    red %= upCost;
    document.getElementById("redup").innerHTML = 0;
    document.getElementById("orange").innerHTML = orange;
    document.getElementById("red").innerHTML = red;
  }
}
function orangeUp(){
  if (orange >= upCost){
    yellow += Math.floor(orange/upCost);
    orange %= upCost;
    document.getElementById("orangeup").innerHTML = 0;
    document.getElementById("orange").innerHTML = orange;
    document.getElementById("yellow").innerHTML = yellow;
  }
}
function yellowUp(){
  if (yellow >= upCost){
    green += Math.floor(yellow/upCost);
    yellow %= upCost;
    document.getElementById("orangeup").innerHTML = 0;
    document.getElementById("yellow").innerHTML = yellow;
    document.getElementById("green").innerHTML = green;
  }
}
function greenUp(){
  if (green >= upCost){
    blue += Math.floor(green/upCost);
    green %= upCost;
    document.getElementById("greenup").innerHTML = 0;
    document.getElementById("blue").innerHTML = blue;
    document.getElementById("green").innerHTML = green;
  }
}
function blueUp(){
  if (blue >= upCost){
    purple += Math.floor(blue/upCost);
    blue %= upCost;
    document.getElementById("greenup").innerHTML = 0;
    document.getElementById("blue").innerHTML = blue;
    document.getElementById("purple").innerHTML = purple;
  }
}
function purpleUp(){
  if (purple >= upCost){
    pink += Math.floor(purple/upCost);
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

function upCostUp () {
  if (upCost > 10) {
    if (pink >= upCostCost) {
      upCost -= 10;
      upCostCost *= 10;
    }
  }
}
function goToUpgrades () {
  document.getElementById("main").style.display = "none";
  document.getElementById("pinkupgrade").style.display = "block";
}
//CAN YOU PUSE NOW!!!




var last = Date.now()
var goal = last + 1000;
var last1 = Date.now()
var goal1 = last + 50;

function refresh () {
  last1 = Date.now();
  if (last1 >= goal1) {
    goal1 = goal1 + 50;
    if (purple > maxPurple){
      purple = maxPurple;
    }
    //CostShow
    if (red >= upCost){
      document.getElementById("orangebox").style.display = "block";
    }
    if (orange >= upCost) {
        document.getElementById("yellowbox").style.display = "block";

    }
    if (yellow >= upCost) {
        document.getElementById("greenbox").style.display = "block";

    }
    if (green >= upCost) {
        document.getElementById("bluebox").style.display = "block";

    }
    if (blue >= upCost) {
        document.getElementById("purplebox").style.display = "block";
      document.getElementById("blueup").innerHTML = Math.floor(blue/upCost);
    }
    if (purple >= upCost) {
      document.getElementById("purpleup").innerHTML = Math.floor(purple/upCost);
    }
//Upgrade
    document.getElementById("redup").innerHTML = Math.floor(red/upCost);
    document.getElementById("orangeup").innerHTML = Math.floor(orange/upCost);
    document.getElementById("yellowup").innerHTML = Math.floor(yellow/upCost);
    document.getElementById("greenup").innerHTML = Math.floor(green/upCost);
    document.getElementById("blueup").innerHTML = Math.floor(blue/upCost);
    document.getElementById("purpleup").innerHTML = Math.floor(purple/upCost);
//Colors
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
