"use strict"


class Movement extends Object{

   constructor(posx, posy, nbLives, plImage ){
       super();
       this.x = posx;
       this.y = posy;
       this.field = Field();
       this.move = 2;
       this.lives = nbLives;
       this.image = plImage;
   }


   moveUp = function(){
        if(this.field.checkPos(x, y - move)) y = y - move; 
    };

    //***************************************************************** */

    moveDown = function(){
        if(this.field.checkPos(x, y + move)) y = y + move; 
    };

    //***************************************************************** */

    moveLeft = function(){
        if(this.field.checkPos(x - move, y)) x = x - move; 
    };

    //***************************************************************** */

    moveRight = function(){
        if(this.field.checkPos(x + move, y)) x = x + move; 
    };

    //***************************************************************** */


}











  

  
  