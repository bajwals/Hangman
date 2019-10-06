// global variables
//==================//

//arrays and variables

var wordOptions = ["blue", "red", "green", "red", "purple", "orange", "yellow", "black", "white"]
var selectedWord = "";
var lettersInWord = [];
var blanksAndSuccesses = [];
var wrongLetters = [];
var lettersGuessed = "";


//game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;

// functions
//==================//

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");

    //reset
    guessesLeft = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //populate blanks and successes using word data
    for (var i = 0; i < selectedWord.length; i++) {
        blanksAndSuccesses.push("_");
    }

    //clicking on the main button adds the word to the card
    $(".btn-primary").on("click", function(){
        blanksAndSuccesses = $("<span>").text(blanksAndSuccesses);
        $("#second-number").append(btnElement);
    })

    // testing / debugging
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(selectedWord.length);
};

function checkLetter(letter) {
    // check if letter exists in code
    var isLetterInWord = false;

    for (var i = 0; i < selectedWord.length; i++) {
        if(selectedWord[i] = letter) {
            isLetterInWord = true;
        }
    }

    if(isLetterInWord === true) {
            for (var i = 0; i < selectedWord.length; i++) {
            if(selectedWord[i] = letter) {
                blanksAndSuccesses[i] = letter;
            }
        };
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }

    // testing / debugging
    console.log(blanksAndSuccesses);
    
    

};

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);
    // win
    if (lettersInWord.toString() = blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Win!");
        $(".win-count").text(winCount);
    }

    // lose
}


// Main Logic
//==================//

startGame();

//register keyclicks




document.onkeyup = function(event) {
    letter = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter();
    console.log("You guessed: " + letter);
    // alert("You guessed a letter!")
};




