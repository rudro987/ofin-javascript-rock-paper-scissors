let playerWin = 0;
let computerWin = 0;
let tie = 0;
function getComputerChoice(){
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[random];
}

function playRound(playerSelection, computerSelection){
    
    playerSelection = prompt("Please choose 'Rock', 'Paper', 'Scissors': ");
    while(playerSelection === null) {
        playerSelection = prompt("Please choose 'Rock', 'Paper', 'Scissors': ");
    }
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();
    console.log(playerSelection,computerSelection);
    if(playerSelection === computerSelection){
        tie++;
    }else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        playerWin++;
        
    }else{
        computerWin++;
    }
}

function gamePlay(){
    for(let i = 1; i <= 5; i++){
        playRound();
        console.log(playerWin, computerWin, tie);
    }
if(playerWin > computerWin){
    return `You win! you scored ${playerWin} and computer scored ${computerWin}. you tied ${tie} times`;
}else if(playerWin < computerWin){
    return `You lose! you scored ${playerWin} and computer scored ${computerWin}. you tied ${tie} times`;
}else{
    return `Game tied! you scored ${playerWin} and computer scored ${computerWin}. you tied ${tie} times`;
}
}

console.log(gamePlay());