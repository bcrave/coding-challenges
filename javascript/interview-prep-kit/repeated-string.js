// Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.

// first attempt.  It technically works but isn't scalable.
// const repeatedString = (s, n) => {
//   let string = [];
//   let count = 0;

//   while (string.length < n) {
//     for (let i = 0; i < s.length; i++) {
//       if (string.length === n) {
//         break;
//       } else {
//         string.push(s[i]);
//       }
//     }
//   }
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "a") {
//       count++;
//     }
//   }
//   return count;
// };

// second attempt.  Learned solution in python and refactored into javascript.
const repeatedString = (s, n) => {
  const aCount = (str) => str.split("").filter((count) => count == "a").length;

  const num = Math.floor(n / s.length);
  const mod = n % s.length;

  return aCount(s) * num + aCount(s.substr(0, mod));
};

console.log(repeatedString("aba", 10));
console.log(repeatedString("a", 1000000000000));
