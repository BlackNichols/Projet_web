"use strict"
class Game extends Object{

    constructor(){
        super();
        this.playersList = []//Movement(30,30, MINX, MINY, MAXX, MAXY);
        this.bombs = [];
        this.MINX = 20;
        this.MINY = 20;
        this.MAXX = 800;this.MAXY = 800;
        this.bombTime = 4000;
        this.bombStrength = 1;
        this.field = new Field(this.MAXX,this.MAXY,this.MAXY/20, this.MINX/20);

    }

    putBomb = function(posx, posy){
        let bomb = new Bomb(posx, posy, this.bombTime, this.bombStrength);
        this.bombs.push(bomb);
    }

    //************************************************************************ */

    addPlayer(){

        let playerImg = new Image();
        playerImg.src = "player.gif";
        let player = new Player(30,30,playerImg, 5, this.field);
        this.playersList.push(player);
    }

   
    
}
