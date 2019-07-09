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


/** Sum Range **/
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
// 1 + 2 + 3 + 4 + 5 = 15