
let Human_Score = 0;
let Computer_Score = 0;
const choices =['SCISSOR','PAPER','ROCK']

//function to display random choice from computer.
function ComputerChoice () {
let finalchoices = (Math.floor(Math.random() * choices.length));  
console.log(choices[finalchoices])} 
// Math.floor returns a whole number.
// Math.random() will return a float between 0 and 1.
ComputerChoice();



//function to display users choices.
function humanChoice(){
    let Hchoices = (prompt("enter the choices"))
    console.log(Hchoices.toUpperCase())}
     //toUpperCase changes the userstring from function Hchoices to Uppercase.
   humanChoice();
