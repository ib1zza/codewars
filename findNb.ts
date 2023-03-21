export function findNb(m: number): number {
  let n = 1;
  let sum = 0;

  while (sum < m) {
    sum += (n++) ** 3;
  }

  return sum === m ? n - 1 : -1;
}

console.log(findNb(4183059834009));
