"use strict"

var game = new Game();
    

var playerImg = new Image();
playerImg.src = "player.gif";


var bombImg = new Image();
bombImg.src = "bomb.png";


window.addEventListener("keydown", function (event) {console.log(event)

    if (event.key == "w" || event.key == "W") game.playersList[0].moveUp();
    else if(event.key == "s" || event.key == "S") game.playersList[0].moveDown();
    else if(event.key == "a" || event.key == "A") game.playersList[0].moveLeft();
    else if(event.key == "d" || event.key == "D") game.playersList[0].moveRight();
    else if(event.key == "q" || event.key == "Q") game.putBomb(game.playersList[0].x, game.playersList[0].y);

    draw();

},false);


//***************************************************************** */

window.onload = function(){
    let elemento = document.getElementById("cvn");
    let contexto = elemento.getContext('2d');
    game.addPlayer();

    draw();
}

let draw = function(){
    var canvas = document.getElementById("cvn");
    var ctx = canvas.getContext("2d");

    //we clean the canvas for repint it later
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < game.playersList.length;i++){
        let pAux = game.playersList[i];
        ctx.drawImage(playerImg,pAux.x, pAux.y );
    }

    for(let i = 0; i < game.bombs.length;i++){
        let bAux = game.bombs[i];
        ctx.drawImage(bombImg,bAux.x, bAux.y );
    }

    //we pint the canvas with the changes
    //ctx.drawImage(player, x, y);
    // if(posEmpty())
    //     ctx.drawImage(bomb, bomx, bomy);
};

//***************************************************************** */

//***************************************************************** */