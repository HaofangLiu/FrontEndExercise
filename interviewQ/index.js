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
  console.log(this);
  console.log("deboune triggered");
}, 1000);

throttleBtn.onclick = throttle(function() {
  console.log(this);
  console.log("throtte triggered");
}, 1000);

function calBall(n) {
  let height = 100;
  let meterSum = 0;
  for (let i = 0; i < n; i++) {
    meterSum += height;
    height /= 2;
    if (i + 1 == n){
      console.log(meterSum.toFixed(6) + " " + height.toFixed(6));
    }
    meterSum += height;
  }
}

calBall(10);

function sum(n){
    return n==1 ? 1 : sum(n-1) + n //n=1的时候跳出
}

function sum(n) {
    return n == 1 ? 1 : sum(n - 1) + (2 * n - 1) //n=1的时候跳出
}

function sum(n) { 
    return n == 0 ? 0 : sum(n - 1) + 2 * n //n=0的时候跳出
}

