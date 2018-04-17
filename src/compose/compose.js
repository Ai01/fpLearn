const R = require('ramda');
// 实现一个ramda中的compose

// 从其他文件的例子中，我们可以看出compose
// 1. 接收不限数量的参数
// 2. 参数都是函数
// 3. 从右到左执行参数
// 4. 返回一个函数。返回函数的参数是最右边参数的参数。然后将执行结果作为参数给倒数第二个参数。

// 所以总的来说，compose是通过递归将从右到左的参数依次的执行结果作为参数给下一个函数的。

// 大写
const toUpperCase = function(x) {
  return x.toUpperCase();
};

// 加上!号
const exclaim = function(x) {
  return x + '!';
};

// 在开头，结尾加上字符
const signStartAndEnd = function(a, b, x) {
  return `${a}${x}${b}`;
};

const compose = (...a) => {
  const _args = a.reverse();

  let n = 0;
  const len = _args.length;

  const composeN = b => {
    if (n < len) {
      const nextP = _args[n](b);
      n += 1;
      return composeN(nextP);
    }
    return b;
  };

  return p => {
    return composeN(p);
  };
};

const shout = compose(R.curry(signStartAndEnd)('^', '$'), toUpperCase, exclaim);

console.log(shout('hello world'));
