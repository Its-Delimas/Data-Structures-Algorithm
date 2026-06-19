// hash map operations & operations

const map = new Map<number, string>();

// Insert
map.set(1, "Spencer");

// Retrieve values
map.get(1);

// check existence
map.has(1);

// delete
map.delete(1);

// size
map.size;

// Iterate - keys
for (const key of map.keys()) {
  console.log(key);
}

// values
for (const value of map.values()) {
  console.log(value);
}

for (const [key, value] of map) {
  console.log(key, value);
}
