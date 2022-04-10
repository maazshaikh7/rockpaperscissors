let computerSelection = "";
let playerSelection = "";
function computerPlay() {
let i = Math.floor(Math.random() * 3);

// if 0, it's rock
if (i === 0) {
    computerSelection = "rock";
}
// if 1 it's paper
else if (i === 1) {
    computerSelection = "paper";
}
// if 2 (or 3) it's scissors
else {
    computerSelection = "scissors";
}
// return the selection via a string
return computerSelection;
};
// get user's play and sanatise



function userPlay() {
return playerSelection = prompt("Please choose Rock, paper or scissors", "rock").toLowerCase();
};

// Function will play a single round of rock, paper, scissors. Requires user input. 
function playRound(playerSelection , computerSelection){
let result = ""
if (playerSelection === computerSelection){
    result =  "tied"
}
else if (playerSelection === "rock"){
    if (computerSelection === "scissors"){
          result = "won"
    }
    else if (computerSelection === "paper"){
        result = "lost"
    }
}
else if (playerSelection === "paper"){
    if (computerSelection === "rock"){
        result = "won"
    }
    else if (computerSelection === "scissors"){
        result = "lost"
    }
}
else if (playerSelection === "scissors"){
    if (computerSelection === "rock") {
        result = "lost"
    }
    else if (computerSelection === "paper") {
        result = "won"
    }
};

//checking the result
if (result === "tied") {
     return [result, `You both have chosen ${playerSelection}! It's a tie.`];
}
else if (result === "lost") {
    return [result, `You lose! ${computerSelection} beats ${playerSelection}.`];
}
else if (result === "won") {
    return [result, `You win! ${playerSelection} beats ${computerSelection}.`];
};
};



console.log(computerPlay())
console.log(userPlay())
console.log(playRound(playerSelection , computerSelection))
