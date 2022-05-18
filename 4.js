// 4. How to find unique values from an array in sorted order?
// const arr= [1,5,7,44,5,9,4,5,9,10,6,7,8]

const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];

function makeUnique(arr) {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < temp.length; j++) {
            if (arr[i] === temp[j]) {
                delete temp[j];
            }
        }
        temp[i] = arr[i];
    }
    const final = [];
    let c = 0;
    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] === "number") {
            final[c++] = temp[i];
        }
    }
    return final;
}

console.log(makeUnique(arr));
