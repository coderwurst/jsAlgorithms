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
