function deepCount(a) {
  return a.reduce((acc, element) => {
    return acc + 1 + (Array.isArray(element) ? deepCount(element) : 0);
  }, 0);
}

console.log(deepCount([])); // 0,
console.log(deepCount([1, 2, 3])); // 3,
console.log(deepCount(["x", "y", ["z"]])); // 4,
console.log(deepCount([1, 2, [3, 4, [5]]])); // 7,
console.log(deepCount([[[[[[[[[]]]]]]]]])); // 8,
