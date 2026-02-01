let userScore=0;
let computerScore=0;

const result= document.querySelector("p");
const btns= document.querySelectorAll("button");

function getComputerChoice(){
    let num= Math.floor(Math.random() * 100) + 1;

    if(num <= 33) return( "Rock" );
    else if(num > 33 && num <= 66)  return( "Paper" );
    else  return( "Scissors" );
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == "Rock"){
        if(computerChoice == "Rock"){
            result.textContent="Its a tie!!"+
                                userScore + "-" + computerScore;
        }
        else if(computerChoice == "Paper"){
            computerScore++;
            result.textContent="You lose!!"+
                                userScore + "-" + computerScore;            
        }
        else{
            userScore++;
            result.textContent="You win!!"+
                                userScore + "-" + computerScore;            
        }
    }

    else if(humanChoice == "Paper"){
        if(computerChoice == "Paper"){
            result.textContent="Its a tie!!"
                                userScore + "-" + computerScore;
        }
        else if(computerChoice == "Scissors"){
            computerScore++;
            result.textContent="You lose!!"+
                                userScore + "-" + computerScore;            
        }
        else{
            userScore++;
            result.textContent="You win!!"+
                                userScore + "-" + computerScore;            
        }
    }

    else{
        if(computerChoice == "Scissors"){
            result.textContent="Its a tie!!"
                                userScore + "-" + computerScore;
        }
        else if(computerChoice == "Rock"){
            computerScore++;
            result.textContent="You lose!!"+
                                userScore + "-" + computerScore;            
        }
        else{
            userScore++;
            result.textContent="You win!!"+
                                userScore + "-" + computerScore;            
        }
    }

    if(userScore >=5 || computerScore >= 5){
       let winnerText= document.createTextNode("");

       if(userScore>computerScore){
        winnerText.textContent= "You win";
       }
       else winnerText.textContent= "You lose";

       result.appendChild(winnerText);

       userScore=0;
       computerScore=0;
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", (event) =>{
        let humanSelection="Rock";

        switch(event.currentTarget.id){
            case "rock":
                humanSelection= "Rock";
                break;
            case "paper":
                humanSelection= "Paper";
                break;
            case "scissors":
                humanSelection= "Scissors";
                break;
        }

        let computerSelection= getComputerChoice();

        playRound(humanSelection, computerSelection);
    });
});


