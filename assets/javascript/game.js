var wordToGuess = ['yoshi', 'online', 'gerudo', 'wario', 'donkey','mario'];
var randomIndex = Math.floor((Math.random() * 6));
var guessesRemaining = 12;
var wordForming = [];
var placeHolder = [];
var word = splitArray(wordToGuess[randomIndex]);
var winCount = 0;
var wordGuessed = [];
wordGuessed.length = guessesRemaining;
var wordGuessedAgain = [];
var countInsideArray = 0;
var assigned = false;
//console.log(wordToGuess[randomIndex]);
console.log(word.toString().replace(/[,]/g,''));


function splitArray(myArraySplit) {
    var newArray = [];
    for (var i = 0; myArraySplit.length > i; i++) {
        newArray.push(myArraySplit[i]);
    }
    wordForming.length = newArray.length;
    placeHolder.length = newArray.length;
    console.log(wordForming.length);
    return newArray;
}

function inArray(option, wordArray) {
    //var alreadyGuessed = false;

    for (var i = 0; wordArray.length > i; i++) {
        if (wordArray[i] == option) {
            return true;
            //alreadyGuessed = true;
        }
    }

    return false;
    //  $("#letters").append(option);

}


function playmusic(ArrayWord){
    
     if (word.toString().replace(/[,]/g,'') === 'wario') {

                    var audio = new Audio();
                    audio.src = "assets/audio/wario.mp3"
                    audio.loop = true;
                    audio.play();
                }
                
                if (word.toString().replace(/[,]/g,'') === 'yoshi') {

                    var audio = new Audio();
                    audio.src = "assets/audio/yoshi.mp3"
                    audio.loop = true;
                    audio.play();
                }
                
                if (word.toString().replace(/[,]/g,'') === 'donkey') {

                    var audio = new Audio();
                    audio.src = "assets/audio/donkey.mp3"
                    audio.loop = true;
                    audio.play();
                }
                if (word.toString().replace(/[,]/g,'') === 'mario') {

                    var audio = new Audio();
                    audio.src = "assets/audio/mario.mp3"
                    audio.loop = true;
                    audio.play();
                }
                if (word.toString().replace(/[,]/g,'') === 'gerudo') {

                    var audio = new Audio();
                    audio.src = "assets/audio/gerudo.mp3"
                    audio.loop = true;
                    audio.play();
                }
    if (word.toString().replace(/[,]/g,'') === 'online') {

                    var audio = new Audio();
                    audio.src = "assets/audio/online.mp3"
                    audio.loop = true;
                    audio.play();
                }
    
}

function art(array){
    
   
    
    if(word.toString().replace(/[,]/g,'') === 'donkey' ){
        $("#picture").attr("src","./assets/images/donkey.png");
    }
    if(word.toString().replace(/[,]/g,'') === 'wario' ){
        $("#picture").attr("src","./assets/images/wario.png");
    }
    if(word.toString().replace(/[,]/g,'') === 'yoshi' ){
        $("#picture").attr("src","./assets/images/yoshi.png");
    }
    if(word.toString().replace(/[,]/g,'') === 'gerudo' ){
        $("#picture").attr("src","./assets/images/gerudo.png");
    }
    if(word.toString().replace(/[,]/g,'') === 'online' ){
        $("#picture").attr("src","./assets/images/online.png");
    }
    if(word.toString().replace(/[,]/g,'') === 'mario' ){
        $("#picture").attr("src","./assets/images/mario.png");
    }
   
    
}

window.onload = function (wordGuessed) {
       
        for (var i = 0; placeHolder.length > i; i++) {
            placeHolder[i] = " _ ";
            //console.log(placeHolder.length);
            //console.log("from inside the placeholder loop " + placeHolder[i]);
            $("#placeHolder").append(placeHolder[i]);
        }
    
    art(word);
    
    //$(document).ready(function () {
    //    
    //$("#click").on("click",function(){ 
}
window.onkeydown = function (event) {
        var playerChoice = String.fromCharCode(event.keyCode).toLocaleLowerCase();
        var guessedCorrectly = false;
        var win = 0;
        var countPlace = 0;


        $("#remaining").html(guessesRemaining);
        console.log("this is player choice " + playerChoice);
        console.log("Hello from outside the loop")
       
        
        
        if (guessesRemaining > 0) {
            console.log(word.length);
            for (var i = 0; word.length > i; i++) {
                if (playerChoice === word[i]) {
                    console.log("This is i " + i);
                    console.log(word[i]);
                    console.log("This is the word of array word " + word.indexOf(word[i]));
                    console.log("your choice is correct");
                    wordForming[i] = playerChoice
                    console.log(placeHolder[i]);
                    console.log("inside the if")
                    placeHolder.splice(i, 1, playerChoice);
                    $("#placeHolder").html(placeHolder);
                    console.log(wordForming);
                    guessedCorrectly = true;
                    winCount++;
                    console.log("IM win count " + winCount);
                    console.log("guesses remaining = " + guessesRemaining);
                }
            }

            if (!guessedCorrectly) {

                if (!inArray(playerChoice, wordGuessed)) {
                    wordGuessed[countInsideArray] = playerChoice;
                    $("#letters").append(playerChoice +" ");
                    countInsideArray++;

                }

                guessesRemaining--;
                console.log(guessesRemaining);
                $("#remaining").html(guessesRemaining);
            }

//            if (winCount === word.length || winCount > word.length) {
//                alert("you win");
//                win++;
//                $("#iWin").html(win);}
            
            if(word.toString().replace(/[,]/g,'') === wordForming.toString().replace(/[,]/g,'')){

               playmusic(word);
        
            
            
            
            }
            if (guessesRemaining <= 0) {
                $("#remaining").html("GAME OVER");
            }
        }
    }
    //})
    //
    //})