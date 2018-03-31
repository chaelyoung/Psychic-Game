// alert that welcomes users to game //
alert("Welcome Rookie. Hone your psychic ability by training here. Then, go out and predict the future!");
alert("Click 'OK' to begin!");

// set variables, letters, that the computer will pick //
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// set variables for stats //
var wins = 0;
var losses = 0;
var guessRemaining = 9;
var guessLetters = [];

document.onkeyup = function(event) {
    var playerGuess =
    String.fromCharCode(event.keyCode).toLowerCase();
    var compPick = letters[Math.floor(Math.random()*letters.length)];
    guessLetters.push(playerGuess);

    if (playerGuess == compPick) {
        wins++;
        guessRemaining = 9;
        guessLetters.length = 0;
    }
    else if (guessRemaining == 0) {
        losses++;
        guessRemaining = 9;
        guessLetters.length = 0;
    }
    else if (playerGuess !== compPick) {
        guessRemaining--;
    }

    var html = "<h1>The Psychic Game</h1>" + "<p>Tap into your psy ability and summon the letter I'm thinking of!</p>" + "<h2>Wins: " + wins + "</h2>" + "<h2>Losses: " + losses + "</h2>" + "<h2>Guesses Remaining:" + guessRemaining + "</h2>" + "<h2>Letters guessed so far: " + guessLetters + "</h2>";

    document.querySelector(".wrapper").innerHTML = html;
}
