const arr = ["a", "a", "c", "b", "c", "q"];
const counts = {};

for (let i = 0; i < arr.length; i++) {
  const val = arr[i];
  if (counts[val]) {
    counts[val]++;
  } else {
    counts[val] = 1;
  }
}

console.log(counts);

let place = [];

for (const key in counts) {
  place.push(`${key}: ${counts[key]}`);
}

place.forEach((da) => {
  console.log(da);
});
