function getComputerChoice(){
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[random];
}

