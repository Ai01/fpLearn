// ramda中对curry的使用

const R = require('ramda');


const add = R.curry((a, b) => a + b);

const r1 = add(4)(2);
const r2 = add(4)(3);
const r3 = add(4, 2);

// console.log(r1, r2, r3);

// 对多个参数都是一样的情况, 如果参数是不同作用的会怎么样?

const map = (x, fn) => {
  if(Array.isArray(x)){
    return x.map(fn);
  }
  return null;
}

const rMap = R.curry(map);

const m1 = rMap([1,2,4])((x) => x*x);
const m2 = rMap([1,2,4])((x) => x+x);
const m3 = rMap([1,2,4], (x) => x+x);
const m4 = rMap((x) => x+x, [1,2,4]);

console.log(m1, m2, m3, m4);
