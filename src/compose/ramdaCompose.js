// 根据<<js函数式编程>>, ramda对compose进行学习
const R = require('ramda');

// 大写
const toUpperCase = function(x) {
  return x.toUpperCase();
};

// 加上!号
const exclaim = function(x) {
  return x + '!';
};

// 获取第一个字符
const head = function(x) {
  return x[0];
};

// 注意参数的顺序
const join = R.curry((y, x) => {
  return x.join(y);
});

// 注意参数的顺序
const map = R.curry((fn, x) => {
  return x.map(fn);
});

// 注意参数的顺序
const split = R.curry((y, x) => {
  return x.split(y);
});

const initials = R.compose(join('.'), map(R.compose(toUpperCase, head)), split(" "));

console.log(initials('hunter stockton thompson'));

// 用来debug
const trace = R.curry((tag, x) => {
  console.log(tag, x);
  return x;
});

const debugInitials = R.compose(join('.'), trace('after map') ,map(R.compose(toUpperCase, head)), split(" "));

debugInitials('hunter stockton thompson');
