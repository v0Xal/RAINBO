var red;
var orange;
var yellow;
var green;
var blue;
var purple;







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
