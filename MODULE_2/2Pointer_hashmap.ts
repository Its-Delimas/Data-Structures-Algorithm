function twoPointer(num: number[], target: number): [number, number] | null {
  const map = new Map<number, number>();
  for (let i = 0; i < num.length; i++) {
    let current = num[i];
    let needed = target - current;
    if (map.has(needed)) {
      return [map.get(needed)!, i];
    } else {
      map.set(current, i);
    }
  }
  return null;
}
