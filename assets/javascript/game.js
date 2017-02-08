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
var Wins = 0;
var Losses = 0;
var Guessesleft = 13;
var Guessessofar = 0;

document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
	console.log("computer guess: " + computerGuess + ", user guess: " + userGuess);
           if (computerGuess === userGuess) {
             
             if (computerGuess === userGuess[Wins][1]) {
            score++;
            updateWins();
               document.getElementById("Wins").innerHTML = "Wins: " + ++Wins;
//then you want to reset you guesses which i created for you back to empty string to reset...
// when the game is over i put everything back into reset() function to reset guessesleft back to 13 
// and guess back to empty string....

           }

           else  if (computerGuess !== userGuess) {
              //now try do it for loss
              document.getElementById("Losses").innerHTML = "Losses: " + ++Losses;
              //when user !== computerguess... add the letter to the screen with innherhtml
           }
           
  // var html = "<p>Press any key to start playing!</p>" +
  //           "<p>Wins: " + Wins + "</p>" +
	//           "<p>Losses: " + Losses + "</p>" +
	 //          "<p>Guesses left: " + Guesses + left + "</p>" +
	   //       "<p>Your Guesses so far: " + Your + Guesses + so + far + '' "</p>";

	// document.querySelector("#game").innerHTML = html;
	
}

