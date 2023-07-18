
function getComputerChoice(arr) {
    let choice = Math.floor(Math.random(choices) * arr.length); //math.random selects a number between 0-choices.length -- math.floor returns nearest int
    return arr[choice]; // receives the item from array using random int generated 
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        print('YOU BIG LOSER, PAPER BEATS ROCK');
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        print('WINNER WINNER! ROCK DOES BEAT SCISSORS');
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        print('YOU BIG LOSER, SCISSORS BEATS PAPER');
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        print('WINNER WINNER! PAPER DOES BEAT ROCK');
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        print('YOU BIG LOSER, ROCK BEATS SCISSORS');
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        print('WINNER WINNER! SCISSORS DOES BEAT PAPER');
    }
    else {
        print('TIE GO AGAIN!')
    }
}

const choices = ['rock', "paper", "scissors"];
let playerSelection = prompt("Enter choice", "rock, paper, or scissors");
const computerSelection = getComputerChoice(choices);


console.log(playRound(playerSelection, computerSelection));