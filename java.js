
function getComputerChoice(arr) {
    let choice = Math.floor(Math.random(choices) * arr.length); //math.random selects a number between 0-choices.length -- math.floor returns nearest int
    return arr[choice]; // receives the item from array using random int generated 
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('YOU BIG LOSER, PAPER BEATS ROCK');
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('WINNER WINNER! ROCK DOES BEAT SCISSORS');
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('YOU BIG LOSER, SCISSORS BEATS PAPER');
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('WINNER WINNER! PAPER DOES BEAT ROCK');
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('YOU BIG LOSER, ROCK BEATS SCISSORS');
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('WINNER WINNER! SCISSORS DOES BEAT PAPER');
    }
    else {
        console.log('TIE GO AGAIN!')
    }
}

const choices = ['rock', "paper", "scissors"];
let playerSelection = prompt("Enter choice", "rock, paper, or scissors");
const computerSelection = getComputerChoice(choices);

//console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));