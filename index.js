function getComputerChoice(){
    let val = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (val == 1) {
        return "Rock"
    }
    else if (val == 2) {
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

console.log(getComputerChoice())

const userInput = window.prompt("Choose Rock, Paper, or Scissors:");


function round(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    
}