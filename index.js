let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let canvasCenter = canvas.width / 2;
ctx.strokeStyle = "#00f";




function drawCircle() {
    ctx.beginPath();
    ctx.arc(canvasCenter, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();

}

function drawLine() {
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 0);
    ctx.stroke();
}

function drawSquare() {
    ctx.moveTo(1, 0);
    ctx.lineTo(100, 0);
    ctx.lineTo(100, 100);
    ctx.lineTo(0, 100);
    ctx.lineTo(0, 0);
    ctx.stroke();

}


drawCircle();
drawLine();
