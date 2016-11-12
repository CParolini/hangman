console.log("this is js");

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var teams = ['Cowboys', 'Giants', 'Eagles', 'Redskins', 'Bears', 'Lions', 'Packers', 'Vikings', 'Falcons', 'Panthers', 'Saints', 'Buccaneers', 'Cardinals', 'Rams', '49ers', 'Seahawks', 'Bills', 'Dolphins', 'Patriots', 'Jets', 'Ravens', 'Bengals', 'Browns', 'Steelers', 'Texans', 'Colts', 'Jaguars', 'Titans', 'Broncos', 'Chiefs', 'Raiders', 'Chargers'];

var guessesLeft;

var lettersInChosenWord;

var dashes = [];

var wins = 1;
var losses = 0;
var lives = 6;

function newGame() {
  var team = teams[Math.floor(Math.random() * teams.length)];
  var teamLength = team.length;
  for (i = 0; i < team.length; i++) {
    dashes.push("_");
}
  lettersInChosenWord = team.split("");
  guessesLeft = 6;
  document.getElementById("dashes").innerHTML = dashes.join(" ");
}
newGame();

function checkLetter(letter){
  for (i=0; i < lettersInChosenWord.length; i++) {
    if (letter === lettersInChosenWord[i]) // indexOf, lastIndexOf, splice
  }
}


document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementById("lives").innerHTML = "Lives: " + lives;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
}
