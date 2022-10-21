"use strict";

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

//add eventlistener to each button. When the player clicks, the textContent will display accordingly
choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player:${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));
// the choice of computer will randomly generated, when the player clicks
function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }

    // to check if there is a winner by using ternary operator.
} function checkWinner() {
    if (player == computer) { return "Draw!"; }
    else if (computer == "ROCK") {
        return (player == "PAPER") ? "You Win!" : "YouLose!"
    }
    else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "YouWin!" : "You Lose!"
    }
    else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}
