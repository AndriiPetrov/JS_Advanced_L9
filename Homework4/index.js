// var canvas = document.getElementsByTagName("canvas")[0];
// var context = canvas.getContext("2d");

// context.save();
// context.translate(100, 100);

// context.beginPath();
var Module = {};

Module.array = [];

Module.barChart = function (canvas, width, height, color) {

    if (typeof canvas == "string")
        canvas = document.getElementById(canvas);

    var data = Module.array;
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext("2d");

    var max = Number.NEGATIVE_INFINITY;

    for (var i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
    }

    var scale = height / max;
    var barWidth = Math.floor(width / data.length);

    for (var i = 0; i < data.length; i++) {
        var barHeight = data[i] * scale,
            x = barWidth * i,
            y = height - barHeight;

        context.fillStyle = color;
        context.fillRect(x, y, barWidth - 2, barHeight);
    }
}
Module.array = [30, 6, 88, 91, 2, 45, 100, 150, 200];
window.onload = function () {
    Module.barChart("barChart", 800, 400, "red");
}