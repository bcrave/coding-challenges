const rotLeft = (a, d) => {
  const headIndex = d % a.length;
  const head = a.splice(0, headIndex);
  a.push(...head);

  return a;
};

console.log(rotLeft([1, 2, 3, 4, 5], 4));

// much more eloquent solution
const rotLeft2 = (a, d) => {
  return [...a.slice(d), ...a.slice(0, d)];
};

console.log(rotLeft2([1, 2, 3, 4, 5], 4));
