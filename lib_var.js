
//✊✋✌


function enterName() {
  let text;
  
  var person = prompt("Enter your name:", "yourname");
  if (person == null || person == "" || person == "yourname") {
    text = "ok keep your secret";
  } else {
    text = "hey " + person + "!<br> Click the 'learn more' button for more information about the game";
  }
  document.getElementById("hello-text").innerHTML = text;
}

function whoAmI() {
  let url = 'https://github.com/Mike02vigaiga';
  window.open(url, '_blank').focus();
}

//////////////////////////game////////////////////////////
var computerScore = 0;
var userScore = 0;
////////

function randomSelection() {
  const randomNum = Math.floor(Math.random() * 3)
  return randomNum;
}

function whoWin(user) {
  var computer = randomSelection();
  var score = "nobody";
  switch (user) {
    case 1:
      if (computer == 1) { score = "computer" }
      if (computer == 2) { score = "you" }
      break;
    case 2:
      if (computer == 2) { score = "computer" }
      if (computer == 0) { score = "you" }
      break;
    case 3:
      if (computer == 0) { score = "computer" }
      if (computer == 1) { score = "you" }
      break;
    default:
    // nothing
  }
  addScore(score);

  let output = "the winner is: " + score;
  document.getElementById("winner").innerHTML = output;
  tenWin();
}

function addScore(score) {
  switch (score) {
    case 'computer':
      computerScore += 1;
      outcp = "--> Computer score: " + computerScore;
      document.getElementById("cp-score").innerHTML = outcp;
      break;
    case 'you':
      userScore += 1;
      outus = "--> Your score: " + userScore;
      document.getElementById("us-score").innerHTML = outus;
      break;

    default:
    // nothing
  }

}


function tenWin() {
  let finalWinner;
  if (computerScore == 10) {
    Swal.fire({
      icon: 'error',
      title: 'YOU LOSE ☹️',
      text: 'try again!',
      footer: 'click "ok" to reset the score'
    })
    reset()
  } else {
    if (userScore == 10) {
      Swal.fire({
        icon: 'success',
        title: 'YOU WIN 😄',
        text: 'Good job!',
        footer: 'click "ok" to reset the score'
      })
      reset()
    }
  }
}


function reset(){

  computerScore = 0; 
  outcp = "--> Computer score: " + computerScore;
      document.getElementById("cp-score").innerHTML = outcp;

  userScore = 0;
  outus = "--> Your score: " + userScore;
      document.getElementById("us-score").innerHTML = outus;
}