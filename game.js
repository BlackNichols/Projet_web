
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

    }

    putBomb = function(posx, posy){
        let bomb = new Bomb(posx, posy, this.bombTime, this.bombStrength);
        this.bombs.push(bomb);
    }

    //************************************************************************ */

    addPlayer(){
        let player = Movement(30,30, this.MINX,this.MINY, this.MAXX, this.MAXY);
        this.playerMvList.push(player);
    }

   
    
}
