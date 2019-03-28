"use strict"


class Movement extends Object{

   constructor(posx, posy){
       super();
       this.x = posx;
       this.y = posy;
       this.field = Field();
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


}











  

  
  