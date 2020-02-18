function staircase(n) {
  console.log(
    new Array(n)
      .fill(0)
      .map((_, idx) => "#".repeat(idx + 1).padStart(n))
      .join("\n")
  );
}

return staircase(6);
