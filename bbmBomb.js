"use strict"


class Bomb extends gameObject{

    constructor(posx, posy, time, bombStrength){
        super(new Image().src = "bomb.png", posx, posy);
        this.ttl = time; // time to live
        this.strength = bombStrength;
        
    }

    draw = function(ctx){
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //need to implement sprites animmation
        ctx.drawImage(this.image,this.x, this.y);
    }

    //*****************************************************************


}
