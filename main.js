canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_X,last_position_of_Y;
color="black";
width_of_line=1;

canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e)
{
    color=document.getElementById("colortext").value;
    width_of_line=document.getElementById("width").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e)
{
 current_position_of_X=e.clientX-canvas.offsetLeft;
 current_position_of_Y=e.clientY-canvas.offsetTop;
 if(mouseEvent=="mouseDown")
 {
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width_of_line;
     ctx.arc(current_position_of_X, current_position_of_Y, 20 ,0 , 2 * Math.PI);
     ctx.stroke();
 }

}