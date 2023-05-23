//Global Variables
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const mysteryWord = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const guessesSpan = document.querySelector(".remaining span");

const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");
const word = "magnolia";

//Placeholders for each letter
const placeHolder = function (word) {
    const placeHolderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeHolderLetters.push("●");
    }
    mysteryWord.innerText = placeHolderLtters.join("");
};

placeHolder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const ouputValue = textInput.value;
    //console.log(outputValue);
    const validGuess = validInput(guess);

    if (validGuess) {

        makeGuess(guess);

    }

    textInput.value = "";
});

validInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/

    if (input.length === 0) {

        message.innerText = "Please enter a letter.";

    } else if (input.length > 1) {

        message.innerText = "Please enter one letter";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z";
    } else {
        return input;
    }

const wordInProgress = function (guessedLetters) {
wordInProgress(guessedLetters);
}

const wordUpper = word.toUpperCase();
const wordArray = wordUpper.split("");
return wordArray;

}