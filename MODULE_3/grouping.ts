function groupAnagrams(words: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const key = word.split("").sort().join("");

    if (map.has(key)) {
      map.get(key)!.push(word);
    } else {
      map.set(key, [word]);
    }
  }
  return Array.from(map.values());
}
