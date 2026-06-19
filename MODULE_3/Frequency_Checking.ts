function firstNonRepeating(arr: number[]): number | null {
  const map = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    map.set(value, (map.get(value) ?? 0) + 1);
  }

  //find first non-repeating number
  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) === 1) {
      return arr[i];
    }
  }
  return null;
}
