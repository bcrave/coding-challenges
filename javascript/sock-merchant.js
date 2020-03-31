// some weird mf code but it works!

// const sockMerchant = (n, ar) => {
//     const colors = []
//     let matches = 0;

//     for(let i = 0; i < n; i++) {
//       if (colors[ar[i]]) {
//         matches++;
//         colors[ar[i]] = 0;
//       } else {
//         colors[ar[i]] = 1;
//       }
//     }
//     return matches;
//   }

// my attempt
const sockMerchant = (n, ar) => {
  const sorted = ar.sort((a, b) => a - b);
  //   [10, 10, 10, 10, 20, 20, 20, 30, 50]
  let matches = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      matches++;
      i++;
    }
  }
  return matches;
};

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

```
The n variable seems to be necessary only for the sort function.
What if we don't use the sort function? Can we leave out the n variable?
```;
function sockMerchant(ar) {
  let matches = 0;

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === ar[i + 1]) {
      matches++;
      i++;
    } else if (ar[i] === ar[i + 2]) {
      matches++;
      i++;
    } else if (ar[i] === ar[i + 3]) {
      matches++;
      i++;
    } else if (ar[i] === ar[i + 4]) {
      matches++;
      i++;
    } else if (ar[i] === ar[i + 5]) {
      matches++;
      i++;
    } else if (ar[i] === ar[i + 6]) {
      matches++;
      i++;
    } else if (ar[i] === ar[i + 7]) {
      matches++;
      i++;
    } else if (ar[i] === ar[i + 8]) {
      matches++;
      i++;
    }
  }
  return matches;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]));

// I get an error ("" is not a function).  I'll have to look deeper.
