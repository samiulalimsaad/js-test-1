// 2. Find the maximum number in a jagged array given below array of numbers?
// var ar= [2,4,10,[12,4,[100,99],4],[3,2,99],0];

const arr = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

const flattenArray = [];

// flatten the multidimensional array
function arrayCheck(arr, i) {
    if (arr[i] !== undefined) {
        if (typeof arr[i] === "number") {
            flattenArray.push(arr[i]);
        } else {
            arrayCheck(arr[i], 0);
        }
        arrayCheck(arr, i + 1);
    }
}
arrayCheck(arr, 0);

let max = -Infinity;

// find the maximum number
for (let i = 0; i < arr.length; i++) {
    if (max < flattenArray[i]) {
        max = flattenArray[i];
    }
}

console.log(max);
