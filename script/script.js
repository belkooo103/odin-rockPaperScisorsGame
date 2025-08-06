function getUserInput(){
    return prompt("Please enter 1 for rock, 2 for paper, 3 for scissors.");
}
function getComputerInput(){
    return Math.floor(Math.random * 3) + 1;
}