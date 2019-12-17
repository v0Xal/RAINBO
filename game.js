//COLORS
var red = 0;
var orange = 0;
var yellow = 0;
var green = 0;
var blue = 0;
var purple = 0;
var pink = 0;

//Pink Upgrades
var clickPower = 1;
var upCost = 100;
var upCostCost = 1;
var maxPurpleCost = 10;
var maxPurple = 1000;



//AD NOTATIONS
const standard = new ADNotations.StandardNotation();
const scientific = new ADNotations.ScientificNotation();


red = localStorage.getItem('red');
orange = localStorage.getItem('orange');
yellow = localStorage.getItem('yellow');



function redPlus(){
  red += clickPower;
  document.getElementById("red").innerHTML = standard.format(red);
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
  }
}
function blueUp(){
  if (blue >= upCost){
    purple += Math.floor(blue/upCost);
    blue %= upCost;
    document.getElementById("greenup").innerHTML = 0;
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
function upClickPower(){
  if(pink >= clickPower*2) {
  pink -= clickPower * 2;
  clickPower *= 2
  }
}



function upCostUp () {
  if (upCost > 10) {
    if (pink >= upCostCost) {
      upCost -= 10;
      pink -= upCostCost;
      upCostCost *= 10;
    }
  }
}
function upMaxPurple () {
  if (pink >= maxPurpleCost) {
    maxPurple += 1000;
    pink -= maxPurpleCost;
    maxPurpleCost += 10
  }
}




function goToUpgrades () {
  document.getElementById("main").style.display = "none";
  document.getElementById("pinkupgrade").style.display = "block";
}
function goToColors (){
  document.getElementById("main").style.display = "block";
  document.getElementById("pinkupgrade").style.display = "none";
}



var last = Date.now()
var goal = last + 1000;
var last1 = Date.now()
var goal1 = last + 50;
var last2 = Date.now()
var goal2 = last + 50;

function refresh () {
  last1 = Date.now();
  if (last1 >= goal1) {
    goal1 = goal1 + 50;
    //Black Button
    if (upCost <= 10) {
      document.getElementById("upcostupgrade").style.background = "#000000";
      document.getElementById("upcostupgradecostbox").style.display = "none";
      document.getElementById("nextupcost").style.display = "none";
      document.getElementById("upcostarrow").style.display = "none";
    }else if (pink >= upCostCost) {
      document.getElementById("upcostupgrade").style.background = "#4CAF50";
    } else {
      document.getElementById("upcostupgrade").style.background = "#ff2020";
    }
      if (pink >= maxPurpleCost) {
      document.getElementById("maxpurpleupgrade").style.background = "#4CAF50";
    } else {
      document.getElementById("maxpurpleupgrade").style.background = "#ff2020";
    }
    if (pink >= clickPower * 2) {
    document.getElementById("clickpowerupgrade").style.background = "#4CAF50";
  } else {
    document.getElementById("clickpowerupgrade").style.background = "#ff2020";
  }

    //Overflow
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
    }
    if (purple >= upCost) {
      document.getElementById("purpleup").innerHTML = standard.format(Math.floor(purple/upCost));
    }
//Upgrade
    document.getElementById("redup").innerHTML = standard.format(Math.floor(red/upCost));
    document.getElementById("orangeup").innerHTML = standard.format(Math.floor(orange/upCost));
    document.getElementById("yellowup").innerHTML = standard.format(Math.floor(yellow/upCost));
    document.getElementById("greenup").innerHTML = standard.format(Math.floor(green/upCost));
    document.getElementById("blueup").innerHTML = standard.format(Math.floor(blue/upCost));
    document.getElementById("purpleup").innerHTML = standard.format(Math.floor(purple/upCost));
//Colors
    document.getElementById("red").innerHTML = standard.format(red);
    document.getElementById("orange").innerHTML = standard.format(orange);
    document.getElementById("yellow").innerHTML = standard.format(yellow);
    document.getElementById("green").innerHTML = standard.format(green);
    document.getElementById("blue").innerHTML = standard.format(blue);
    document.getElementById("purple").innerHTML = standard.format(purple);
    document.getElementById("pink").innerHTML = standard.format(pink);
    document.getElementById("pink2").innerHTML = standard.format(pink);
//Upgrades
    document.getElementById("upcostupgradecost").innerHTML = standard.format(upCostCost);
    document.getElementById("upcost").innerHTML = upCost;
    document.getElementById("nextupcost").innerHTML = upCost-10;
    document.getElementById("maxpurpleupgradecost").innerHTML = standard.format(maxPurpleCost, 2, 0);
    document.getElementById("maxpurple").innerHTML = standard.format(maxPurple);
    document.getElementById("nextmaxpurple").innerHTML = standard.format(maxPurple + 1000);
    document.getElementById("clickpowerupgradecost").innerHTML = standard.format(clickPower*2);
    document.getElementById("clickpower").innerHTML = standard.format(clickPower);
    document.getElementById("clickpowerx2").innerHTML = standard.format(clickPower * 2);
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
function autosave () {
  last2 = Date.now();
  if (last2 >= goal2) {
    goal2 = goal2 + 3000;
    //under
    window.localStorage.clear();
    window.localStorage.setItem("red",red);
    window.localStorage.setItem("orange",orange);
    window.localStorage.setItem("yellow",yellow);
    window.localStorage.setItem("green",green);
    window.localStorage.setItem("blue",blue);
    window.localStorage.setItem("purple",purple);
    window.localStorage.setItem("pink",pink);
    console.log("Cool! Saved game")
  }
}
setInterval(gameLoop, 3000);
