"use strict"


class Player extends Object{

   constructor(posx, posy, nbLives, plImage, gameField){
       super();
       this.x = posx;
       this.y = posy;
       this.field = gameField;
       this.move = 2;
       this.lives = nbLives;
       this.image = plImage;
   }


   moveUp = function(){
        if(this.field.checkPos(this.x, this.y - this.move)) this.y = this.y - this.move; 
    };

    //***************************************************************** */

    moveDown = function(){
        if(this.field.checkPos(this.x, this.y + this.move)) this.y = this.y + this.move; 
    };

    //***************************************************************** */

    moveLeft = function(){
        if(this.field.checkPos(this.x - this.move, this.y)) this.x = this.x - this.move; 
    };

    //***************************************************************** */

    moveRight = function(){
        if(this.field.checkPos(this.x + this.move, this.y)) this.x = this.x + this.move; 
    };

    //***************************************************************** */
    getCell(x,y){
        
    }


}











  

  
  