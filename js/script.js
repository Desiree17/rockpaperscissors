// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
    var randomNumber =Math.random();
    
    if(randomNumber > .6666666666666) {
        $("#computerChoice").text("rock!"); 
    } else if(randomNumber >.3333333333333 && randomNumber < .6666666666666){
        $("#computerChoice").text("paper!"); 
    } else if(randomNumber > .0000000000000 && randomNumber < .3333333333333){
        $("#computerChoice").text("scissor!"); 
    }
    });


// DOCUMENT READY FUNCTION BELOW

