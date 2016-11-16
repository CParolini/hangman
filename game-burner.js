// Global Variables
// =========================================
// Arrays and Variables for holding data

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var clues = ["Home City of Dallas", "Nicknamed the G-Men", "City known for Cheessteaks", "Offensive Name used toward Native Americans", "They call the Windy City home", "Detroits Finest", "Cheeseheads", "NFC North foes to the Packers", "Home City of Atlanta", "Cam Newton is their starting QB", "Won Super Bowl in 2006", "The other Florida team", "Arizona is their state of choice", "Back to LA", "San Francisco Bay for the win", "Known for the 12th Man", "New Yorks 3rd Wheel Team", "Sunny Miami", "Tom Brady", "J.E.T.S.", "Ray Lewis' former team", "Cincinatti is home", "Believeland (Cleveland)", "Steel City", "Formerly the Oilers", "Famous for Peighton Manning", "The other, other Florida team", "Tennessee", "Denver", "KC", "The Black Hole", "San Diego"];
var wordOptions = ['cowboys', 'giants', 'eagles', 'redskins', 'bears', 'lions', 'packers', 'vikings', 'falcons', 'panthers', 'saints', 'buccaneers', 'cardinals', 'rams', '49ers', 'seahawks', 'bills', 'dolphins', 'patriots', 'jets', 'ravens', 'bengals', 'browns', 'steelers', 'texans', 'colts', 'jaguars', 'titans', 'broncos', 'chiefs', 'raiders', 'chargers'];
var selectedWord = "";
var lettersinWord = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game Counters
var winCount = "Wins: " + 0;
var lossCount ="Losses: " + 0;
var guessesLeft = "Lives: " + 9;

// Functions (Reusable blocks of code that I will call upon when needed)
// =========================================
function startGame() {
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersinWord = selectedWord.split("");
  numBlanks = lettersinWord.length;

  // Reset
  guessesLeft = "Lives: " + 9;
  wrongLetters = [];
  blanksAndSuccesses = [];

  // Populate blanks and success with right number of blanks
  for (var i=0; i<numBlanks; i++){
    blanksAndSuccesses.push("_");
  }

  // Change html to reflect round conditions
  document.getElementById("dashes").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("lives").innerHTML = guessesLeft;
  document.getElementById("wins").innerHTML = winCount;
  document.getElementById("losses").innerHTML = lossCount;

  //testting/debugging
  console.log(selectedWord);
  console.log(lettersinWord);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
  // Check if lettter exist in code at all
  var isLetterInWord = false;
  for (var i=0; i,numBlanks; i++) {
    if (selectedWord[i] == letter) {
      isLetterInWord = true;
      alert("Letter Foud");
    }
  }
}

// Main Process
// =========================================
// Initiates the code the first time
startGame();

//Register keyclicks
document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  // Testing / debugging
  console.log(letterGuessed);
}


// var wins = 0;
// var losses = 0;
// var lives = 6;
// var userInput = [];
//
// var guessesLeft;
//
// var lettersInChosenWord;
//
// var dashes = [];
//
// var wins = 0;
// var losses = 0;
// var lives = 6;
//
// function newGame() {
//     var team = teams[Math.floor(Math.random() * teams.length)];
//     var teamLength = team.length;
//     for (i = 0; i < team.length; i++) {
//         dashes.push("_");
//         console.log(team);
//     }
//     lettersInChosenWord = team.split("");
//     guessesLeft = 6;
//     document.getElementById("dashes").innerHTML = dashes.join(" ");
// }
// newGame();
//
// function checkLetter(letter) {
//     for (i = 0; i < lettersInChosenWord.length; i++) {
//         if (letter === lettersInChosenWord[i]); // indexOf, lastIndexOf, splice
//         console.log(letter);
//     }
//     document.getElementById("demo").innerHTML = toCelsius(77);
// }
//
//
// document.onkeyup = function(event) {
//     if (event.keyCode) {
//         var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//     } else {
//         var letterGuessed = $(this).data('letter').toLowerCase();
//         console.log("button push was " + letterGuessed)
//         console.log("Current user Input = " + userInput)
//     }
//     if (/[a-zA-Z0-9-_]/.test(lastKey)) {
// };
// document.getElementById("lives").innerHTML = "Lives: " + lives;
// document.getElementById("wins").innerHTML = "Wins: " + wins;
// document.getElementById("losses").innerHTML = "Losses: " + losses;
//     if (letterGuessed === teams) {
//         alert("This is a letter is the random team name");
//     }
// };
