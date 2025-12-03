const buttons = document.querySelectorAll(".btn button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');
const roundCountEl = document.getElementById("round-count");
const maxRoundsEl = document.getElementById("max-rounds");
const restGame = document.getElementById('reset-button')


let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let maxRounds = 5;

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Agar game khatam ho chuka hai, clicks kaam nahi kare
        if (rounds === maxRounds) return;

        const result = playRound(btn.id, computerPlay());
        resultEl.textContent = result;

        rounds++; // round count increase
        roundCountEl.textContent = rounds 

        // 5 rounds complete -> winner declare
        if (rounds === maxRounds) {
            resultEl.textContent = declareWinner();
        }
    });
});

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore
        return `'You win!' ${playerSelection} beats ${computerSelection}`
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    
}

const declareWinner = () => {
    if (playerScore > computerScore) {
        return `🎉 Game Over! You WIN the game!`;
    } else if (computerScore > playerScore) {
        return `💀 Game Over! Computer WINs the game!`;
    } else {
        return `🤝 Game Over! It's a TIE!`;
    }
}

// reset button

  restGame.addEventListener('click', ()=> {
    location.reload();
  })