let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

ctx.strokeStyle = "#f00";

ctx.moveTo(0, 0);
ctx.lineTo(100, 0);
ctx.lineTo(100, 100);
ctx.lineTo(0, 100);
ctx.lineTo(0, 0);

ctx.stroke();
