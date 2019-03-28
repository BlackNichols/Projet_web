"use strict" 
 
 // some vars  for try the code 
var MINX = 20;
var MINY = 20;
var MAXX = 800;
var MAXY = 800;
   



var x = 30;
var y = 30;
var move = 2;
var bomx = 0;
var bomy = 0;
var playerMv = Movement(30,30, MINX, MINY, MAXX, MAXY);
    

var player = new Image();
player.src = "player.gif";

var bomb = new Image();
bomb.src = "bomb.png";


window.addEventListener("keydown", function (event) {console.log(event)

    if (event.key == "w" || event.key == "W") playerMv.moveUp();
    else if(event.key == "s" || event.key == "S") playerMv.moveDown();
    else if(event.key == "a" || event.key == "A") playerMv.moveLeft();
    else if(event.key == "d" || event.key == "D") playerMv.moveRight();
    else if(event.key == "q" || event.key == "Q") playerMv.putBomb();

    playerMv.draw();

},false);

//*****************************************************************


putBomb = function(){
    bomx = x;
    bomy = y;
};

//***************************************************************** */

window.onload = function(){
    let elemento = document.getElementById("cvn");
    let contexto = elemento.getContext('2d');

    playrMv.draw();
}

//***************************************************************** */