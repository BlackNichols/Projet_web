"use strict"

var game = Game ();
    

var player = new Image();
player.src = "player.gif";

var bomb = new Image();
bomb.src = "bomb.png";


window.addEventListener("keydown", function (event) {console.log(event)

    if (event.key == "w" || event.key == "W") game.playerMv[0].moveUp();
    else if(event.key == "s" || event.key == "S") game.playerMv[0].moveDown();
    else if(event.key == "a" || event.key == "A") game.playerMv[0].moveLeft();
    else if(event.key == "d" || event.key == "D") game.playerMv[0].moveRight();
    else if(event.key == "q" || event.key == "Q") game.bombs.putBomb();

    playerMv.draw();

},false);


//***************************************************************** */

window.onload = function(){
    let elemento = document.getElementById("cvn");
    let contexto = elemento.getContext('2d');

    draw();
}

draw = function(){
    var canvas = document.getElementById("cvn");
    var ctx = canvas.getContext("2d");

    //we clean the canvas for repint it later
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < game.playerMv.length;i++){
        // ctx.drawImage(game.playersMv[i].image, );
    }

    //we pint the canvas with the changes
    ctx.drawImage(player, x, y);
    if(posEmpty())
        ctx.drawImage(bomb, bomx, bomy);
};

//***************************************************************** */

//***************************************************************** */