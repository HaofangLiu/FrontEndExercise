//1.
function sayHello(name) {
  console.log("Hi " + name);
}
//change to arrow function
const sayHellpFunc = name => {
  console.log("Hi " + name);
};

//one parameter do not need parenthese and one expression can go next to arrow.
const sayHellpFunc1 = name => console.log("Hi " + name);

sayHellpFunc1("Lucas1");

sayHellpFunc("Lucas1");

//2.
const sayHellpFunc2 = (greet, name) => console.log(greet + name);

const sayHellpFunc3 = () => {
  console.log("Hi Lucas3");
};

const sayHellpFunc4 = nameUser => "Hi " + nameUser;

sayHellpFunc2("Hi", "Lucas2");
sayHellpFunc3();
sayHellpFunc4("Lucas4");

//3.
//provide a fallback value if it's not provided.
const sayHellpFunc5 = (name, greet = "Yoo!") => console.log(greet + name);
sayHellpFunc5("Lucas5");
sayHellpFunc5("Lucas5", "Yoohaa");

//4.//execute the callback function if all args is not empty. 
function checkInput(cd, ...args) {//rest operator receive unlimit args
  let hasEmptyString = false;
  for (const text of args) {
    if (!text) {//if it's empty string then it's falsey(0,'',NaN,null,undefine)
      hasEmptyString = true;
      break;
    }
  }
  if (!hasEmptyString) {
    cd();
  }
}

checkInput(
  () => {
    console.log("all is not empty");
  },
  "asda",
  "asda1",
  "asda2",
  "hgf",
  "asda4",
  "asda5"
);
