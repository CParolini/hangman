var wins = 0;
var losses = 0;
var lives = 6;
var userInput = [];

var guessesLeft;

var lettersInChosenWord;

var dashes = [];

var wins = 0;
var losses = 0;
var lives = 6;

function newGame() {
    var team = teams[Math.floor(Math.random() * teams.length)];
    var teamLength = team.length;
    for (i = 0; i < team.length; i++) {
        dashes.push("_");
        console.log(team);
    }
    lettersInChosenWord = team.split("");
    guessesLeft = 6;
    document.getElementById("dashes").innerHTML = dashes.join(" ");
}
newGame();

function checkLetter(letter) {
    for (i = 0; i < lettersInChosenWord.length; i++) {
        if (letter === lettersInChosenWord[i]); // indexOf, lastIndexOf, splice
        console.log(letter);
    }
    document.getElementById("demo").innerHTML = toCelsius(77);
}


document.onkeyup = function(event) {
    if (event.keyCode) {
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    } else {
        var letterGuessed = $(this).data('letter').toLowerCase();
        console.log("button push was " + letterGuessed)
        console.log("Current user Input = " + userInput)
    }
    if (/[a-zA-Z0-9-_]/.test(lastKey)) {
};
document.getElementById("lives").innerHTML = "Lives: " + lives;
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
    if (letterGuessed === teams) {
        alert("This is a letter is the random team name");
    }
};
