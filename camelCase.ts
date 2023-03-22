export function camelCase(str: string): string {
  return str.length
    ? str
        .split(" ")
        .map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase())
        .join("")
    : "";
}

console.log(camelCase("adeshoj s  hxfaidvvr"));
