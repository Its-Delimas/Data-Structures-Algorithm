function twoSum(arr: number[], target: number): [number, number] | null {
  let left = 0;
  let right = arr.length - 1;

  while (left !== right) {
    let sum = arr[left] + arr[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [left, right];
    }
  }
  return null;
}
