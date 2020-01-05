const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = PAPER;

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYERWIN';
const RESULT_COMPUTER_WINS = 'COMPUTERWIN';


let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, 'enter you choice').toUpperCase();
  if (
    selection !== ROCK && selection !== PAPER && selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getPCChoice = () => {
  const randomeValue = Math.random();
  if (randomeValue < 0.34){
    return ROCK;
  }else if (randomeValue < 0.67){
    return PAPER;
  }else{
    return SCISSORS;
  }
}

//arrow function
//1.1 no argus/paramaeters ---- () => {...}  Empty pair of parentheses is required.
//2.2 on argument/parameter ----- arg => {....}  parenthese can be omitted
//3.3 exactly one expression in function body ------ (a,b) => a + b    curly braces can be omitted, result is retured.
//4.4 more than one expression in function body ---- (a,b) => {a *= 2; return a +b;}  Curly braces and return statement required.

//anonymous fucntion can be replaced as arrow function:
// const getWinner = function(cChoice,pChoice){
  const getWinner = (cChoice,pChoice) => {
  if(cChoice === pChoice){
    return RESULT_DRAW;
  }else if(cChoice === ROCK && pChoice === PAPER || cChoice === SCISSORS && pChoice === ROCK || cChoice === PAPER && pChoice === SCISSORS){
    return RESULT_PLAYER_WINS;
  }else{
    return RESULT_COMPUTER_WINS;
  }
}


//function declearation create variable that hold function object.function expression return function object
startGameBtn.addEventListener('click', function(){
  if (gameIsRunning){
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  console.log('Your choice is ' + playerSelection);
  const computerSelection = getPCChoice();
  console.log('Computer choice is ' + computerSelection);
  const winnenrIs = getWinner(computerSelection,playerSelection);
  console.log('Winner is ' + winnenrIs);
});


//Rest parameters:
const sumUp = (...number) => {//...number will receive all param as an array to use \\\ (a,b, ...abd)---> a, b, will get the first two params, the rest will become as part of the array.
  let sum = 0;
  for(const num of number){
    sum += num;
  }
  return sum;
}

console.log(sumUp(1,2,3,1,2,3,1,4,2,3,4,7));