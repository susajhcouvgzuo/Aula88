var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

    /*Retire a linha de comentário errada*/
    canvas.addEventListener("mousedown", my_mousedown);
    canvas.setEventListener("mousedown", my_mousedown);
    

    function mousedown(e)
    {
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "my_mouseDown";
    }

    /*
    Crie um event listener para "mousemove"
    e chame a função my_mousemove
    */

    function my_mousemove(e)
    {
        /*Retire a linha de comentário errada*/
       currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
       currentPositionOfMouseX = e.clientX - canvas.offsetRight;
       

        
        currentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        console.log("Posição atual das coordenadas x e y= ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }


    canvas.addEventListener("mouseup", my_mouseup);
    canvas.setEventListener("mouseup", my_mouseup);


    function my_mouseup (e) {

        canvas.addEventListener("mouseup", my_mouseup);
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseup";

    }
    /*Crie um event listener para "mouseup"
    e chame a function my_mouseup (e)

    

    Crie uma função chamada my_mouseup com o evento como parâmetro.
    
    Atribua "mouseUP" ao mouseEvent
    dentro da função
    */
    canvas.addEventListener("mouseleave", my_mouseleave);
    canvas.setEventListener("mouseleave", my_mouseleave);
 
    function my_mouseleave (e){

        mouseEvent = "mouseleave";



    }
    /*Crie uma event listener para "mouseleave"
    e chame a função my_mouseleave

    Crie uma função chamada my_mouseleave com event de parâmetro.
    
    Atribua "mouseleave" ao mouseEvent
    dentro da função
    */

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
