let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let canvasXCenter = canvas.width / 2;
let canvasYCenter = canvas.height / 2;
ctx.strokeStyle = "#00f";
ctx.fillStyle = "#00f";
ctx.textAlign = "center";
let radius = 50
ctx.font = `${radius / 2.5}px Arial`;
let margin = radius * 1.1
let level = radius * 2 + margin
function drawCircle(x, y, name) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillText(name , x , y + 5 , 20)
}

function drawLine(x1, y1, x2, y2) {
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}


drawLine(canvasXCenter, level * 1 + radius, canvasXCenter - margin * 3, level * 2 - radius); //A
drawLine(canvasXCenter, level * 1 + radius, canvasXCenter - margin, level * 2 - radius); //B
drawLine(canvasXCenter, level * 1 + radius, canvasXCenter + margin, level * 2 - radius); //C
drawLine(canvasXCenter, level * 1 + radius, canvasXCenter + margin * 3, level * 2 - radius); //D
drawLine(canvasXCenter - margin , level * 2 + radius , canvasXCenter - margin, level * 3 - radius); //O


drawCircle(canvasXCenter, level * 1 , "X"); //X
drawCircle(canvasXCenter - margin * 3 , level * 2 , "A") //A
drawCircle(canvasXCenter - margin, level * 2 , "B"); //B
drawCircle(canvasXCenter + margin, level * 2 , "C"); //C
drawCircle(canvasXCenter + margin * 3, level * 2 , "D"); //D
drawCircle(canvasXCenter - margin, level * 3 , "O"); //O




