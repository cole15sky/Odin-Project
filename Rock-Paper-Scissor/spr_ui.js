// // let SCISSOR =document.getElementById("scissor")
// // let PAPER =document.getElementById("paper")
// //  let ROCK =document.getElementById("rock")


let Imgchoices = document.querySelectorAll(".choice")

const choices = ['scissor', 'paper', 'rock']
// let computerScore = 0;
// let userScore = 0;

function ComputerChoice() {
    let finalchoices = Math.floor(Math.random() * choices.length);
     console.log(`computer choice is ${choices[finalchoices]}`)

    return choices[finalchoices];
}

Imgchoices.forEach(choice => {
    choice.addEventListener('click', playGame);
});

function playGame(event) {
    const userChoice = event.target.id;
    const computerChoice = ComputerChoice();
    const result = getResult(userChoice, computerChoice);
    console.log(result);
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissor' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
