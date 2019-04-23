class gameObject extends Object {

    constructor(objectImage, objectX, objectY){
        super();
        this.image = objectImage;
        this.x = objectX;
        this.y = objectY;
    }

/***************************************************************** */
/**
 * returns a "String" with all cell's information
 */
    toString(){
        return "IMAGE " + this.image.src + '\n'+ "X " + this.x + '\n' + "Y " + this.y;
    }

}