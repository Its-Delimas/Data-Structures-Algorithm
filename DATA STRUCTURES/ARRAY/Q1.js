// Exercise 1: Given arr = [3, 1, 4, 1, 5, 9, 2, 6],
//  find the maximum element without using max().

// solution: Assume the first element is te largest
// then challenge the rest of the elements with the assumption

let arr = [3,1,4,1,5,9,2,6];
let max = arr[0];

for (let i = 1; i < arr.length; i++){
    if(arr[i] > max ){
        max = arr[i]
    }
}

console.log(max);