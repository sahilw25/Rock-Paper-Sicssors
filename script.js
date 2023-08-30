let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let playerSelection,computerSelection;


        // This function gets a random choice between rock paper and scissors and stores it as the computer's choice
function computerPlay() 
{
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function round (player, computer)
{
    
    if (player == 'rock') 
    {
        if (computer == 'paper') 
        {
            console.log(`You lose! You chose ${player} and the computer chose ${computer}`);  
            computerScore++;
        }
        else if (computer == 'scissors')
        {
            console.log(`You win! You chose ${player} and the computer chose ${computer}`); 
            playerScore++;
        }
        else 
        {
            console.log(`It's a draw! You both chose ${player}`);
        }
    }
    if (player == 'paper') 
    {
        if (computer == 'scissors')
        {
            console.log(`You lose! You chose ${player} and the computer chose ${computer}`);  
            computerScore++;
        }
        else if (computer == 'rock')
        {
            console.log(`You win! You chose ${player} and the computer chose ${computer}`);  
            playerScore++;
        }
        else 
        {
            console.log(`It's a draw! You both chose ${player}`);
        }
    }
    if (player == 'scissors') 
    {
        if (computer == 'rock') 
        {console.log(`You lose! You chose ${player} and the computer chose ${computer}`);  
        computerScore++;}
        else if (computer == 'paper') 
        {
            console.log(`You win! You chose ${player} and the computer chose ${computer}`);  
            playerScore++;
        }
        else 
        {
            console.log(`It's a draw! You both chose ${player}`);
        }
    }

}

function game () {
    while (rounds < 6) 
    {
        let userInput=prompt('Please select rock, paper, or scissors');
        if (userInput.toLowerCase() == 'rock')
        {
            playerSelection='rock';
        }
        else if (userInput.toLowerCase() == 'paper')
        {
            playerSelection='paper';
        }
        else if (userInput.toLowerCase() == 'scissors')
        {
            playerSelection='scissors';
        }
        else
        {
            alert("You didn't pick rock, paper, or scissors. Please choose an appropiate weapon.");
            continue;
        }
        computerSelection = computerPlay();
        console.log(round(playerSelection, computerSelection));
        rounds++;
    }
    if (playerScore > computerScore) 
    {
        console.log(`You win with a score of ${playerScore} while the computer only had a score of ${computerScore}`);
    } 
    else if (computerScore > playerScore) 
    {
        console.log(`The computer wins with a score of ${computerScore} while you only had a score of ${playerScore}`);
    }           
}
