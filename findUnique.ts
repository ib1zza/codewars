export function findUniq(arr: string[]): string {
  const array = arr.map((x) =>
    Array.from(new Set(x.toLowerCase().trim().split(""))).sort().join("")
  );
  if(array[0]!== array[1] && array[0] !== array[2]) return arr[0];
  return array[array.findIndex((x, i) => x !== array[i + 1]) + 1 || 1 + 1];

}

console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]));
