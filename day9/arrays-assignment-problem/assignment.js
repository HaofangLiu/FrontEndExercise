// Create an array of numbers (of your choice) and perform three array
//         operations on it: filter for numbers greater than 5, map every number to
//         an object which holds the number on some property (e.g. "num") and
//         reduce the array to a single number (the multiplication of all numbers).

const numberArray = [1,4,2,5,3,-56,7,425,6,7,9];

const filteredArragy = numberArray.filter(num => num > 5);
console.log(filteredArragy);

const mappedNumber = numberArray.map((value) => ({number : value}));
console.log(mappedNumber);

const sumNum = numberArray.reduce((preValue,curValue)=> preValue * curValue,1);
console.log(sumNum);

// Write a function ("findMax") which executes some logic that finds the
//         largest number in a list of arguments. Pass the array from task 1 split
//         up into multiple arguments to that function.

//this is called rest pars.
const findMax = (...numbers) => {
    let curMax = numbers[0];
    for(const num of numbers){
        if(num > curMax){
            curMax = num;
        }
    }
    console.log(curMax);
}

//this is called seperate operator
findMax(...numberArray);

// Tweak the "findMax" function such that it finds both the minimum and
//         maximum and returns those as an array. Then use destructuring when
//         calling the function to store the two results in separate constants.

const findBoth = (...numbers) => {
    let curMax = numbers[0];
    let curMin = numbers[0];
    for(const num of numbers){
        if(num > curMax){
            curMax = num;
        }
        if(num < curMin){
            curMin = num;
        }
    }
    console.log(curMax);  
    console.log(curMin);

    return [curMax,curMin]
}

const [max,min] = findBoth(...numberArray);


// Create a list (and possibly some surrounding logic) where you ensure
//         that NO duplicate values can be added. Use whichever approach seems
//         appropriate to you.
const noDuplicateArray = new Set();
noDuplicateArray.add(10);
noDuplicateArray.add(1);
noDuplicateArray.add(3);
noDuplicateArray.add(4);
noDuplicateArray.add(10);