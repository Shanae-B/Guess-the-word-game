//Global Variables
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const mysteryWord = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector (".remaining");
const guessesSpan = document.querySelector(".remaining span");

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

placeHolder(word);

guessButton.addEventListener("click", function (e){
    e.preventDefault();
    const ouputValue = textInput.value;
    console.log(outputValue);
    textInput.value = "";

}); 