var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var letterindex = letters [getletter];

document.onkeyup = function(event) {

var userGuess = event.key;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];









var html = "<p>Press any key to start playing!</p>" +
          "<p>Wins: " + Wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + Guesses + left + "</p>" +
          "<p>Your Guesses so far: " + Your + Guesses + so + far + "</p>";

document.querySelector("#game").innerHTML = html;

