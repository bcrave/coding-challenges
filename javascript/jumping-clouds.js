// Count the number of valleys.  "U" means a step up, "D" means a step down.  Sea level is 0.
// This challenge is from hackerrank

function countingValleys(n, s) {
  let elevation = 0,
    result = 0;

  for (let i = 0; i < s.length; i++) {
    elevation = s[i] === "U" ? elevation + 1 : elevation - 1;
    result = elevation === 0 && s[i] === "U" ? result + 1 : result;
  }
  return result;
}

console.log(countingValleys(8, "UDDDUDUU"));
console.log(countingValleys(12, "DDUUDDUDUUUD"));
