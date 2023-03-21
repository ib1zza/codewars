export const findOdd = (xs: number[]): number => {
  for (let i = 0; i < xs.length; i++) {
    let n = xs[i];
    let count = 1;
    for (let j = 0; j < xs.length; j++) {
      if (i === j) continue;

      if (n === xs[j]) {
        count++;
      }
    }
    if (count % 2 === 1) {
      return n;
    }
  }
  return 0;
};

findOdd([15]); //
