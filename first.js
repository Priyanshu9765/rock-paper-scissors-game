const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Won" : "You Lose";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Won" : "You Lose";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Won" : "You Lose";
                break;
        }
    }

    // Update UI
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    // Remove previous colors
    resultDisplay.classList.remove("greenText", "redText");

    // Update Score & Apply Color
    if (result === "You Won") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        resultDisplay.classList.add("greenText"); // Green for win
    } else if (result === "You Lose") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        resultDisplay.classList.add("redText"); // Red for loss
    }
}
