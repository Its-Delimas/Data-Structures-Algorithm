// Exercise 2: Reverse an array in-place (without using .reverse()). 
// For example, [1, 2, 3, 4] → [4, 3, 2, 1].

// two-pointer trick
let arr = [1,2,3,4];
let left = 0;
let right = arr.length - 1;

while (left < right){
    // swap arr[left] and arr[rigt]
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

        // Move the pointers inward. left++ → left is now 1. right-- → right is now 2.
    left++;
    right--;
}

console.log(arr)