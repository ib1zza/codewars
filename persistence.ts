export function persistence(num: number): number {
  let count = 0;
  while (num >= 10) {
    num = String(num)
      .split("")
      .reduce((acc, el) => acc * +el, 1);
    count++;
  }
  return count;
}

console.log(persistence(39));
