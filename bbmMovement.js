//Objeto Singleton Uno solo en todo el programa y sin constructor

var x = 30;
var y = 30;
var move = 2;
var bomx = 0;
var bomy = 0;

var player = new Image();
player.src = "player.gif";

var bomb = new Image();
bomb.src = "bomb.png";

let Bbm = {
    posX : 20,
    posY : 20,
    MINX : 20,
    MINY : 20,
    MAXX : 800,
    MAXY : 800

  };

  window.addEventListener("keydown", function (event) {console.log(event)

    if (event.key == "w" || event.key == "W") moveUp();
    else if(event.key == "s" || event.key == "S") moveDown();
    else if(event.key == "a" || event.key == "A") moveLeft();
    else if(event.key == "d" || event.key == "D") moveRight();
    else if(event.key == "q" || event.key == "Q") putBomb();

    draw();

},false);

moveUp = function(){
    if(y - move > Bbm.MINY && posEmpty(x, y - move)) y = y - move; 
};

//***************************************************************** */

moveDown = function(){
    if(y + move < Bbm.MAXY && posEmpty(x, y + move)) y = y + move; 
};

//***************************************************************** */

moveLeft = function(){
    if(x - move > Bbm.MINX && posEmpty(x - move, y)) x = x - move; 
};

//***************************************************************** */

moveRight = function(){
    if(x + move < Bbm.MAXX && posEmpty(x + move, y)) x = x + move; 
};

//***************************************************************** */

posEmpty = function(){

    return true;
};

//***************************************************************** */

draw = function(){
    var canvas = document.getElementById("cvn");
    var ctx = canvas.getContext("2d");

    //we clean the canvas for repint it later
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //we pint the canvas with the changes
    ctx.drawImage(player, x, y);
    if(posEmpty())
        ctx.drawImage(bomb, bomx, bomy);
};

//***************************************************************** */

putBomb = function(){

    bomx = x;
    bomy = y;


};

//***************************************************************** */

window.onload = function(){
    let elemento = document.getElementById("cvn");
    let contexto = elemento.getContext('2d');

    draw();
    }
  

  
  