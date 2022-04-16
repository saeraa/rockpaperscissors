const win = document.getElementById("wins")
const player = document.getElementById("playerResult")
const comp = document.getElementById("compResult")
let hasPlayed = false
let playerChoice;
let compChoice;

document.getElementById("paper").addEventListener("click", () => {
    playerChoice = "paper"
    player.innerHTML = `<i class="fa fa-hand-paper-o"></i>`
    compPlay();
})
document.getElementById("rock").addEventListener("click", () => {
    playerChoice = "rock"
    player.innerHTML = `<i class="fa fa-hand-rock-o"></i>`
    compPlay();
})
document.getElementById("scissors").addEventListener("click", () => {
    playerChoice = "scissors"
    player.innerHTML = `<i class="fa fa-hand-scissors-o"></i>`
    compPlay();
})

function compPlay() {

    let resetGame = document.getElementById("resetGame")
    resetGame.style.visibility = "visible"

    let x = Math.floor(Math.random() * 3)
    switch (x) {
        case 0:
            compChoice = "rock";
            comp.innerHTML = `<i class="fa fa-hand-rock-o"></i>`
            break;
        case 1:
            compChoice = "paper";
            comp.innerHTML = `<i class="fa fa-hand-paper-o"></i>`
            break;
        case 2:
            compChoice = "scissors";
            comp.innerHTML = `<i class="fa fa-hand-scissors-o"></i>`
            break;
        default:
            console.log("no");
    }
    getResults();
}

function getResults() {
    if (compChoice === playerChoice) {
        win.innerHTML = `It's a draw!`
    } else if ((compChoice === "paper" && playerChoice === "scissors") ||
        (compChoice === "scissors" && playerChoice === "rock") ||
        (compChoice === "rock" && playerChoice === "paper")) {
        win.innerHTML = `You win!`
    } else {
        win.innerHTML = `The computer wins!`
    }
}
document.getElementById("resetGame").addEventListener("click", () => {
    win.innerHTML = ``
    comp.innerHTML = ``
    player.innerHTML = ``
    resetGame.style.visibility = "hidden"

})