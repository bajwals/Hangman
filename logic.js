// global variables
//==================//

//arrays and variables

var wordOptions = ["blue", "red", "green", "red", "purple", "orange", "yellow", "black", "white"]
var selectedWord = "";
var lettersGuessed = [];


//game counters
var winCount = 0;
var lossCount = 0;
var guessesAllowed = 10;

// functions
//==================//

function deriveBlanks(selectedWord, lettersGuessed) {
    var output = [];
    for (var i = 0; i < selectedWord.length; i++) {
        var selectedLetter = selectedWord[i];
        var guessedLetter = lettersGuessed[i];
        var hasBeenGuessed = lettersGuessed.includes(selectedWord[i]);
    if (hasBeenGuessed === true) {
        output.push(selectedLetter);
    }
    else {
        output.push("_");
    }
        console.log(output)
    }
    return output;
}

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    var allBlanks = deriveBlanks(selectedWord, lettersGuessed).join();
    $("#blank-word").text(allBlanks);

    //reset
    guessesAllowed = 10;

    //clicking on the main button adds the word to the card
    $(".btn-primary").on("click", function(){
        blanksAndSuccesses = $("<span>").text(blanksAndSuccesses);
        $("#blank-word").append(blanksAndSuccesses);
    })

    // testing / debugging

};

// Main Logic
//==================//

startGame();





//register keyclicks




document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    lettersGuessed.push(letter);
    var displayedWord = deriveBlanks(selectedWord, lettersGuessed).join("");
    $("#blank-word").text(displayedWord);
};
