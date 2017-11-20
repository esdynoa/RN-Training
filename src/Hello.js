//@flow
function isEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

let a: string;
a = "123";

console.log(isEqual([], []) === true);
console.log(isEqual([1], [1]) === true);
console.log(isEqual([3, 4, 5], [3, 4, 5]) === true);
console.log(isEqual([3, 4, 5], [3, 4, 6]) === false);
console.log(isEqual([3, 4, 5], [3, 4]) === false);
console.log(isEqual([3], ["3"]) === false);
