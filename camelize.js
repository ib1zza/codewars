function toCamelCase(str) {
  let arr = str.split("_").join(" ").split("-").join(" ").split(" ");
  console.log(arr);
  return arr
    .slice(0, 1)
    .concat(arr.slice(1).map((el) => el[0].toUpperCase() + el.slice(1)))
    .join("");
}

console.log(toCamelCase("The_stealth_Warrior"));

console.log(toCamelCase("the_cat_is-cute"));
