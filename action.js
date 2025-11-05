let computerMove = "";
let result = "";
let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0,
    };
}
scoreDisplay();
function computerTurn() {
    num = Math.random();
    if (num >= 0 && num < 1 / 3) computerMove = "rock";
    else if (num >= 1 / 3 && num < 2 / 3) computerMove = "paper";
    else if (num >= 2 / 3 && num < 1) computerMove = "scissors";
    return computerMove;
}
function playGame(computerMove, player) {
    if (player === "paper") {
        if (computerMove === "rock") result = "You win";
        else if (computerMove === "paper") result = "Tie";
        else if (computerMove === "scissors") result = "You lose";
    } else if (player === "rock") {
        if (computerMove === "rock") result = "Tie";
        else if (computerMove === "paper") result = "You lose";
        else if (computerMove === "scissors") result = "You win";
    } else if (player === "scissors") {
        if (computerMove === "rock") result = "You lose";
        else if (computerMove === "paper") result = "You win";
        else if (computerMove === "scissors") result = "Tie";
    }
    if (result === "You win") {
        score.wins += 1;
    } else if (result === "You lose") {
        score.losses += 1;
    } else if (result === "Tie") {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-result').innerHTML = `${result}`;
    document.querySelector('.js-moves').innerHTML = `You <img src="images/${player}-emoji.png" class="image-size"> <img src="images/${computerMove}-emoji.png" class="image-size"> Computer`;
    scoreDisplay();
}
function scoreDisplay() {
    document.querySelector('.js-display').innerHTML = `Wins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties},`
}
