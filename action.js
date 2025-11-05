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
    if (num >= 0 && num < 1 / 3) computerMove = "Rock";
    else if (num >= 1 / 3 && num < 2 / 3) computerMove = "Paper";
    else if (num >= 2 / 3 && num < 1) computerMove = "Scissors";
    return computerMove;
}
function playGame(computerMove, player) {
    if (player === "Paper") {
        if (computerMove === "Rock") result = "You win";
        else if (computerMove === "Paper") result = "Tie";
        else if (computerMove === "Scissors") result = "You lose";
    } else if (player === "Rock") {
        if (computerMove === "Rock") result = "Tie";
        else if (computerMove === "Paper") result = "You lose";
        else if (computerMove === "Scissors") result = "You win";
    } else if (player === "Scissors") {
        if (computerMove === "Rock") result = "You lose";
        else if (computerMove === "Paper") result = "You win";
        else if (computerMove === "Scissors") result = "Tie";
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
