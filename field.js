"use strict";

function defined(x){
    if(typeof x === 'undefined'){
        throw "Terrain mal formaté";
    }
    return x;
}

class Field extends Object{

    constructor(json_object){
        super();

        Object.defineProperty(this, "widthCell", {value : defined(json_object.widthCell), writable : false});
        Object.defineProperty(this, "heightCell", {value : defined(json_object.heightCell), writable : false});
        Object.defineProperty(this, "nbRow", {value : defined(json_object.nbLine), writable : false});
        Object.defineProperty(this, "nbCol", {value : defined(json_object.nbCol), writable : false});
        //Object.defineProperty(this, "cells", {value : defined(json_object.cells), writable : false});

        Object.seal(this);
    }

    constructor(widthCell,heightCell,nbRow,nbCol){
        super();

        Object.defineProperty(this, "widthCell", {value : widthCell, writable : false});
        Object.defineProperty(this, "heightCell", {value : heightCell, writable : false});
        Object.defineProperty(this, "nbLine", {value : nbRow, writable : false});
        Object.defineProperty(this, "nbCol", {value : nbCol, writable : false});
        //Object.defineProperty(this, "cells", {value : defined(json_object.cells), writable : false});

        Object.seal(this);
    }

    createFile(filename,field){
        let content = JSON.stringify(field);
        
    }

    checkPos(r,c){
        return true; //TODO
    } //true if the cell is crossable
}