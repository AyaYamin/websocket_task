var draw = false;

function yesDraw() {
    draw = true;
}

function mouseCoordinates(e) {
    if (draw) {
        var x = e.offsetX;
        var y = e.offsetY;
        drawing(x, y);
    }
}

function noDraw() {
    draw = false;
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function drawing(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
}