// the user has to guess which letter the app chose

// Put the following text on your page:
// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting 
// 		all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. 
// Display these until the user either wins or loses.)

// When the player wins, increase the Wins counter and start the game over again 
// (without refreshing the page).

// When the player loses, increase the Losses counter and restart the game without 
// a page refresh (just like when the user wins).




var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessedLetters = [];
var Wins = 0;
var Losses = 0;
var Guessesleft = 9;
var Guessessofar = 0;


var reset = function() {
      totalGuesses = 9;
      guessesLeft = 9;
      guessedLetters = [];

      guessedLeft();
      guessedLetters();
      
    }; 
document.onkeyup = function(event) {
     
    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
	console.log("computer guess: " + computerGuess + ", user guess: " + userGuess);
           
         if (computerGuess === userGuess) {
        Wins ++;
        document.querySelector("#Wins").innerHTML = Wins;

        reset();
    }

           else if (computerGuess !== userGuess) {
             Losses ++;
              document.getElementById("#Losses").innerHTML = Losses;
              
           }
           
  var html = "<p>Press any key to start playing!</p>" +
              "<p>Wins: " + Wins + "</p>" +
              "<p>Losses: " + Losses + "</p>" +
              "<p>Guesses left: " + Guesses + left + "</p>" +
	          "<p>Your Guesses so far: " + Your + Guesses + so + far + "</p>";

	document.querySelector("#game").innerHTML = html;
	
}

