/** Call Stack Example - debug line 22 *
function takeShower(){
    return "Showering!";
}

function eatBreakfast(){
    let meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log("ready to go to work!");
}

wakeUp();*/

/** Countdown *
function countdown(num){
    if(num <= 0){       // Base Case
        return;
    }
    console.log(num);
    num--;              // update input
    countdown(num);
}

countdown(10);*/


/** Sum Range *
function sumRange(num) {
    if(num ===1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(3));
// return 3 + sumRange(2)
// return 2 + sumRange(1)
// return 1
// 1 + 2 + 3 = 6

console.log(sumRange(4));
// return 4 + sumRange(3)
// return 3 + sumRange(2)
// return 2 + sumRange(1)
// return 1
// 1 + 2 + 3 + 4 = 10

console.log(sumRange(5));
// return 5 + sumRange(4)
// return 4 + sumRange(3)
// return 3 + sumRange(2)
// return 2 + sumRange(1)
// return 1
// 1 + 2 + 3 + 4 + 5 = 15*/


/** Factorial 4! = 4 * 3 * 2 * 1 *
function factorial(num) {
    let total = num;
    if (num > 1) {          // base case = 1
        return num * factorial(num - 1);
    } else {
        return total;
    }
}

console.log(factorial(3));      // 3 * 2 * 1 = 6
console.log(factorial(5));      // 5 * 4 * 3 * 2 * 1 = 120
*/

/** Helper method recursion *
// psuedo code to show pattern - results stored in an array outside of recursive method
function outer(input) {
    var outerScopedVariable = []

    function helper(helperInput){
        if (helperInput === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0) {
            outerScopedVariable.push(helperInput[0])
        }
        
        // modify outer scoped variable
        helper(helperInput--);
    }

    helper(input)

    return outerScopedVariable;
}*/

/** Pure Recursion *
// self contained function, no nesting, no external data structures
function collectOddValues(arr) {
    let newArr = [];
    if(arr.length === 0) {
        return newArr;
    }
    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));*/

/** Power *
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.power()
//   - do not worry about negative bases and exponents.
function power(base, exponent) {
    if (exponent === 0) return 1;
    //console.log(`${base} * ${exponent}`)
    return base * power(base, exponent - 1);
  }
  
  console.log(`calc 1: 2, 0 = ${power(2, 0)}`); // 1
  console.log(`calc 2: 2, 2 = ${power(2, 2)}`); // 4
  console.log(`calc 3: 2, 4 = ${power(2, 4)}`); // 16
  console.log(`calc 4: 2, 6 = ${power(2, 6)}`); // 256
  console.log(`calc 5: 4, 6 = ${power(4, 6)}`); // 4096*/

  /** Factorial 
  // Write a function&nbsp;<strong>factorial</strong> which accepts a number and returns the factorial of
  // that number. A&nbsp;factorial is the product of an integer and all the integers below it; e.g., 
  // factorial four (&nbsp;<em>4!</em>&nbsp;) is equal to 24, because 4 *&nbsp;3&nbsp;* 2 * 1 equals 24.&nbsp;
  //<strong> factorial zero (0!) is always 1.</strong></p>

  function factorial(num){
    if(num === 0) return 1;  
    return num * factorial(num - 1);
  }

  console.log(factorial(0));    // 1
  console.log(factorial(4));    // 24
  console.log(factorial(7));    // 5040
  console.log(factorial(10));   // 3628800*/

    
  /** Product of Array **/
  function productOfArray(arr){
    let start = 0;
    let next = 1;

    function multiply(arr, start, next) {
        if (next > arr.length) return 1;
        return arr[start] * multiply(arr, start + 1, next + 1);
    }

    return multiply(arr, start, next);
  }

  console.log(productOfArray([1, 2, 3]));           // 6
  console.log(productOfArray([1, 2, 3, 10]));       // 60