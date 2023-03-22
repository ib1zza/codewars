export const pigIt = (a: string): string =>
  a
    .split(" ")
    .map((el) =>
      (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) ||
      (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122)
        ? el.slice(1) + el[0] + "ay"
        : el
    )
    .join(" ");

console.log(pigIt("Hello world !"));
