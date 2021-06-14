var mouseEvent="empty";
var last_position_of_x , last_position_of_y;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="black";
width_of_line=1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    currentPositionOfMouse_x= e.clientX-canvas.offsetLeft;
    currentPositionOfMouse_y= e.clientY-canvas.offsetTop;

if (mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.line_width=width_of_line;

    console.log("last position of X and Y=");
    console.log("x="+last_position_of_x+"y="+last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("current position of X and Y=");
    console.log("x="+currentPositionOfMouse_x+"y="+currentPositionOfMouse_y);
    ctx.lineTo(currentPositionOfMouse_x, currentPositionOfMouse_y);

    ctx.stroke();
}
last_position_of_x=currentPositionOfMouse_x;
last_position_of_y=currentPositionOfMouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}