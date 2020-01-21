const numbers = [1,2,3];
console.log(numbers);

const moreNumbers = new Array('5','2');//create []
//const moreNumbers = new Array(5,2);//create []
//const moreNumbers = new Array(5);//create length as 5 empty array
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1,2,'adfa',[1,4]);
console.log(yetMoreNumbers);

//把一个类数组转换成真正的数组
//类数组(arrayLike)：有下标有长度（比如NodeList转换为array）
const moreNumbers1 = Array.from([1,2]);//array.of receive arrayLike object. or apart string into single character.
console.log(moreNumbers1);

//pass the NodeList to ArrayList to get array.
const listItem = document.querySelectorAll('li');
const arrayLIst = Array.from(listItem);


const personalData = [30,'Max',{moreDetail: []}];

const arrayInarray = [[1,2],[3,4]];
for(const ele of arrayInarray){
    for(const loop of ele){
        console.log(loop);
    }
}

//all elements
const hobbies = ['Cooking','Sports'];
hobbies.push('REading');//add new ele to the end of array
hobbies.unshift('coding');//add new ele to the begining of array(move to the right place)
const removedValue = hobbies.pop();//remove the last ele
hobbies.shift();//remove the first ele(move to the left place.)
console.log(hobbies);

hobbies[1] = 'Coding';
console.log(hobbies);

hobbies.splice(1,0,'Good Food');
console.log(hobbies);

hobbies.splice(0,1);
console.log(hobbies);

const testResult = [1,3,2,4,5.4,2.4,5,1,-9,3];
const testResult1 = testResult.slice();//this is an address pointer. if testResult changed, the testResult1 will change. Only if create a new array using slice();
const testResult2 = testResult.slice(0,2);//give a new array start from 1,stops in 3(NOT INCLUSIVE)----> [0,2)



const stroedResult = testResult.concat([44,232,21]);//difference between push and concat: push create one element(eg. 1,23,3,[4,5]). However, concate append all elements to the end of array.(eg. 1,23,3,4,5)
testResult.push(11);
console.log(testResult,stroedResult);
console.log(testResult.indexOf(1));//indecOf() and lastIndexOf()

const personaData = [{name: 'Max'},{name : 'Manuel'}];
console.log(personaData.indexOf({name:'Max'}));//cannot find as it's object type

const manuel = personaData.find((person, index,persons) => {
    return person.name === 'Manuel';
})

manuel.name = 'Anna'
console.log(manuel,personaData);

const manuelIndex = personaData.findIndex((person, index,persons) => {
    return person.name === 'Manuel';
})

console.log(manuelIndex);//print out index of boj of manuel

console.log(testResult.includes(1));

const prices = [1,2,3,1,4.66,3.11,2.34];

const tax = 0.19;

const taxAdjustedPrice = [];

// for(const price of prices){

//     taxAdjustedPrice.push(price * (1 + tax));

// }

prices.forEach((price,idx,prices) => {
    const adjPriceObj = {index: idx, taxAdjustedPrice: price * (1 + tax)}
    taxAdjustedPrice.push(adjPriceObj);
});

console.log(taxAdjustedPrice);