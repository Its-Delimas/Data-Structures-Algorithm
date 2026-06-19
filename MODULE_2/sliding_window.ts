function maxSubarraySum(arr: number[], k: number): number {
  if (arr.length < k) throw new Error("Window size larger than array");
  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(windowSum, maxSum);
  }
  return maxSum;
}
