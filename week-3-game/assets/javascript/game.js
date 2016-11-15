console.log("this is js");

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var clues = ["Home City of Dallas", "Nicknamed the G-Men", "City known for Cheessteaks", ""];
var teams = ['cowboys', 'giants', 'eagles', 'redskins', 'bears', 'lions', 'packers', 'vikings', 'falcons', 'panthers', 'saints', 'buccaneers', 'cardinals', 'rams', '49ers', 'seahawks', 'bills', 'dolphins', 'patriots', 'jets', 'ravens', 'bengals', 'browns', 'steelers', 'texans', 'colts', 'jaguars', 'titans', 'broncos', 'chiefs', 'raiders', 'chargers'];
var wins = 0;

var losses = 0
var userInput = [];
var dashGuesses = [];
var winAudio;
createButtons();
randomWordChoice();
console.log(randomWord);
console.log(dashGuesses);

document.onkeyup = function(event) {
    // Saves user input into the array userInput (lowercase)
    if (event.keyCode) {
        var lastKey = String.fromCharCode(event.keyCode).toLowerCase();
    } else {
        //applies the last button push inside the button "letter" to the variable last key
        var lastKey = $(this).data('letter').toLowerCase();
        console.log("button push was " + lastKey)
        console.log("Current user Input = " + userInput)
    }
    if (/[a-zA-Z0-9-_]/.test(lastKey)) { //if keycode in alphabet
        //if match, replace underscore w/matching letter

        //performs a check to see if this is a new game, if so...delete the previous win/loss message
        if (newGame === true) {
            console.log("Initiated new Game! " + newGame)
            resetAlert = "";
            document.querySelector("#resetAlert").innerHTML = resetAlert;
        }
        //Checks if the last key is in the index of Random word, if so and its not a previously selected key replace the index
        if (randomWord.indexOf(lastKey) >= 0 && userInput.indexOf(lastKey) === -1 && lives > 0) {
            userInput.push(lastKey);
            getAllIndexes(randomWord, lastKey);
            getAllIndexes(randomWord, " ");
            console.log("Removing Spaces");
            console.log(dashGuesses.indexOf("_"));
            writeStats();
            console.log("Great Guess! Adding " + (String.fromCharCode(event.keyCode).toLowerCase()) + "!");
        } else if (userInput.indexOf(lastKey) >= 0) {
            //if the conditions above already met add method here to tell user its already been guessed.
            console.log("You have already Guessed: " + (String.fromCharCode(event.keyCode).toLowerCase()) + " key skipping...");
        } else if (randomWord.indexOf(lastKey) === -1 && lives > 0) {
            //Logic for incorrect guesses.
            --lives;
            userInput.push(lastKey);
            writeStats();
            console.log("Sorry " + lastKey + " is not a correct guess.");
            // console.log("last entry: " + userInput[userInput.length - 1] + " is NOT in the mystery word!");
            console.log("Lost a life! Current Count " + lives);
        } else if (dashGuesses.indexOf("_") === 0 && (lives < 1)) {
            //User is out of lives, resets the game incriments a loss.
            losses++;
            reset();
        }
    }
}


// Function to write all stats on the page
function writeStats() {
    var html = "<p id=dashes>" + dashGuesses.join(" ") + "</p>" +
        "<p>The word you're guessing is " +
        randomWord.length + " letters long.</p>" +
        "<p> Previous Inputs: " + userInput + "</p>" +
        "<p> Clue: " + clues + "</p>";
    // Write Wins, Lossees & Previous user input
    var gameInfo = "<p>Wins: " + wins + "</p>" +
        "<p>Losses " + losses + "</p>" +
        "<p>Lives: " + lives + "</p>";
    document.querySelector("#gameInfo").innerHTML = gameInfo;
    document.querySelector("#hangman").innerHTML = html;
}

// Initiates a new game by generating a new word and emptying out all index positions for underscore (_)
function randomWordChoice() {

    r = Math.floor(Math.random() * teams.length);
    // randomWord = options[Math.floor(Math.random() * options.length)];
    randomWord = teams[r];
    clues = clues[r];
    console.log("random clue is: " + clues + " Index of R is = " + r + " Random Word = " + randomWord);
    lives = randomWord.length + 1;
    //Empties the previous user input and dashed guess arrays
    userInput = [];
    dashGuesses = [];
    newGame = true;

    for (i = 0; i < randomWord.length; i++) {
        dashGuesses.push("_");
    }
}

//Function to rset H1 alert message when user losses.
function resetAlert() {
    resetAlert = "";
    document.querySelector("#resetAlert").innerHTML = resetAlert;
}

//Begin Logic to replace dash
function getAllIndexes(arr, val) {
    var indexes = [];
    i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
        indexes.push(i);
        // currentI equals the current index in the word that will replace _ for the correct guessed letter.
        var currentI = i;
        var start_index = currentI;
        var number_of_elements_to_remove = 1;
        var replacementElement = userInput[userInput.length - 1]
        if (val === " ") {
            replacementElement = " ";
        }
        // 1st element = Start of the index 2nd element = how many elements to remove, 3rd element = element to replace
        var removed_elements = dashGuesses.splice(start_index, number_of_elements_to_remove, replacementElement);
        console.log("removed index " + removed_elements.indexOf() + " for " + val);
    }
    //checks if the user is a winner at the time of the guess, if so perform win actions.
    if ((dashGuesses.indexOf("_")) < 0) {
        alert("You Know Your NFL Teams!");
    }
    return indexes;
}

//Reset button that resets the game and chooses a new word
$("#resetButton").on("click", function() {
    resetAlert = "";
    $("#lastGuess").html("Last word choice was: " + randomWord + "</h1>");
    document.querySelector("#resetAlert").innerHTML = resetAlert;
    writeStats();
    randomWordChoice();
});

//function that writes the alphabet and creates buttons elements in html
function createButtons() {
    for (i = 0; i < alphabet.length; i++) {
        var letterBtn = $("<button>");
        letterBtn.html("<h1>" + alphabet[i] + "</h1>")
        letterBtn.addClass("letter-button", "letter", "letter-button-color");
        letterBtn.attr("data-letter", alphabet[i]);
        // console.log(letters[i]);

        $("#buttons").append(letterBtn);
    }
}

$('.letter-button').click(document.onkeyup)
    // var indexes = getAllIndexes(randomWord, lastKey);

writeStats();
