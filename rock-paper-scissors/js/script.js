let score = {
    humanScore:  0,
    computerScore: 0,
    tie: 0,
    totalPlayed: 0
}

score = JSON.parse(localStorage.getItem('score'));

let reset = () => {
    if (score.totalPlayed === 5 && score.humanScore > score.computerScore) {
            console.log(`Your score: ${score.humanScore}, Computer Score: ${score.computerScore}. You won the game.`);
            score = {
                humanScore: 0,
                computerScore: 0,
                tie: 0,
                totalPlayed: 0
            }
        } else if (score.totalPlayed === 5 && score.humanScore < score.computerScore) {
            console.log(`Your Score: ${score.humanScore}, Computer Score: ${score.computerScore}. You lost the game. `);
            score = {
                humanScore: 0,
                computerScore: 0,
                tie: 0,
                totalPlayed: 0
            }
        } else if (score.totalPlayed === 5 && score.humanScore === score.computerScore) {
            console.log(`Your Score: ${score.humanScore}, Computer Score: ${score.computerScore}. It's a tie.`);
            score = {
                humanScore: 0,
                computerScore: 0,
                tie: 0,
                totalPlayed: 0
            }
        }
    }

let playGame = () => {
    let getComputerChoice = () => {
        let randomNumber = Math.random();
        let computerChoice = "";
        if (randomNumber < 0.34) {
            computerChoice = 'rock';
        } else if (randomNumber > 0.5) {
            computerChoice =  'paper';
        } else if (randomNumber > 0) {
            computerChoice =  'scissors';
        } return computerChoice;
    }; 
    
    
    
    let getHumanChoice = () => {
        let humanChoice =  prompt("Please enter rock, paper, or scissors").toLowerCase(); 
        if (humanChoice === "rock") {
            humanChoice = "rock";
            
        } else if (humanChoice === "paper") {
            humanChoice = "paper"; 
            
        } else if (humanChoice === "scissors") {
            humanChoice = "scissors";
            
        } return humanChoice;
    } 
     
    
     let playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            score.tie++;
            score.totalPlayed++;
            return {
                log: console.log(`It's a tie! Computer picked ${computerChoice} and you picked ${humanChoice}`),
                score: console.log(score)
            }
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            score.humanScore++;
            score.totalPlayed++;
            return {
                log: console.log(`You win! Computer picked ${computerChoice} and you picked ${humanChoice}. `),
                score: console.log(score)
            }
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            score.humanScore++;
            score.totalPlayed++;
            return {
                log: console.log(`You win! Computer picked ${computerChoice} and you picked ${humanChoice}.`),
                score: console.log(score)
            }
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            score.humanScore++;
            score.totalPlayed++;
            return {
                log: console.log(`You win! Computer picked ${computerChoice} and you picked ${humanChoice}.`),
                score: console.log(score)
            }
        } else {
            score.computerScore++;
            score.totalPlayed++;
            return {
                log: console.log(`You lose! Computer picked ${computerChoice} and you picked ${humanChoice}.`),
                score: console.log(score)
             }
        }
    }
    
     const humanSelection = getHumanChoice();
     const computerSelection = getComputerChoice();
    
     playRound(humanSelection, computerSelection);
}
playGame();
reset();


 localStorage.setItem('score', JSON.stringify(score));