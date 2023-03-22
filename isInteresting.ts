export function isInteresting(n: number, awesomePhrases: number[]): number {
  if (n < 97) return 0;
  const variants = [n - 2, n - 1, n + 1, n + 2];

  function setAllTests(n: number) {
    if (n < 100) {
      return 0;
    }
    return (
      checkAllNulls(n) ||
      checkAllSame(n) ||
      checkUpper(n) ||
      checkDown(n) ||
      checkIsPalindrome(n) ||
      checkIsAwesome(n)
    );
  }

  if (setAllTests(n)) {
    return 2;
  }
  for (let i = 0; i < variants.length; i++) {
    if (setAllTests(variants[i])) {
      return 1;
    }
  }
  return 0;

  function checkAllNulls(n: number) {
    return +String(n).slice(1) === 0;
  }
  function checkAllSame(n: number) {
    return String(n)
      .split("")
      .reduce((acc, el, i, arr) => (acc ? arr[0] === el : false), true);
  }

  function checkUpper(n: number) {
    let stringArray = String(n).split("");

    for (let i = 0; i < stringArray.length - 1; i++) {
      if (+stringArray[i] === 9 && +stringArray[i + 1] === 0) {
        continue;
      }
      if (+stringArray[i] + 1 !== +stringArray[i + 1]) {
        return false;
      }
    }
    return true;
  }

  function checkDown(n: number) {
    let stringArray = String(n).split("");

    for (let i = 0; i < stringArray.length - 1; i++) {
      if (+stringArray[i] - 1 !== +stringArray[i + 1]) {
        return false;
      }
    }
    return true;
  }

  function checkIsPalindrome(n: number) {
    let stringArray = String(n).split("");
    for (let i = 0; i < stringArray.length / 2; i++) {
      if (stringArray[i] !== stringArray[stringArray.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  function checkIsAwesome(n: number) {
    return awesomePhrases.includes(n);
  }
}
console.log(isInteresting(56789012345, [1337, 256]));
