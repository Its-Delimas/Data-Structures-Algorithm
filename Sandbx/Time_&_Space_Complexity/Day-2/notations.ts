// 0(1) - constant time
function getFirst(arr:number[]):number {
    return arr[2];
}

// 0(1) linear work
function findMax(arr:number[]):number{
    let max = arr[0];
    for (let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}

// O(n2) Quadratic time
function hasDuplicate (arr:number[]):boolean{
    for (let i = 0; i<arr.length;i++){
        for (let j = i+1;j<arr.length;j++){
            if(arr[i]===arr[j]) return true
        }
    }
    return false;
}

// O(log n)
function binarySearch(sorted: number[], target: number): number {
  let lo = 0, hi = sorted.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (sorted[mid] === target) return mid;
    sorted[mid] < target ? (lo = mid + 1) : (hi = mid - 1);
  }
  return -1;
}