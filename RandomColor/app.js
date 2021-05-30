// const colors = [
//   "green",
//   "red",
//   "rgba(133,122,200)",
//   "#f15025",
//   "#ff00bf",
//   "#8000ff",
//   "#0000ff",
//   "#00ff80",
//   "#808080",
// ];

var btn = document.getElementById("btn");
var color = document.querySelector(".color");

btn.addEventListener("click", function () {
  var getColor = randomColor();
  document.body.style.backgroundColor = getColor;
  color.textContent = getColor;
});

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
