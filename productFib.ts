export const productFib = (prod: number): [number, number, boolean] => {
  let a = 0;
  let b = 1;
  while (a * b < prod) {
    [a, b] = [b, a + b];
    if (a * b === prod) return [a, b, true];
  }
  return [a, b, false];
};
