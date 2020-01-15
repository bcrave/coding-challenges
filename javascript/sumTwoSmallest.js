const sumTwoSmallest = (arr) => {
  let lowest = arr[0];
  let second = 0;

  arr.forEach((element) => {
    if (arr[element] < lowest) {
      second = lowest;
      lowest = arr[element];
    }
  });

  return lowest + second;
};

console.log(sumTwoSmallest([10, 6, 3, 5, 2, 4]));

// should return 5
