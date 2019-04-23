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

    play();

},false);


//***************************************************************** */

window.onload = function(){
    let elemento = document.getElementById("cvn");
    let contexto = elemento.getContext('2d');
    game.addPlayer();

    play();
}

//***************************************************************** */

/**
 * This function draws players on the canvas
 */
let drawPlayers = function(ctx){
    for(let i = 0; i < game.playersList.length;i++){
        let pAux = game.playersList[i];
        ctx.drawImage(playerImg,pAux.x, pAux.y );
    }
    //     ctx.drawImage(bomb, bomx, bomy);
};

//***************************************************************** */
/**
 * this function draws all the bombs on the canvas  
*/
let drawBombs = function(ctx){
        
    for(let i = 0; i < game.bombs.length;i++){
        let bAux = game.bombs[i];
        ctx.drawImage(bombImg,bAux.x, bAux.y );
    }
};

//***************************************************************** */

/**
 * this function contains the loop that displays game's  information in the canvas
 * we can set 30 FPS or 60 FPS
 */

 var jugando = true;
let play = function(){
    var canvas = document.getElementById("cvn");
    var ctx = canvas.getContext("2d");

    // while(jugando){

        setTimeout(() => {
            //we clean the canvas for repint it later
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // we display the players
            drawPlayers(ctx);
            //we display the bombs actives
            drawBombs(ctx);
            
        }, 1000/30);    
    // }



    

    

};

//***************************************************************** */