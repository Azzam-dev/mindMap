let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let canvasXCenter = canvas.width / 2;
let canvasYCenter = canvas.height / 2;
ctx.strokeStyle = "#00f";
let radius = 45
let margin = radius * 1.1
let level = radius * 2 + margin
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawLine(x1, y1, x2, y2) {
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

drawCircle(canvasXCenter, level * 1);
drawLine(canvasXCenter, level * 1 + radius, canvasXCenter + margin, level * 2 - radius); //C
drawLine(canvasXCenter, level * 1 + radius, canvasXCenter + margin * 3, level * 2 - radius); //D
drawLine(canvasXCenter, level * 1 + radius, canvasXCenter - margin, level * 2 - radius); //B
drawLine(canvasXCenter - margin , level * 2 + radius , canvasXCenter - margin, level * 3 - radius); //O
drawLine(canvasXCenter, level * 1 + radius, canvasXCenter - margin * 3, level * 2 - radius); //A


drawCircle(canvasXCenter - margin * 3 , level * 2) //A
drawCircle(canvasXCenter - margin, level * 2); //B
drawCircle(canvasXCenter + margin, level * 2); //C
drawCircle(canvasXCenter + margin * 3, level * 2); //D
drawCircle(canvasXCenter - margin, level * 3); //O