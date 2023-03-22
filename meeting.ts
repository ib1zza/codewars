export function meeting(s: string): string {
  let arr = s
    .toUpperCase()
    .split(";")
    .map((str) => {
      return str.split(":");
    });
  arr.sort((a, b) => (a[1] < b[1] ? -1 : 1));
  arr.sort((a, b) => (a[1] === b[1] ? (a[0] < b[0] ? -1 : 1) : 0));
  return arr.map((el) => "(" + el[1] + ", " + el[0] + ")").join("");
}

let s =
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

console.log(meeting(s));
