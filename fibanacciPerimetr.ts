export const perimeter = (n: number): number => {
  // fibonacci sequence
  let a = 1;
  let b = 1;
  let c = 0;

  let sum = 2;
  let count = 2;

  while (count <= n) {
    c = a + b;
    a = b;
    b = c;

    sum += c;
    count++;
  }
  return 4 * sum;
};

console.log(perimeter(7));
