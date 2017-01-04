//Word Array is coming from the Word.js file wich contains the words to be guessed

var randomWordLetters = Math.floor((Math.random() * wordArray.length));
var guessRemaining = 12;
var placeholderArray = [];
var wordToGuessArray = [];
var keyPressedList = [];
var isLetterGuessed = false;
var keyPressed;
var buttonNotCreated = true;

// setKeyList function check if the word is correct or not.
function setKeyList(key) {
  // Loop through the keyPressedList Array as many times as big is the array and if one of the key matches one of the letters in the placeholder array dont take a guess remaining.  
  for (var i = 0; i < keyPressedList.length; i++) {

    if (!isLetterGuessed) {

      if (placeholderArray[wordToGuessArray.indexOf(key)] != key) {

        guessRemaining--;
        isLetterGuessed = true;
      }
    }
  }
  //isLetterGuesses prevents subtracting the a guess remaining in case a letter is more than one in the array  
  isLetterGuessed = false;
}

function playGame() {

  randomWordLetters = Math.floor((Math.random() * wordArray.length));
  placeholderArray = [];
  buttonNotCreated = true;


  wordToGuessArray = wordArray[randomWordLetters].split("");


  //Array to set the placeholder size with  _ characters
  for (var i = 0; i < wordArray[randomWordLetters].split("").length; i++) {
    placeholderArray.push('_');
  }

  //Creates a $letterHolder object with a class.
  var $letterHolder = $('<div/>')
    .addClass('lettersPlace')
    .html('<h2>' + placeholderArray.join(" ") + '</h2>');

  //append to the DOM
  $('#letter-holder').append($letterHolder);

  
  $('#chances').html('<h2>Guess Remaining:  ' + guessRemaining + '</h2>');
  
  $('#chances').append('<h2>Words Guess:  ' + keyPressedList.join(" ") + '</h2>');

}

// PlayAgain funtion determine if the player won or lost
function playAgain(playerStatus) {

  // player lost show the player the correct word
  if (!playerStatus) {
    askPlayer = confirm("GAME OVER ! the correct word was: " + wordToGuessArray.join(""));
  }

  //player won, shows the player the correct word and congratulates the player
  if (playerStatus) {
    askPlayer = confirm("You WON ! the correct word is: " + placeholderArray.join(""));
  }

  //if already show the player the confirm box and the button is not created, create a "play again" button
  if (askPlayer && buttonNotCreated) {
    var $restartButton = $('<div/>').addClass("btn btn-primary restart-button").html('Play Again');
    $('.restart-button-area').append($restartButton);
    buttonNotCreated = false;
  }
}
//When the windows open, the starts and waits for the player input
window.onload = function () {
  playGame();
}

//On key down, do the logic for the hangsman game to runs.
document.onkeydown = function (event) {

  //keypressed is the key the player pressed in the keyboard
  keyPressed = String.fromCharCode(event.keyCode).toLowerCase();


  if (guessRemaining > 0) {
    // writes into the placeHolderArray if the keypressed matches one of the characters in the wordToGuessArray
    for (i = 0; i < wordToGuessArray.length; i++) {
      if (wordToGuessArray[i] == keyPressed) {
        placeholderArray[i] = keyPressed;
      }
    }

    //Add new content to the DOM by adding characters from 'placeholderArray' to ltterHolder ID
    $('#letter-holder').html('<h2>' + placeholderArray.join(" ") + '</h2>');

    //if both arrays match then it goes to the playAgain funtion 
    if (placeholderArray.join("") == wordToGuessArray.join("")) {

      var playerWon = true;

      guessRemaining = 0;
      playAgain(playerWon);

    }
    // Push key pressed by the player to an list(array) of the pressed keys. This array takes all the keys despite if is correct or not.
    keyPressedList.push(keyPressed);

    //Go to setKeyList funtion to do the logic of guess remaining.
    setKeyList(keyPressed);

    //Write to the DOM the guessRemaining
    $('#chances').html('<h2>Guess Remaining:  ' + guessRemaining + '</h2>');
    $('#chances').append('<h2>Words Guess:  ' + keyPressedList.join(" ") + '</h2>');

    //if the guess remaining is 0 that means the player lost.
  } else if (guessRemaining == 0) {
    //go to playAgain function
    playAgain();
  }

  // When " Play Again" button is pressed, it reset the content in ID #letter-holder and in class .restart-button-area
  $('.restart-button').click(function () {
    $('#letter-holder').empty();
    $('.restart-button-area').empty();
    

    //resets guessRemaining to 12 
    guessRemaining = 12;
    keyPressedList =[];

    //start game
    playGame();

  });
};