// 3. Find the counts of duplicates in an array?
// const arr= ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9" ,"13"]

const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"];

const lookup = {};

for (let i = 0; i < arr.length; i++) {
    if (lookup[arr[i]] >= 0) {
        lookup[arr[i]] += 1;
    } else {
        lookup[arr[i]] = 0;
    }
}

console.log(lookup);
