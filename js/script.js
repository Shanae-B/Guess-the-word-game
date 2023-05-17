//Global Variables
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess button");
const text = document.querySelector.Selector(".text input");
const mysteryWord = document.querySelector(".word-in-progress");
const remaining = document.querySelector (".remaining");
const guesses = document.querySelector("span");
//console.log(guesses)
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again hide");
const word = "magnolia"; 

//Placeholders for each letter
const placeHolder = function(){
    mysteryWord.innerText = "●"};

placeHolder.join(word);