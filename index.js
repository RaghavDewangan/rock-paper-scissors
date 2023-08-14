function getComputerChoice(){
    let val = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (val == 1) {
        return "rock"
    }
    else if (val == 2) {
        return "paper"
    }
    else{
        return "scissors"
    }
}

//console.log(getComputerChoice())



//console.log(userInput)


function round(playerSelection, computerSelection){
    //computerSelection = getComputerChoice();
    //playerSelection = userInput.toLowerCase() //non case sensitive input;

    if(playerSelection == "rock"){
        if (computerSelection == "rock")
        {
            return "Tie"
        }
        else if(computerSelection == "scissors"){
            return "You Win"
        }
        else{
            return "You Lose"
        }
    }

    if(playerSelection == "paper"){
        if (computerSelection == "rock")
        {
            return "You Win"
        }
        else if(computerSelection == "scissors"){
            return "You Lose"
        }
        else{
            return "Tie"
        }
    }

    if(playerSelection == "scissors"){
        if (computerSelection == "rock")
        {
            return "You Lose"
        }
        else if(computerSelection == "scissors"){
            return "Tie"
        }
        else{
            return "You Win"
        }
    }



}

let userInput = window.prompt("Type Rock, Paper, or Scissors for your choice:").toLowerCase();
let compSel = getComputerChoice();
console.log("Your input: " + userInput + " Computer Input: " + compSel);
console.log(round(userInput, compSel));

