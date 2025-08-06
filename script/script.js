function getUserInput(){
    return prompt("Please input either Rock, Paper or Scissor.");
}

function generateComputerInput(){
   return Math.floor(Math.random() * 3) + 1;
}
// 1 - rock, 2 - paper, 3 - scissor
let userInput = String(getUserInput()).toLowerCase();
const computerInput = generateComputerInput();
console.log(computerInput);
function playGame(user, computer){
    if((userInput == 'rock' && computerInput == 1) || (userInput == 'paper' && computer == 2) || (userInput == 'scissor' && computerInput == 3)){
        console.log("DRAW!");
    }
    else if((userInput == 'rock' && computerInput == 3) || (userInput == 'paper' && computerInput == 1) || (userInput == 'scissor' && computerInput == 1)){
            console.log("USER WINS!!")
    }
    else{
        console.log("COMPUTER WINS!!")
    }
}
playGame(userInput, computerInput);