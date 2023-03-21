export function cleanString1(s: string): string {
  let res: string[] = [];
  s.split("").forEach((el) => {
    el === "#" ? res.pop() : res.push(el);
  });
  return res.join("");
}

export function cleanString(s: string): string {
  return s
    .split("")
    .reduce<string[]>((acc, el) => {
      el === "#" ? acc.pop() : acc.push(el);
      return acc;
    }, [])
    .join("");
}

console.log(cleanString("abc#d##c"));
