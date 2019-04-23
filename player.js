"use strict"


class Player extends gameObject{

   constructor(posx, posy, nbLives, plImage, gameField){
       super(plImage, posx, posy);
       this.field = gameField;
       this.move = 2;
       this.lives = nbLives;
   }

   draw = function(ctx){
    ctx.drawImage(this.image,this.x, this.y);
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











  

  
  