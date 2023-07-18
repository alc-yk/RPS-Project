
function getComputerChoice(arr) {
    let choice = Math.floor(Math.random(choices) * arr.length); //math.random selects a number between 0-choices.length -- math.floor returns nearest int
    return arr[choice]; // receives the item from array using random int generated 
}

function playRound (playerSelection, computerSelection) {



}

const choices = ['rock', "paper", "scissors"];
let playerSelection = prompt("Enter choice", "rock, paper, or scissors");
const computerSelection = getComputerChoice(choices);

console.log(computerSelection)
