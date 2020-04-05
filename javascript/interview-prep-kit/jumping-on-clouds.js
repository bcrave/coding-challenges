// prints the least ammount of jumps from c[0] to c[-1]

const jumpingOnClouds = (c) => {
  // count jumps
  let jumps = 0;
  // loop through array
  for (let i = 0; i < c.length; i++) {
    if (c[i + 2] === 0) {
      jumps++;
      i++;
    } else if (c[i + 1] === 0) {
      jumps++;
    }
  }
  return jumps;
};

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));
