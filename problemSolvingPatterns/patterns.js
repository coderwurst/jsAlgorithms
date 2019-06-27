/** Frequency Counter **/
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