//debounce
function debounce(fn, delay) {
  let timer = null; //last time timer
  // console.log('1: ' + timer);
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this);
      // console.log(timer);
    }, delay);
  };
}

//throtte
function throttle(fn, time) {
  let activeTime = 0;
  return () => {
    const current = Date.now();
    if (current - activeTime > time) {
      fn.call(this);
      activeTime = Date.now();
    }
  };
}

let debounceBtn = document.querySelector(".debounce");
let throttleBtn = document.querySelector(".throttle");
// console.log(debounceBtn)
debounceBtn.onclick = debounce(function() {
  // console.log(this);
  // console.log("deboune triggered");
}, 1000);

throttleBtn.onclick = throttle(function() {
  // console.log(this);
  // console.log("throtte triggered");
}, 1000);

function calBall(n) {
  let height = 100;
  let meterSum = 0;
  for (let i = 0; i < n; i++) {
    meterSum += height;
    height /= 2;
    if (i + 1 == n) {
      // console.log(meterSum.toFixed(6) + " " + height.toFixed(6));
    }
    meterSum += height;
  }
}

calBall(10);

function sum(n) {
  return n == 1 ? 1 : sum(n - 1) + n; //n=1的时候跳出
}

function sum(n) {
  return n == 1 ? 1 : sum(n - 1) + (2 * n - 1); //n=1的时候跳出
}

function sum(n) {
  return n == 0 ? 0 : sum(n - 1) + 2 * n; //n=0的时候跳出
}

function getProps(propPath) {
  if (propPath == null) return null;
  propPath = propPath.toString();
  let stringSplit = propPath.split(".");
  let res = null;
  for (let i = 0; i < stringSplit.length; i++) {
    res = stringSplit[i];
    if (typeof (data[res] === "object")) {
      data = data[res];
    }
  }
  return data;
}
// var data = {
//   company: {
//     name: "name",
//     location: {
//       country: "chn",
//       city: "sz"
//     }
//   },
//   industry: "e-commermance"
// };
// console.log(getProps(company.location.city));

// var numStr = readline();
function isNiceNumber(numStr) {
  let numArray = numStr.split("");
  let isNice = "N";
  for (let i = 0; i < numArray.length; i++) {
    // console.log(numArray[i] == parseInt(numArray[i + 2]) - 2);
    if (
      (numArray[i] == numArray[i + 1] &&
        numArray[i] == numArray[i + 2] &&
        numArray[i] == numArray[i + 3]) ||
      (numArray[i] == parseInt(numArray[i + 1]) - 1 &&
        numArray[i] == parseInt(numArray[i + 2]) - 2 &&
        numArray[i] == parseInt(numArray[i + 3]) - 3)
    ) {
      isNice = "Y";
    }
    return isNice;
  }
}

// console.log(isNiceNumber(numStr));

//继承。答案是undefined undefined typederror
// function Parent(){
//   this.realname = 'Parent';
// }

// function Tom(){
//   this.realname = 'Tom';
// }

// Parent.__proto__.print = function(){
//   console.log(this.realname);
// }

// Parent.print();
// Tom.print()
// var parent = new Parent();
// parent.print();

const p1 = new Promise(resolve => {
  setTimeout(() => {
    // console.log("timeout");
    resolve();
  }, 1000);
});

const p2 = new Promise(resolve => {
  resolve();
}).then(() => {
  // console.log("helloworld");
});

Promise.race([p1, p2]);

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ test: 1 });
    // console.log("Asdsaas");
  }, 1000);
})
  .then(data => {
    // console.log("result1", data);
    //dosomething
    return "1xx12w12";
  })
  .then(data => {
    // console.log("result2", data);
  });

let obj = { name3: 100, name2: 75, name4: 116, name1: 15 };
let arr = [];
for (let item in obj) {
  arr.push([item, obj[item]]);
}

// console.log(arr);

arr.sort(function(a, b) {
  // console.log(a, b);
  return b[1] - a[1];
});

let name = [];
for (let item of arr) {
  name.push(item[0]);
}

// console.log(name);

// console.log(arr);

let list = { name3: 100, name2: 75, name4: 116, name1: 15 };
let keysSorted = Object.values(list).sort(function(a, b) {
  console.log(a, b);
  return a - b;
});
console.log(list);

//getobj
function getObj(obj, str) {
  str = "a.b.c";
  let nameArr = str.split(".");
  let includeArr = false;
  nameArr.forEach(element => {
    if (Object.keys(obj).includes(element)) {
      includeArr = true;
    }
  });
  if (!include) return null;
  // console.log(includeArr);
  return myFUN(obj, arr);
}

function myFUN(obj, arr) {
  for (i in obj) {
    if (typeof obj[i] === "object" && obj[i] === arr[i]) {
      myFUN(obj[i], arr);
    } else {
      return obj[i];
    }
  }
}

getObj({ d: 123, 
  fds: 123, 
  a: { 
    b: { 
      c: "asd" 
    } 
  } 
}, "a.b.c");
