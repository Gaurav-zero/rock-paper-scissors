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

function playRound(humanChoice, computerChoice){
    if(humanChoice == "Rock"){
        if(computerChoice == "Rock"){
            alert("Its a tie!! Both chose Rock");
        }
        else if(computerChoice == "Paper"){
            alert("You lose!! Paper beats Rock");
            computerScore++;
        }
        else{
            alert("You win!! Scissors is beaten by Rock");
            userScore++;
        }
    }

    else if(humanChoice == "Paper"){
        if(computerChoice == "Paper"){
            alert("Its a tie!! Both chose Paper");
        }
        else if(computerChoice == "Scissors"){
            alert("You lose!! Scissors beat Paper");
            computerScore++;
        }
        else{
            alert("You win!! Rock is beaten by Paper");
            userScore++;
        }
    }

    else{
        if(computerChoice == "Scissors"){
            alert("Its a tie!! Both chose Scissors");
        }
        else if(computerChoice == "Rock"){
            alert("You lose!! Rock beats Scissors");
            computerScore++;
        }
        else{
            alert("You win!! Paper is beaten by Scissors");
            userScore++;
        }
    }
}

function playGame(){
    userScore=0;
    computerScore=0;

    for(let i=0; i<5; ++i){
        const humanSelection= getHumanChoice();
        const computerSelection= getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(userScore > computerScore){
        alert("You win!! \n" + userScore + "-" + computerScore);
    }
    else if(userScore < computerScore){
        alert("You lose!! \n" + userScore + "-" + computerScore);
    }
    else alert("It's a tie!! \n" + userScore + "-" + computerScore);
}


playGame();