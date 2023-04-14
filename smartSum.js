function smartSum(...args) {
  return args.reduce((acc, element) => {
    return acc + (Array.isArray(element) ? smartSum(...element) : element);
  }, 0);
}

console.log(smartSum(1, 2, 3, [4, 5], 6)); // returns 21
console.log(smartSum(1, 2, [[3, 4], 5], 6)); // returns 21
