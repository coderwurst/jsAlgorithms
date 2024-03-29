/** TIME COMPLEXITY EXAMPLES **/

/** Calculate all numbers from 1 up to n **/
/*function addUpToWithFor(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    }
    return total;
}

let timer1Start = performance.now();
console.log(addUpToWithFor(1000000000));
let timer1End = performance.now();
console.log(`addUpWithFor took ${(timer1End - timer1Start / 1000)}`)
*/
/*
function zongWut(number) {
    return number * (number + 1) / 2;
}

let timer2Start = performance.now();
console.log(zongWut(1000000000));
let timer2End = performance.now();
console.log(`zongWut took ${(timer2End - timer2Start / 1000)}`)*/

/* O(n) Example
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

let timer3Start = performance.now();
console.log(logUpTo(10));
let timer3End = performance.now();
console.log(`logUpTo took ${(timer3End - timer3Start / 1000)}`)*/

/* O(1) Example
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

let timer4Start = performance.now();
console.log(logAtMost10(10));
let timer4End = performance.now();
console.log(`logAtMost10 took ${(timer4End - timer4Start / 1000)}`)*/

/* O(n) Example 
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

let timer5Start = performance.now();
console.log(logAtLeast10(10));
let timer5End = performance.now();
console.log(`logAtLeast10 took ${(timer5End - timer5Start / 1000)}`)*/

/** O(n) Example *
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
*/
/** O(n^2) Example *
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
*/

/** SPACE COMPLEXITY EXAMPLES **/

/** O(1) *
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}*/

/** O(1) *
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
*/

/** O(1) *
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}*/

/** O(n) *
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
*/

/** O(n) *
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
*/

/** The Big O of Objects **/
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4,5]
}

/* Console
    Object.keys(instructor)
    Object.entries(instructor)
    instructor.hasOwnProperty("firstName")
*/

/** Arrays and Big O compared to Objects **/
let names = ["Michael", "Melissa", "Andrea"];
            //   0          1          2
            // ["Michael", "Melissa", "Andrea", "Bob"]
            //   0          1          2          3         <---- O(1)
            // ["Bob", "Michael", "Melissa", "Andrea"]
            //   0          1          2          3         <---- O(N)
            

/**
    push                                    0(1)
    pop                                     0(1)
    shift                                   0(N)
    unshift                                 0(N)
    concat                                  0(N)
    slice                                   0(N)
    splice                                  0(N)
    sort                                    0(N*logN)
    forEach, map, filter, reduce, etc.      O(N)
**/