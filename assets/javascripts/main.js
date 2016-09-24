$('.rock-background').data('userGuess','rock');
$('.paper-background').data('userGuess','paper');
$('.scissors-background').data('userGuess','scissors');
// Sets the computer choices
var computerChoices = ['rock', 'paper', 'scissors'];

// Declares the tallies to 0
var wins = 0;
var losses = 0;
var ties = 0;

// function to clear opponent's pick
function clearOpponentGuess(){
  if (lastOpponentGuess != '') {
    $('#opponent').children('.'+lastOpponentGuess+'-background').addClass('disabled');
  }
}
// function to show opponent has made a selection
function yesOpponentGuess(){
    $('#opponent').find('.input').removeClass('disabled');
}
// function to show no active opponent input
function noOpponentGuess(){
    $('#opponent').find('.input').addClass('disabled');
}




// loads the userGuess on button click
var userGuess;
$('.btn-guess').click(function() {
  userGuess = $(this).data('userGuess');
  $('#user').find('.btn-guess').addClass('disabled');
  $('#user').find('.input').removeClass('disabled');
  $('#user').find('.'+userGuess+'-background').removeClass('disabled');
  clearOpponentGuess(); // clears any previous opponent selections
  yesOpponentGuess(); // simulates that the opponent has made a selection
});

// submits selection with input button
var lastOpponentGuess = '';
$('.input').click(function() {
  $(this).addClass('disabled')
  noOpponentGuess(); // adds disabled class to the input
  // This sets the computer guess equal to the random.
  var opponentGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  $('#userGuess').attr('src', 'assets/images/'+userGuess+'.png');
  $('#opponentGuess').attr('src', 'assets/images/'+opponentGuess+'.png');
  $('#opponent').find('.'+opponentGuess+'-background').removeClass('disabled');
  lastOpponentGuess = opponentGuess;
  // Making sure the user chooses rock, paper, or scissors
  if ((userGuess == 'rock') || (userGuess == 'paper') || (userGuess == 'scissors')){
    // It tests to determine if the computer or the user won the round and then increments
    if ((userGuess == 'rock') && (opponentGuess == 'scissors')){
      wins++;
    }else if ((userGuess == 'rock') && (opponentGuess == 'paper')){
      losses++;
    }else if ((userGuess == 'scissors') && (opponentGuess == 'rock')){
      losses++;
    }else if ((userGuess == 'scissors') && (opponentGuess == 'paper')){
      wins++;
    }else if ((userGuess == 'paper') && (opponentGuess == 'rock')){
      wins++;
    }else if ((userGuess == 'paper') && (opponentGuess == 'scissors')){
      losses++;
    }else if (userGuess == opponentGuess){
      ties++;
    }
    // Taking the tallies and displaying them in HTML
    var html = "<div class='col s4 center-align'>wins: "+wins+"</div>"+"<div class='col s4 center-align'>losses: "+losses+"</div>"+"<div class='col s4 center-align'>ties: "+ties+"</div>";
    // Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;
  }
});