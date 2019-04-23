"use strict"
class Game extends Object{

    constructor(){
        super();
        this.playersList = []//Movement(30,30, MINX, MINY, MAXX, MAXY);
        this.bombs = [];
        this.widthCell = 20;
        this.heightCell = 20;
        this.nbRow = 40;
        this.nbCol = 40;
        this.bombTime = 4000;
        this.bombStrength = 1;
        this.field = new Field(this.widthCell,this.heightCell,this.nbRow, this.nbCol);

    }

    putBomb (posx, posy){
        let bomb = new Bomb(posx, posy, this.bombTime, this.bombStrength);
        this.bombs.push(bomb);
    }

    //************************************************************************ */

    addPlayer (){

        let playerImg = new Image();
        playerImg.src = "player.gif";
        let player = new Player(30,30,playerImg, 5, this.field);
        this.playersList.push(player);
    }


    //***************************************************************** */

   
    
}
