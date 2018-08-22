document.onkeyup = function(event) {


    var userGuess = event.key;


    if (userGuess === computerGuess) {
        wins++;
        alert("You win! I was thinking of " + computerGuess + "!");
        reset();

    } else {
        if (guessesLeft > 0 && prevGuesses.indexOf(userGuess) === -1 && alphabet.indexOf(userGuess) != -1) {
            guessesLeft--;



            prevGuesses.push(userGuess);

            if (guessesLeft === 0) {
                losses++;
                alert("You lose. The letter I was thinking of was " + computerGuess + ".");
                reset();
            }

        }


    }


    var numWin = document.getElementById("num-win");
    numWin.textContent = wins;

    var numLos = document.getElementById("num-los");
    numLos.textContent = losses;

    var numLef = document.getElementById("num-lef");
    numLef.textContent = guessesLeft;

    var numFar = document.getElementById("num-far");
    numFar.textContent = prevGuesses;

};

function reset() {

    guessesLeft = 10;
    computerGuess = alphabet[Math.floor(Math.random() * (alphabet.length))];
    prevGuesses = [];





}

var wins = 0
var losses = 0
var guessesLeft = 10
var prevGuesses = [];




var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = alphabet[Math.floor(Math.random() * (alphabet.length))];