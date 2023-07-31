
function getComputerChoice(arr) {
    let choice = Math.floor(Math.random(choices) * arr.length); //math.random selects a number between 0-choices.length -- math.floor returns nearest int
    return arr[choice]; // receives the item from array using random int generated 
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'YOU BIG LOSER, PAPER BEATS ROCK';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'WINNER WINNER! ROCK DOES BEAT SCISSORS';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'YOU BIG LOSER, SCISSORS BEATS PAPER';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'WINNER WINNER! PAPER DOES BEAT ROCK';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'YOU BIG LOSER, ROCK BEATS SCISSORS';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'WINNER WINNER! SCISSORS DOES BEAT PAPER';
    }
    else {
        return 'TIE GO AGAIN!';
    }
}
/*
function game (playerSelection) {
    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++) {

        const choices = ['rock', "paper", "scissors"];
        const computerSelection = getComputerChoice(choices);
        let playerInput = prompt("Enter choice", "rock, paper, or scissors");
        let playerSelection = playerInput.toLowerCase();
        const result = playRound(playerSelection, computerSelection);

        if (result === 'YOU BIG LOSER, PAPER BEATS ROCK') {
             player++;
            console.log('YOU BIG LOSER, PAPER BEATS ROCK');
        }
        else if (result === 'WINNER WINNER! ROCK DOES BEAT SCISSORS') {
             player++;
             console.log('WINNER WINNER! ROCK DOES BEAT SCISSORS');
        }
        else if (result === 'YOU BIG LOSER, SCISSORS BEATS PAPER') {
             computer++;
             console.log('YOU BIG LOSER, SCISSORS BEATS PAPER');
        }
        else if (result === 'WINNER WINNER! PAPER DOES BEAT ROCK') {
             player++;
             console.log('WINNER WINNER! PAPER DOES BEAT ROCK');
        }
        else if (result === 'YOU BIG LOSER, ROCK BEATS SCISSORS') {
             computer++;
             console.log('YOU BIG LOSER, ROCK BEATS SCISSORS');
        }
        else if (result === 'WINNER WINNER! SCISSORS DOES BEAT PAPER') {
             player++;
             console.log('WINNER WINNER! SCISSORS DOES BEAT PAPER');
        }
        else{}
    }

    if(player > computer){
      return 'YOU WIN!';
    }
    else if(player < computer){
       return 'YOU LOSE!';
    }
    else{
    }

}
*/

function game(playerInput) {

        const choices = ['rock', "paper", "scissors"];
        const computerSelection = getComputerChoice(choices);
        let playerSelection = playerInput.toLowerCase();
        const result = playRound(playerSelection, computerSelection);

        if (result === 'YOU BIG LOSER, PAPER BEATS ROCK') {
            console.log('YOU BIG LOSER, PAPER BEATS ROCK');
            return 'computer';
        }
        else if (result === 'WINNER WINNER! ROCK DOES BEAT SCISSORS') {
             console.log('WINNER WINNER! ROCK DOES BEAT SCISSORS');
              return 'player';
        }
        else if (result === 'YOU BIG LOSER, SCISSORS BEATS PAPER') {
             console.log('YOU BIG LOSER, SCISSORS BEATS PAPER');
              return 'computer';
        }
        else if (result === 'WINNER WINNER! PAPER DOES BEAT ROCK') {

             console.log('WINNER WINNER! PAPER DOES BEAT ROCK');
              return 'player';
        }
        else if (result === 'YOU BIG LOSER, ROCK BEATS SCISSORS') {

             console.log('YOU BIG LOSER, ROCK BEATS SCISSORS');
              return 'computer';
        }
        else if (result === 'WINNER WINNER! SCISSORS DOES BEAT PAPER') {
            console.log('WINNER WINNER! SCISSORS DOES BEAT PAPER');
             return 'player';
        }
        else{
            console.log('TIE!');
            return 'tie';
        }


}

let playerScore = 0;
let computerScore = 0;


const choices = ['rock', "paper", "scissors"];

for (let i = 0; i < 5; i++) {

    let playerInput = prompt("Enter choice", "rock, paper, or scissors");

    const computerSelection = getComputerChoice(choices);
    const result = (game(playerInput));

    if (result === 'player'){
        if(playerScore == 3 || computerScore == 3){
            break;
        }
        else{
            playerScore++;
            console.log(playerScore);
            console.log(computerScore);
        }

    }
    else if (result === 'computer'){
        if(playerScore == 3 || computerScore == 3){
            break;
        }
        else{
            computerScore++;
            console.log(playerScore);
            console.log(computerScore);
        }
    }
    else if(result === 'tie'){
        i--;

        console.log(playerScore);
        console.log(computerScore);
    }


}

if(playerScore > computerScore){
       console.log('YOU WIN!');
    }
else if(playerScore < computerScore){
        console.log('YOU LOSE!');
    }
