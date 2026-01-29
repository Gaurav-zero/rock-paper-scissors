let userScore=0;
let computerScore=0;

function getComputerChoice(){
    let num= Math.floor(Math.random() * 100) + 1;

    if(num <= 33) return( "Rock" );
    else if(num > 33 && num <= 66)  return( "Paper" );
    else  return( "Scissors" );
}

function getHumanChoice(){
    let choice= prompt("Enter:- 1 for 'Rock' \n 2 for 'Scissors' \n3 for 'Paper'");

    if(choice==1) return "Rock";
    else if(choice == 2) return "Scissors";
    else return "Paper";
}