const rockButtonUser = document.querySelector('.button-rock');
const paperButtonUser = document.querySelector('.button-paper');
const scissorsButtonUser = document.querySelector('.button-scissors');

const rockButtonComputer = document.querySelector('#rock-computer');
const paperButtonComputer = document.querySelector('#paper-computer');
const scissorsButtonComputer = document.querySelector('#scissors-computer');

let userScore = 0;
let computerScore = 0;

const playerScore = document.querySelector('.player-score');
const computerScoreOutput = document.querySelector('.computer-score');
const resultOutput = document.querySelector('.container-text');

const buttonsUser = {
    rock: rockButtonUser,
    paper: paperButtonUser,
    scissors: scissorsButtonUser
};

const buttonsComputer = {
    rock: rockButtonComputer,
    paper: paperButtonComputer,
    scissors: scissorsButtonComputer
};

function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function resetStyles() {
    Object.values(buttonsUser).forEach(btn => btn.style.backgroundColor = 'transparent');
    Object.values(buttonsComputer).forEach(btn => btn.style.backgroundColor = 'transparent');
}


function highlightChoices(userChoice, computerChoice, result) {
    if (result === 'draw') {
        buttonsUser[userChoice].style.backgroundColor = 'orange';
        buttonsComputer[computerChoice].style.backgroundColor = 'orange';
    } else if (result === 'user') {
        buttonsUser[userChoice].style.backgroundColor = 'green';
        buttonsComputer[computerChoice].style.backgroundColor = 'red';
    } else {
        buttonsUser[userChoice].style.backgroundColor = 'red';
        buttonsComputer[computerChoice].style.backgroundColor = 'green';
    }
}


function playGame(userChoice) {
    resetStyles();
    
    const computerChoice = generateComputerChoice();
    let result;

    if (userChoice === computerChoice) {
        result = 'draw';
        resultOutput.textContent = "DRAW!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = 'user';
        resultOutput.textContent = "USER WINS!";
        userScore++;
        playerScore.textContent = userScore;
    } else {
        result = 'computer';
        resultOutput.textContent = "COMPUTER WINS!";
        computerScore++;
        computerScoreOutput.textContent = computerScore;
    }

    highlightChoices(userChoice, computerChoice, result);
}


rockButtonUser.addEventListener('click', () => playGame('rock'));
paperButtonUser.addEventListener('click', () => playGame('paper'));
scissorsButtonUser.addEventListener('click', () => playGame('scissors'));
