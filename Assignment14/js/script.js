var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cty = c.getContext("2d");

// red box
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(50, 100);
ctx.lineTo(75, 200);
ctx.closePath();
ctx.fillStyle = 'brown';
ctx.fill();
ctx.stroke();

// red box
ctx.beginPath();
ctx.moveTo(60, 200);
ctx.lineTo(100, 25);
ctx.lineTo(160, 200);
ctx.closePath();
ctx.fillStyle = 'brown';
ctx.fill();
ctx.stroke();

//tree 1
ctx.beginPath();
ctx.moveTo(0,200);
ctx.lineTo(5,200);
ctx.lineTo(5,150);
ctx.lineTo(0,150);
ctx.fillStyle = 'green';
ctx.fill();


//tree 5
ctx.beginPath();
ctx.moveTo(160,200);
ctx.lineTo(165,200);
ctx.lineTo(165,125);
ctx.lineTo(160,125);
ctx.fillStyle = 'green';
ctx.fill();