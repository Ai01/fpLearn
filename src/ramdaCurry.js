// ramda中对curry的使用

const R = require('ramda');

const add = R.curry((a, b) => a + b);

const r1 = add(4)(2);
const r2 = add(4)(3);
const r3 = add(4, 2);

console.log(r1, r2, r3);