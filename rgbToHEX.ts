export function rgb(r: number, g: number, b: number): string {
  return [r, g, b]
    .map((el) =>
      el > 255 ? "FF" : el < 0 ? "00" : (el > 15 ? "" : "0") + el.toString(16)
    )
    .join("")
    .toUpperCase();
}

console.log(rgb(15, 255, 255));
