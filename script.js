const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const resultDisplay = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const btnReset = document.getElementById("reset");
let userScore = 0;
let computerScore = 0;
btnReset.style.display = "none";
const getComputerChoice = () =>{
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    return computerChoice;
}

const hasPlayerWon = (userChoice,computerChoice) =>{
    if(userChoice === computerChoice){
        return `It's a tie! you both chose ${userChoice}`;
    }else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ){
        userScore++;
        userScoreDisplay.innerText = `You Score: ${userScore}`;
        return `You win! ${userChoice} beats ${computerChoice}`;
}else{
        computerScore++;
        computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;
        return `You lose! ${computerChoice} beats ${userChoice}`;
    };
};
const playgame = (userChoice) => {
    const computerChoice = getComputerChoice();
    const result = hasPlayerWon(userChoice, computerChoice);
    resultDisplay.innerText = result;
    if (userScore === 5|| computerScore === 5) {
      btnReset.style.display = "block";
      btnPaper.style.display = "none";
      btnRock.style.display = "none";
        btnScissors.style.display = "none";
        resultDisplay.innerText = userScore === 5 ? "You win the game!" : "Computer wins the game!";
    }
};
const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.innerText = `You Score: ${userScore}`;
    computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    resultDisplay.innerText = "Choose your move!";
    btnReset.style.display = "none";
    btnPaper.style.display = "inline-block";
    btnRock.style.display = "inline-block";
    btnScissors.style.display = "inline-block";
};
btnReset.addEventListener("click", resetGame);
btnRock.addEventListener("click", () => playgame("rock"));
btnPaper.addEventListener("click", () => playgame("paper"));    
btnScissors.addEventListener("click", () => playgame("scissors"));

 
