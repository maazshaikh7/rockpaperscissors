let playerScore = 0;
let computerScore = 0; 
function computerHand() {
    let variables = ['rock', 'paper', 'scissors'];
    return variables[Math.floor(Math.random()*variables.length)];
}
function playRound(playerChoice, computerChoice){
    if(playerScore < 5 && computerScore < 5){
        if(playerChoice == 'rock'){
            playerChoiceIcon.className = 'fas fa-hand-rock';
        }
        else if (playerChoice == 'paper') {
            playerChoiceIcon.className = 'fas fa-hand-paper';
        }
        else if (playerChoice == 'scissors') {
            playerChoiceIcon.className = 'fas fa-hand-scissors';
        }
        if (computerChoice == 'rock') {
            computerChoiceIcon.className = 'fas fa-hand-rock';
        }
        else if (computerChoice == 'paper') {
            computerChoiceIcon.className = 'fas fa-hand-paper';
        }
        else if (computerChoice == 'scissors') {
            computerChoiceIcon.className = 'fas fa-hand-scissors';
        }
        if(playerChoice == 'rock' && computerChoice == 'scissors'){
            roundResult.textContent = "YOU WIN!";
            playerScore++;
            playerCurrentScore.textContent = playerScore;
        }
        else if(playerChoice == 'rock' && computerChoice == 'paper'){
            roundResult.textContent = "YOU LOSE!";
            computerScore++;
            computerCurrentScore.textContent = computerScore;
        }
        else if (playerChoice == 'paper' && computerChoice == 'rock') {
            roundResult.textContent = "YOU WIN!";
            playerScore++;
            playerCurrentScore.textContent = playerScore;
        }
        else if (playerChoice == 'paper' && computerChoice == 'scissors') {
            roundResult.textContent = "YOU LOSE!";
            computerScore++;
            computerCurrentScore.textContent = computerScore;
        }
        else if (playerChoice == 'scissors' && computerChoice == 'paper') {
            roundResult.textContent = "YOU WIN!";
            playerScore++;
            playerCurrentScore.textContent = playerScore;
        }
        else if (playerChoice == 'scissors' && computerChoice == 'rock') {
            roundResult.textContent = "YOU LOSE!";
            computerScore++;
            computerCurrentScore.textContent = computerScore;
        }
        else if(playerChoice == computerChoice){
            roundResult.textContent = "TIE!";
        }
        if (roundResult.textContent == 'YOU WIN!') {
            roundResult.style.cssText = 'text-shadow: 0px 0px 10px green, 0px 0px 20px green, 0px 0px 40px green, 0px 0px 80px green';
        }
        else if (roundResult.textContent == "YOU LOSE!"){
            roundResult.style.cssText = 'text-shadow: 0px 0px 10px red, 0px 0px 20px red, 0px 0px 40px red, 0px 0px 80px red';
        }
        else if(roundResult.textContent == "TIE!"){
            roundResult.style.cssText = 'text-shadow: 0px 0px 10px yellow, 0px 0px 20px yellow, 0px 0px 40px yellow, 0px 0px 80px yellow';
        }
        if(playerScore == 5 || computerScore == 5){
            playerCurrentScore.textContent = playerScore;
            computerCurrentScore.textContent = computerScore;
            blurAndPopup();
        }
    }
}
function blurAndPopup() {
    let blur = document.querySelector('.wrapper');
    blur.classList.toggle('active');
    let popup = document.querySelector('#popup');
    popup.classList.toggle('active'); 
    const restartButton = document.querySelector('#restart-button');
    const gameResult = document.querySelector('#game-result');
    const popupWindow = document.querySelector('#popup.active');
    if (playerScore == 5) {
        gameResult.textContent = "YOU WIN!";
        popupWindow.style.cssText ="box-shadow: 0px 0px 10px rgb(88, 255, 88), 0px 0px 20px rgb(88, 255, 88), 0px 0px 40px rgb(88, 255, 88), 0px 0px 80px rgb(88, 255, 88); background-color: rgb(166, 255, 166)";
    }
    else if(computerScore == 5){
        gameResult.textContent = "YOU LOSE!";
        popupWindow.style.cssText = "box-shadow: 0px 0px 10px rgb(255, 97, 97), 0px 0px 20px rgb(255, 97, 97), 0px 0px 40px rgb(255, 97, 97), 0px 0px 80px rgb(255, 97, 97); background-color: rgb(255, 214, 214)";
    }
    restartButton.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;
        playerCurrentScore.textContent = playerScore;
        computerCurrentScore.textContent = computerScore;
        roundResult.textContent = "";
        computerChoiceIcon.className = "";
        playerChoiceIcon.className = "";
    })     
}
const playerChoiceIcon = document.querySelector('#player-choice');
const computerChoiceIcon = document.querySelector('#computer-choice');
const roundResult = document.querySelector('#round-result');
const playerCurrentScore = document.querySelector('#player-score');
const computerCurrentScore = document.querySelector('#computer-score');
const rockBtn = document.querySelector('#rock-button');
const paperBtn = document.querySelector('#paper-button');
const scissorsBtn = document.querySelector('#scissors-button');
rockBtn.addEventListener("click", () => {
    playRound('rock', computerHand());
})
paperBtn.addEventListener("click", () => {
    playRound('paper', computerHand());
})
scissorsBtn.addEventListener("click", () => {
    playRound('scissors', computerHand());
})