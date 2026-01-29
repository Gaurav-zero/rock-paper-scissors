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
            console.log("Its a tie!! Both chose Rock");
        }
        else if(computerChoice == "Paper"){
            console.log("You lose!! Paper beats Rock");
            computerScore++;
        }
        else{
            console.log("You win!! Scissors is beaten by Rock");
            userScore++;
        }
    }

    else if(humanChoice == "Paper"){
        if(computerChoice == "Paper"){
            console.log("Its a tie!! Both chose Paper");
        }
        else if(computerChoice == "Scissors"){
            console.log("You lose!! Scissors beat Paper");
            computerScore++;
        }
        else{
            console.log("You win!! Rock is beaten by Paper");
            userScore++;
        }
    }

    else{
        if(computerChoice == "Scissors"){
            console.log("Its a tie!! Both chose Scissors");
        }
        else if(computerChoice == "Rock"){
            console.log("You lose!! Rock beats Scissors");
            computerScore++;
        }
        else{
            console.log("You win!! Paper is beaten by Scissors");
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
        console.log("You win!!");
    }
    else if(userScore < computerScore){
        console.log("You lose!!");
    }
    else console.log("It's a tie!!");

    console.log(userScore + "-" + computerScore);
}