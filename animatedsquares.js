document.onmousemove =animatedsquares;
function animatedsquares (event){
    let squares= document.createElement("div");
    squares.setAttribute("class","squares");
    document.body.appendChild(squares);
    squares.style.left= event.clientX + "px";
    squares.style.top= event.clientY + "px";

    squares.style.transition="all 1.5s linear 1s";
    squares.style.left= squares.offsetLeft - 10 +"px";
   squares.style.top= squares.offsetTop - 2 + "px";

    squares.style.width= "50px";
    squares.style.height= "50px";
    squares.style.borderWidth="5px";
    squares.style.opacity=0;
}