let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let canvasXCenter = canvas.width / 2;
let canvasYCenter = canvas.height / 2;
ctx.strokeStyle = "#00f";

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawLine(x1, y1, x2, y2) {
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

drawCircle(canvasXCenter, 100);
drawLine(canvasXCenter, 100 + 50, canvasXCenter, 250 - 50);
drawLine(canvasXCenter, 100 + 50, canvasXCenter + 120, 250 - 50);
drawLine(canvasXCenter, 100 + 50, canvasXCenter - 120, 250 - 50);
drawCircle(canvasXCenter, 250);
drawCircle(canvasXCenter + 120, 250);
drawCircle(canvasXCenter - 120, 250);
