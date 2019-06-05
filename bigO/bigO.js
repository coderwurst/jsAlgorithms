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

function zongWut(number) {
    return number * (number + 1) / 2;
}

let timer2Start = performance.now();
console.log(zongWut(1000000000));
let timer2End = performance.now();
console.log(`zongWut took ${(timer2End - timer2Start / 1000)}`)
