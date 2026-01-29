let userScore=0;
let computerScore=0;

function getComputerChoice(){
    let num= Math.floor(Math.random() * 100) + 1;

    if(num <= 33) return( "Rock" );
    else if(num > 33 && num <= 66)  return( "Paper" );
    else  return( "Scissors" );
}

function getHumanChoice(){
    let choice= prompt("Enter Rock, Paper or Scissors");

    if(choice.toLowerCase()=="rock") return "Rock";
    else if(choice.toLowerCase() == "scissors") return "Scissors";
    else return "Paper";
}