class Cell {

    constructor(posx, posy, value, inTrasversable, inDoor){
        this.x = posx;
        this.y = posy;
        this.value = value;
        //in the case that cell value == "WALL", it represents if the player can break the wall
        this.traversable = inTrasversable;
        this.door = inDoor;
    }

    /**
     * Possible values : 
     * -> PATH (empty cell)
     * -> WALL
     */
/*************************************************************/
/**
 * returns if the cell it's part of the path
 */
    isEmpty = function(){
        return (this.valeur == "PATH");
    }

/*************************************************************/
/**
 * returns if the cell , in the case to be a WALL, it's breakable
 */
    isBreakable(){
        return (!(isEmpty()) && this.traversable);
    }

}