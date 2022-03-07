
debugger;
function getRandomTextColor() {
  let colorcode = "#" + Math.floor(Math.random()*16777215).toString(16);
  const element = document.getElementById('changeColor');
  element.style.color = colorcode;
  console.log(colorcode);
}

setInterval(getRandomTextColor, 5000);

