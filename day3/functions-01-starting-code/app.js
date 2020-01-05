const startGameBtn = document.getElementById('start-game-btn');


//function declaration and function expression:
const start = function(){//expression is assigne sth to sth.
    console.log('Game start');
}

// function startGame(){//expression is assigne sth to sth.
//     console.log('Game start');
// }

// const person = {
//     name: 'Lucas',
//     greet: function(){
//         console.log('Hi there');
//     }
// }

// person.greet();

console.log(startGame);//print function which is a type. Functions are objects

startGameBtn.addEventListener('click',start);


