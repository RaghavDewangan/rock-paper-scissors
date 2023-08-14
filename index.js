var playerPts = 0;
var cpuPts = 0;

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
            return "Tie, rock ties against rock"
        }
        else if(computerSelection == "scissors"){
            playerPts += 1;
            return "You Win, rock beats scissors"
            
        }
        else{
            cpuPts += 1;
            return "You Lose, rock loses against paper"
            
        }
    }

    if(playerSelection == "paper"){
        if (computerSelection == "rock")
        {
            playerPts += 1;
            return "You Win, paper beats rock"
            
        }
        else if(computerSelection == "scissors"){
            cpuPts += 1;
            return "You Lose, paper loses against scissors"
            
        }
        else{
            return "Tie, paper ties against paper"
        }
    }

    if(playerSelection == "scissors"){
        if (computerSelection == "rock")
        {
            cpuPts += 1;
            return "You Lose, scissors loses to rock"
            
        }
        else if(computerSelection == "scissors"){
            return "Tie, scissors ties against scissors"
        }
        else{
            playerPts += 1;
            return "You Win, Scissors beats paper"
            
        }
    }



}

//let userInput = window.prompt("Type Rock, Paper, or Scissors for your choice:").toLowerCase();
//let compSel = getComputerChoice();
//console.log("Your input: " + userInput + " Computer Input: " + compSel);
//console.log(round(userInput, compSel));

function game(){
    
    while (playerPts < 5 && cpuPts < 5){
        let userInput = window.prompt("Type Rock, Paper, or Scissors for your choice:").toLowerCase();
        let compSel = getComputerChoice();
        console.log("Your input: " + userInput + " Computer Input: " + compSel);
        console.log(round(userInput, compSel));
        console.log("Your points: " + playerPts);
        console.log("Computer Points: " + cpuPts);
    }
    
    if (playerPts == 5){
        console.log("YOU WIN!!!")
        playerPts = 0;
        cpuPts = 0;
    }
    else{
        console.log("YOU LOSE!!!")
        playerPts = 0;
        cpuPts = 0;
    }
}

game();