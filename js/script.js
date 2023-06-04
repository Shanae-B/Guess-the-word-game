//Global Variables
const guessedLettersClass = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const mysteryWord = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const guessesSpan = document.querySelector(".remaining span");

const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");
const word = "magnolia";
const guessedLetters = [];
//const win = document.querySelector(".win");

//Placeholders for each letter
const placeHolder = function (word) {
    const placeHolderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeHolderLetters.push("●");
    }
    mysteryWord.innerText = placeHolderLetters.join("");
};

placeHolder(word);

//Event listener for button
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const outputValue = textInput.value;
    //console.log(outputValue);
    const validGuess = verifyInput(outputValue);


    if (validGuess){
        makeGuess(outputValue)
    }

    textInput.value = "";
    //verifyInput(input);
});

const makeGuess = function(outputValue) {
    outputValue = outputValue.toUpperCase();
    if (guessedLetters.includes(outputValue)) {
        message.innerText = "Duplicate guess, try again!";
    } else {
        guessedLetters.push(outputValue);
        console.log(guessedLetters);
    }
    revealGuessedLetter();
    updateMysteryWord(guessedLetters);
}

const updateMysteryWord = function (guessedLetters){
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];

   for(const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
    } else {
        revealWord.push("●")
    }
   }

   mysteryWord.innerText = revealWord.join("");
   winningGuess()
};

    //Function to update word in progress
    const revealGuessedLetter = function () {
        guessedLettersClass.innerHTML= "";
        for (const letter of guessedLetters) {

            const li = document.createElement("li");
            li.innerText = letter;
            guessedLettersClass.append(li);

        }
    };

    const winningGuess = function () {
        if (word.toUpperCase()===mysteryWord.innerText) {
             message.classList.add("win")
          message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;   
        }
     };
//check player's input
const verifyInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0) {

        message.innerText = "Please enter a letter.";

    } else if (input.length > 1) {

        message.innerText = "Please enter one letter";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z";
    } else {
        return input;
    };



     //wordInProgress(guessedLettersClass);

     //const wordUpper = word.toUpperCase();
     //const wordArray = wordUpper.split("");
     //return wordArray;

    //  const winningGuess = function () {
    //      if (mysteryWord.match(word)) {
    //          return win
    //       }
    //  };
    //  return winnginGuess();
}
//}
