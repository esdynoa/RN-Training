// @flow
function forEach(list: Array<mixed>, fn: Function) {
  for (let i of list) {
    fn(i);
  }
}

let a = [5, 6, 7];

a.forEach(item => {
  console.log(item);
});
