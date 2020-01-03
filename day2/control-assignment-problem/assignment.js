const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber > 0.7){
    alert('number is greater than 0.7');
}else{
    alert('number is not greater than 0.7');
}

const arrayA = [1,2,3,4,5];

for (const i of arrayA){
    console.log(i);
}

for (let i = 0; i < arrayA.length; i++){
    console.log(arrayA[i]);
}

let lengthArray =  arrayA.length - 1;
while(lengthArray  >= 0){
    console.log(arrayA[lengthArray]);
    lengthArray--;
}

const randomNumber1 = Math.random();
thisloop: if ((randomNumber > 0.7 && randomNumber1 > 0.7) || randomNumber <= 0.2 || randomNumber1 <= 0.2){
    alert('Q4');
}