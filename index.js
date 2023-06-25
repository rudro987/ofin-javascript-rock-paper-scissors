function getComputerChoice(){
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[random];
}

function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Please choose 'Rock', 'Paper', 'Scissors': ");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    if(playerSelection === computerSelection){
        return "Tie";
    }else if(
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") || 
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }else{
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

