"use strict";

function defined(x){
    if(typeof x === 'undefined'){
        throw "Terrain mal formaté";
    }
    return x;
}

class Field extends Object{

    // constructor(widthCell,heightCell,nbRow,nbCol){
        constructor(widthCell = 20,heightCell = 20,nbRow = 40,nbCol = 40){
        super();

        Object.defineProperty(this, "widthCell", {value : widthCell, writable : false});
        Object.defineProperty(this, "heightCell", {value : heightCell, writable : false});
        Object.defineProperty(this, "nbLine", {value : nbRow, writable : false});
        Object.defineProperty(this, "nbCol", {value : nbCol, writable : false});
        //Object.defineProperty(this, "cells", {value : defined(json_object.cells), writable : false});
        this.board = [];

        Object.seal(this);
    }

    
    // constructor(json_object){
    //     super();

    //     Object.defineProperty(this, "widthCell", {value : defined(json_object.widthCell), writable : false});
    //     Object.defineProperty(this, "heightCell", {value : defined(json_object.heightCell), writable : false});
    //     Object.defineProperty(this, "nbRow", {value : defined(json_object.nbLine), writable : false});
    //     Object.defineProperty(this, "nbCol", {value : defined(json_object.nbCol), writable : false});
    //     //Object.defineProperty(this, "cells", {value : defined(json_object.cells), writable : false});

    //     Object.seal(this);
    // }

    
/***************************************************************** */

    createFile(filename,field){
        // const writeJsonFile = require('bit/global/write-json-file'); 
        let content = JSON.stringify(field);
        // const jsonFile = filename; 
        // writeJsonFile(jsonFile,content).catch(err => console.log(err)); 
        
    }

    
/***************************************************************** */
/**
 * 
 * @param {rowpixels to convert} x 
 * @param {column pixels to convert} y 
 * this function returns one position(that corresponds to one "CELL") 
 * from two coordinates.
 */
    pixelToPos(x, y){
        let posX = Number.NaN;
        let posY = Number.NaN;
        posX = Math.trunc(x/this.widthCell); 
        posY = Math.trunc(y/this.heightCell);

        let pos = (posX * this.nbLine) +  posY;

        return pos;
    }
    
    
    //***************************************************************** */

    /**
     * 
     * @param {row pixels} r 
     * @param {column pixels} c 
     * function that checks if the position r,c in the canvas is empty and the 
     * creature can cross it.
     * in the case there was a wall it can cross
     * return true if its crossable and false otherside.
     */
    checkPos(r,c){
        let i = this.pixelToPos(r,c);
        return board[i].isEmpty();
    }
    
/***************************************************************** */
/**
 * returns a "String" with all field's information
 */
    toString(){
        let r = "FIELD: \n" + "WIDTH " + this.widthCell + '\n' + "HEIGHT " + this.heightCell + '\n' + "ROWS " + this.nbLine + '\n' + "COLUMNS " + this.nbCol +'\n';

        for (let i = 0; i < this.board.length; i++){
            r += this.board[i] + '\n'
        }
        return r;
    }



}