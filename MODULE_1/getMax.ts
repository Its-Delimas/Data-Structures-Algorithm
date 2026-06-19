function getMax(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Modern Max
function getMax_MOdern(int: number[]): number {
  if (int.length === 0) throw new Error("Array cannot be empty");
  return Math.max(...int);
}
