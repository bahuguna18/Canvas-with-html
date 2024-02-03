var canvas = document.querySelector('canvas');
// console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext("2d");


//box

c.fillStyle = "yellow";     // this is for coloring box
// c.fillRect(100,400,100,100);
c.fillRect(100,100,100,100);
c.fillStyle = "rgba(0,0,255,0.4)"; 
c.fillRect(200,200,100,100);
c.fillStyle = "rgba(0,255,0,0.4)    "; 
c.fillRect(300,300,100,100);



//Line
c.beginPath();
c.moveTo(100,300);
c.strokeStyle = "red";
c.lineTo(100,100);
// c.strokeStyle = "blue";
c.lineTo(400,300);
// c.strokeStyle = "green";
c.lineTo(600,400);
   // this is for coloring line
c.stroke();


//  Arc/circle
/*
c.beginPath();  //start a new path 
c.arc(300,300,50,0,Math.PI * 2, false);
c.strokeStyle = "brown"
c.stroke();

*/

for(var i = 0;i<60 ;i++){
     x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
    z = Math.random() * 20;
    color = 'rgba(' + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ", " + 0.75 + ")"; 
    c.beginPath();
    c.arc(x, y, z, 0, Math.PI*2, false)
    c.strokeStyle = color;
    c.stroke();
}
