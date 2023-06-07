//Global Variables
const guessedLettersClass = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const mysteryWord = document.querySelector(".word-in-progress");
const remainingGuessesSpan = document.querySelector(".remaining");
const guessesSpan = document.querySelector(".remaining span");
//let remainingGuesses = 8;
const message = document.querySelector(".message");
const playButton = document.querySelector(".play-again");

let word = "magnolia";
const guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function () {
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    const wordArray = words.split("\n");
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholder(word);
};

getWord();

// Display our symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
    let placeholderLetters = [];
    for (const letter of word) {
         console.log(letter);
        placeholderLetters.push("●");
    }
    mysteryWord.innerText = placeholderLetters.join("");
};

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const outputValue = textInput.value;
    const validGuess = verifyInput(outputValue);

    if (validGuess) {
        makeGuess(outputValue);
    }
    textInput.value = "";
    //verifyInput(input);
});

const verifyInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        // Is the input empty?
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        // Did you type more than one letter?
        message.innerText = "Please enter one letter.";
    } else if (!input.match(acceptedLetter)) {
        // Did you type a number, a special character or some other non letter thing?
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        // We finally got a single letter, omg yay
        return input;
    }
};

const makeGuess = function (outputValue) {
    outputValue = outputValue.toUpperCase();
    if (guessedLetters.includes(outputValue)) {
        message.innerText = "Duplicate guess. Try again!";
    } else {
        guessedLetters.push(outputValue);
        console.log(guessedLetters);
        guessCounter(outputValue);
        revealGuessedLetters();
        updateMysteryWord(guessedLetters);
    }
};

const revealGuessedLetters = function () {
    // Clear the list first
    guessedLettersClass.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersClass.append(li);
    }
};

const updateMysteryWord = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealMysteryWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealMysteryWord.push(letter.toUpperCase());
        } else {
            revealMysteryWord.push("●");
        }
    }
    // console.log(revealMysteryWord);
    mysteryWord.innerText = revealMysteryWord.join("");
    checkIfWin();
};

const guessCounter = function (outputValue) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(outputValue)) {
        // womp womp - bad outputValue, lose a chance
        message.innerText = `Sorry, the word has no ${outputValue}.`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `Good guess! The word has the letter ${outputValue}.`;
    }

    if (remainingGuesses === 0) {
        message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
    } else if (remainingGuesses === 1) {
        remainingGuessesSpan.innerText = `${remainingGuesses} guess left`;
    } else {
        remainingGuessesSpan.innerText = `${remainingGuesses} guesses remaining`;
    }
};

const checkIfWin = function () {
    if (word.toUpperCase() === mysteryWord.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};