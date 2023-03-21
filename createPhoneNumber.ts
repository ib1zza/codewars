export const digitalRoot = (n: number): number => {
  let num = String(n)
    .split("")
    .reduce((acc, el) => acc + +el, 0);
  if (num >= 10) return digitalRoot(num);
  return num;
};

console.log(digitalRoot(155)); //
