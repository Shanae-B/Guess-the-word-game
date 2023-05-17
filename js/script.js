//Global Variables
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector.Selector(".letter");
const mysteryWord = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector (".remaining");
const guessesSpan = document.querySelector(".remaining span");
//console.log(guesses)
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");
const word = "magnolia"; 

//Placeholders for each letter
const placeHolder = function(word){
    const placeHolderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeHolderLetters.push("●");
    }
    mysteryWord.innerText = placeHolderLtters.join("");
};
