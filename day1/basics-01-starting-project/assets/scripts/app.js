// alert('This works!');
//"let" for the variable in js, values can change
//let userName = 'MAX'
//userName = 'Manu'
//"const" for values cannot change
//Variable starting with $xkajsnc and _akjsnd is allowed.!!Start with digit is not allowed!!
const defaultResult = 0;
let result = defaultResult;//you can leave it undecleared; semicolon is optional
//result = result + 10 * 2 / 3;
//let calculationDes = '(' + defaultResult + ' + 10 * 2 / 3';
//let calculationDes = `(${defaultResult} + 10 * 2 / 3)`;
//let errorMessage = 'An error occured!';


let logEntry = [];

addBtn.addEventListener('click',addNumber);
subtractBtn.addEventListener('click',subtraction);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divition);

function getUserInputNum(){
    return parseInt(userInput.value);
}

function writeToLog(opertaionIdentifier,prevResult,number,currentResult){
        //how to create an object
        const logEntryObj = {
            opertaion: opertaionIdentifier,
            prevResult: prevResult,
            number: number,
            currentResult: currentResult
        };
    
    
        //add element to an array
        logEntry.push(logEntryObj);
        console.log(logEntryObj.number);//print one attribute in one object
        console.log(logEntry);

}

function calculateResult(calculationType){
    const userEnterNum = getUserInputNum();

    if(userEnterNum == 0 && calculationType === 'DIVISION'){
        alert("cannot dived by 0")
        return
    }

    const initialRestult = result;
    let mathOpertor;
    if(calculationType === 'ADD'){
        result += userEnterNum;
        mathOpertor = '+';
    } else if(calculationType === 'SUBSTRACTION'){
        result -= userEnterNum;
        mathOpertor = '-';
    } else if(calculationType === 'MULTIPLY'){
        result *= userEnterNum;
        mathOpertor = '*';
    }else if(calculationType === 'DIVISION'){
        result /= userEnterNum;
        mathOpertor = '/';
    }
    createAndWriteOutput(mathOpertor, initialRestult, userEnterNum);
    writeToLog(calculationType,initialRestult,userEnterNum,result);
}

function addNumber(){
    // //result = result + parseInt(userInput.value);
    // const userEnterNum = getUserInputNum()
    // //const calDescription = `${result} + ${userEnterNum}`
    // const initialRestult = result
    // result += userEnterNum;
    // //Use + to replace parseInt, toString() to String
    // // result = result + + userInput.value;
    // //outputResult(result,calDescription);
    // //return result;
    // createAndWriteOutput('+', initialRestult, userEnterNum);
    // writeToLog('ADD',initialRestult,userEnterNum,result);
    // //use typrof to check the type
    calculateResult('ADD');
}

function subtraction(){
    // const userEnterNum = getUserInputNum()
    // const initialRestult = result
    // result -= userEnterNum;
    // createAndWriteOutput('-', initialRestult, userEnterNum);
    // writeToLog('SUBSTRACTION',initialRestult,userEnterNum,result);
    calculateResult('SUBSTRACTION');
}

function multiply(){
    // const userEnterNum = getUserInputNum()
    // const initialRestult = result
    // result *= userEnterNum;
    // createAndWriteOutput('*', initialRestult, userEnterNum);
    // writeToLog('MULTIPLY',initialRestult,userEnterNum,result);
    calculateResult('MULTIPLY');
}

function divition(){
    // const userEnterNum = getUserInputNum()
    // const initialRestult = result
    // result /= userEnterNum;
    // createAndWriteOutput('/', initialRestult, userEnterNum);
    // writeToLog('DIVISION',initialRestult,userEnterNum,result);
    calculateResult('DIVISION');
}

function createAndWriteOutput(opertaor, resultBeforeCal, calNumber){
    const calDes = `${resultBeforeCal} ${opertaor} ${calNumber}`;
    outputResult(result,calDes);
}


