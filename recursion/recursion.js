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

    
/** Product of Array *
function productOfArray(arr, start = 0, next = 1){
    if (next > arr.length) return 1;            // base case
    return arr[start] * productOfArray(arr, start + 1, next + 1);
}
 

console.log(productOfArray([1, 2, 3]));           // 6
console.log(productOfArray([1, 2, 3, 10]));       // 60*/


/** Recursive Range *
// <p>Write a function called <strong>recursiveRange</strong> which accepts a 
// number and adds up all the numbers from 0 to the number passed to the function&nbsp;</p>
function recursiveRange(num){
    if(num === 1) return 1;       // base case
    return num + recursiveRange(num - 1);
}

console.log(recursiveRange(4));     // 10
console.log(recursiveRange(6));     // 21
console.log(recursiveRange(10));    // 55 */

/** Fib **/
// <p>Write a recursive function called <strong>fib</strong> which accepts a number 
// and returns the <em>n</em>th number in the Fibonacci sequence. Recall that the 
// Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which 
// starts with 1 and 1, and where every number thereafter is equal to the sum of 
// the previous two numbers.</p>
function fib(num){
    if(num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

console.log(fib(4));        // 3
console.log(fib(10));       // 55
console.log(fib(28));       // 317811
console.log(fib(35));       // 9227465

