const choices =['SCISSOR','PAPER','ROCK']

//function to display random choice from computer.
function Computerchoice (){
var finalchoices = (Math.floor(Math.random() * choices.length));  
console.log(choices[finalchoices]); 
// Math.floor returns a whole number.
// Math.random() will return a float between 0 and 1.
}
Computerchoice();


 