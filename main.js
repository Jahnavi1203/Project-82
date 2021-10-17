
canvas = document.getElementById("myCanvas"); 
ctx = canvas.getContext("2d"); 

var mouse_event = "empty"; 

var  last_position_of_x , last_position_of_y; 
    color = "Black"; 
    Width_of_line = 2; 
    radius = 10; 
   


    canvas.addEventListener("mousedown" , myMousedonw); 

    function myMousedonw(e){ 
        color = document.getElementById("color").value; 
        Width_of_line = document.getElementById("line").value; 
        radius = document.getElementById("radius").value;

        mouse_event = "mousedown" 

    } 

    canvas.addEventListener("mouseup", myMouseup); 

    function myMouseup(e) { 
    mouse_event = "mouseup"; 
    } 

    canvas.addEventListener("mouseleave", myMouseleave); 

    function myMouseleave(e) { 
    mouse_event = "mouseleave"; 

    }      

    function clear_area(){ 
        ctx.clearRect(0,0, canvas.width, canvas.height); 
    } 

    canvas.addEventListener("mousemove", myMouseMove); 
    
    function myMouseMove(e) {

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown") {
    console.log("Current position of x and y corrdinates = ");
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = Width_of_line;
    ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y, radius , 0 , 2 * Math.PI );
    ctx.stroke();    
    }
}
   
 
 
 

