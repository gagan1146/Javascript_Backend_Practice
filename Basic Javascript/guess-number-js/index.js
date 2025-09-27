let guessValue = Math.floor(Math.random() * 100) + 1;
let remains = 10;
let previousGuesses = [];

const form = document.querySelector('form');
const input = document.getElementById('input');
const previousGuessesElement = document.getElementById('guesses-here');
const guessRemainsElement = document.getElementById('guess-remains');
const resultElement = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    let userInput = parseInt(input.value);

    // Validate input
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        resultElement.innerText = "Please enter a valid number between 1 and 100.";
        input.value = '';
        return;
    }

    // Store previous guesses
    previousGuesses.push(userInput);
    previousGuessesElement.innerText = previousGuesses.join(', ');

    // Check guess
    if (userInput === guessValue) {
        resultElement.innerText = `🎉 Congratulations! You guessed the number: ${guessValue}`;
        endGame();
    } else {
        remains--;
        if (remains === 0) {
            resultElement.innerText = `❌ Game Over! The correct number was ${guessValue}.`;
            endGame();
        } else {
            resultElement.innerText = userInput > guessValue ? "Too high! Try again." : "Too low! Try again.";
            guessRemainsElement.innerText = `Guesses Remaining: ${remains}`;
            input.value = '';
            input.focus();
        }
    }
});

function endGame() {
    input.disabled = true;
    form.querySelector('input[type="submit"]').disabled = true;
}
