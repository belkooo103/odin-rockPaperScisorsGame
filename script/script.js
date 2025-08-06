function getUserInput(){
    return prompt("Please input either Rock, Paper or Scissors.");
}

// 1 - rock, 2 - paper, 3 - scissor
function generateComputerInput(){
   return Math.floor(Math.random() * 3) + 1;
}

let userWinCount = parseInt(0);
let computerWinCount = parseInt(0);
function playRound(){
    
    let userInput = String(getUserInput()).toLowerCase();
    const computerInput = generateComputerInput();
    if((userInput == 'rock' && computerInput == 1) || (userInput == 'paper' && computerInput == 2) || (userInput == 'scissors' && computerInput == 3)){
        console.log("DRAW!");
    }
    else if((userInput == 'rock' && computerInput == 3) || (userInput == 'paper' && computerInput == 1) || (userInput == 'scissors' && computerInput == 1)){
            console.log("USER WINS!!")
            userWinCount = userWinCount + 1;
            console.log(`User: ${userWinCount} || Computer: ${computerWinCount}.` )
    }
    else{
        console.log("COMPUTER WINS!!")
        computerWinCount++;
         console.log(`User: ${userWinCount} || Computer: ${computerWinCount}.` )
    }
   
}
function playGame(roundsNumber){
   for(let i = 0; i < roundsNumber; i++){
     playRound();
   }
}
playGame(5);