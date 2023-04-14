function zipWith(fn, a0, a1) {
  let len = Math.min(a0.length, a1.length);
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push(fn(a0[i], a1[i]));
  }
  return result;
}

function zipWith(fn, a0, a1) {
  return Array.from({ length: Math.min(a0.length, a1.length) }, (_, i) =>
    fn(a0[i], a1[i])
  );
}
