function reverse(x) {
  const original = x;
  let reversed = 0;

  x = Math.abs(x);

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  const limit = 2 ** 31;

  if (reversed > limit - 1) return 0;

  return original < 0 ? -reversed : reversed;
}

console.log(reverse(-12397));
