canvas=document.getElementById("paint");
ctx= canvas.getContext("2d");
var mouseEvent="empty";
var color = "";
var width = "";
var last_x,last_y;

canvas.addEventListener("mousedown", mousedown_1); 
function mousedown_1(e)
{   
    color = document.getElementById("color");
    width = document.getElementById("width");
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave" , mouseleave_1);
function mouseleave_1 (e)
{
    mouseEvent = "mouseleave";

}

canvas.addEventListener("mouseup" , mouseup_1);
function mouseup_1 (e)
{
    color = document.getElementById("color");
    width = document.getElementById("width");
    mouseEvent = "mouseup";

}

canvas.addEventListener("mousemove" , mousemove_1);
function mousemove_1 (e)
{
   current_x= e.clientX - canvas.offsetLeft;
   current_y= e.clientY - canvas.offsetTop;

   if (mouseEvent == "mouseDown")
   {
       ctx.beginPath();
       ctx.strokeStyle =document.getElementById("color") ;
       ctx.lineWidth = document.getElementById("width") ;
       ctx.arc(current_x,current_y, 20, 0, 2 * Math.PI)
       ctx.stroke();

       console.log("Last position of x and y coordinates = ")
       console.log("x = " + last_x + "y = " + last_y);
       ctx.moveTo(last_x , last_y);

       console.log("Current position of x and y coordinates = ")
       console.log("x = " + current_x + "y = " + current_y);
       ctx.lineTo(current_x , current_y);
       ctx.stroke();
   }

       last_x = current_x;
       last_y = current_y;
}

