/** Frequency Counter *
// function same should return true if every value in the array 
// has its corresponding calue squared in the second
// same([1,2,3], [4,1,9])      // true
// same([1,2,3], [1,9])        // false
// same([1,2,1], [4,4,1])      // false (must be same frequency)


// loop solution
function sameLoop(array1, array2) {
    console.log("-----------------------------");
    // check if 2 arrays are same length
    if (array1.length !== array2.length) { return false }; 
    
    let isSame = false;

    // loop through array1
    for(let i = 0; i < array1.length; i++) { 
        // retrieve value at index
        let value = array1[i];
        let squaredValue = value * value;

        console.log(`Array before removal: ${array2}`);
        // compare with values in array 2 to find square
        let valueIndex = array2.indexOf(squaredValue);
        if (valueIndex !== -1) {
            // remove value from array 2
            array2.splice(valueIndex, 1);
            console.log(`Array after removal: ${array2}`);
            i == array1.length - 1 ? isSame = true : isSame = false;
            console.log(isSame);
        } else {
            // otherwise return false when even 1 value not found
            return false; 
        }
    }

    return isSame;
}

console.log(sameLoop([1,2,3], [4,1,9]));         // true
console.log(sameLoop([1,2,3], [1,9]));           // false
console.log(sameLoop([1,2,1], [4,4,1]));         // false    

function frequencyCounter(array1, array2) {
    console.log("**************************************");
    // check if 2 arrays are same length
    if (array1.length !== array2.length) { return false };

    let counter1 = {};
    let counter2 = {};

    // iterate 1ce over 1st array and store frequency of numbers
    for (let value of array1) {
        counter1[value] = (counter1[value] || 0) + 1;
    }
    // iterate 1ce over 2nd array and store frequency of numbers
    for (let value of array2) {
        counter2[value] = (counter2[value] || 0) + 1;
    }

    console.log(counter1);
    console.log(counter2);

    // compare 
    for (let key in counter1) {
        // is the number represented by key present in counter 2
        if(!(key ** 2 in counter2)) {
            return false;
        }
        // is the frequency correct
        if(counter2[key**2] !== counter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(frequencyCounter([1,2,3], [4,1,9]));                // true
console.log(frequencyCounter([1,2,3], [1,9]));                  // false
console.log(frequencyCounter([1,2,1], [4,4,1]));                // false 
console.log(frequencyCounter([1,2,2,3,5], [1,4,4,9,11]));       // true*/


/** Anagram Example O(n) **/
// validAnagram('','')                                  // true
// validAnagram('aaz', 'zza')                           // false
// validAnagram('rat', 'car')                           // false
// validAnagram('awesome', 'awesom')                    // false
// validAnagram('qwerty', 'qeywrt')                      // true
// validAnagram('texttwisttime', 'timetwisttext')       // true
// no spaces, only lowercase alphabets

function validAnagram(string1, string2) {
    // check if strings have same length - otherwise false
    if (string1.length !== string2.length) { return false }

    // loop through 1st object and store char as key and number of occurrences
    let store = {}
    Array.from(string1, char => {
        store[char] = (store[char] || 0) + 1 ;
    });

    console.log(store);

    for (var char = 0; char < string2.length; char++) {
        const testChar = string2[char];        
        // if 1 char not present - return false
        if (!store[testChar]) {
            return false
        } else {
            // if found, decrement
            store[testChar] -= 1;
        }      
    }

    // otherwise strings match and is an anagram - return true
    return true;

}

console.log("validAnagram Results")
console.log(validAnagram('',''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));