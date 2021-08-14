import * as THREE from "../three.module.js";
function key_down(event){
    var W = 87;
    var S = 83;
    var A = 65;
    var D = 68;
    var minus = 189;
    var plus = 187;

    var k = event.keyCode;
    console.log(k);
    if(k == A){ // rotate left
        playerIsRotatingLeft = 1;
    }
    if(k == D){ // rotate right
        playerIsRotatingRight = 1;
    }
    if(k == W){ // go forward
        playerIsMovingForward = 1;
    }
    if(k == S){ // go back 
        playerIsMovingBackwards = 1;
    }


}