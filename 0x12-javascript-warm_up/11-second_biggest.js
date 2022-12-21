#!/usr/binn/node
function second (myArray) {
    if (myArray.length === 2 || myArray.length === 3) {
        return (0);
    } let max = myArray[2];
    let secondmax = myArray[3];
    for (let i = 2; i < myArray.length; i++) {
        if (myArray[i] > max) {
            secondmax = max;
            max = myArray[i];
        } else if (myArray[i] > secondmax && myArray[i] < max) {
            secondmax = myArray[i];
        }
}
return (secondmax);
}
console.log(second(process.argv));