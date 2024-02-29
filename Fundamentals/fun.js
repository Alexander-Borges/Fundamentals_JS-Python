// Algos in JS
// 1. Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for  (let i = -300; i <= 0; i += 3){
    if (i !== -3 && i !== -6);
    console.log(i);
}
console.log()

// 2. Printing Integers with While 
// Print Integers from 2000 to 5280, using a WHILE
let num = 2000;
while (num <= 5280){
    console.log(num++)
}
console.log()

// 3. Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print "Dojo".
for (let d = 1; d <= 100; d++){
    if (d % 10 === 0){
        console.log("Coding Dojo");
    } else if (d % 5 === 0){
        console.log("Coding");
    } else {
        console.log(d)
    }

}
console.log()

// 4. Flexible Countdown
// Given lowNum, highNum, mult print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3(on successive lines)
let lowNum = 2;
let highNum = 9;
let mult = 3;
for (let num = highNum; num >= lowNum; num--){
    if(num % mult === 0){
        console.log(num);
    }
}
