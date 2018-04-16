// 实现一个ramda中的curry函数

// curry是将多个参数的fn变成可以链式调用的函数

// 我实现的第一个版本的curry。
// 利用的是偏函数，但是问题是不可支持原来的使用方式
const curry = function (fn) {
  const numOfArg = fn.length;
  // 需要返回一个函数
  if (numOfArg > 1) {
    // 如果函数的参数大于1，那么将函数变成多个偏函数的结合。
    // 偏函数是参数的某一个固定了的函数
    return function (p) {
      return curry(fn.bind(null, p));
    };
  }
  // 所以fn要么是一个偏函数，要么是一个只有一个参数的函数(其实偏函数也只有一个函数)
  return fn;
};

// 第二版本的curry
// 怎么可以实现让curry的返回函数既可以接收多个参数，又可以curry呢？

// 做法是返回一个函数，在其中比较存储下来的参数长度和接收的参数长度的关系。想curryN中那样


const partial = function (fn, args) {
  return function () {
    const nargs = [].slice.call(arguments);
    return fn.apply(null, args.concat(nargs));
  }
};

const curryN = (fn, n) => {
  return function () {
    const args = [].slice.call(arguments); // 复制参数
    // 当参数大于或等于存储下来的n的时候，将返回一个fn(arg)的运行结果。多余的参数并不会被使用
    if (n <= args.length) return fn.apply(null, args);
    // 当参数小于n的时候
    return curryN(partial(fn, args), n - args.length);
  }
}

const curry2 = (fn) => {
  return curryN(fn, fn.length);
}







// 测试

const add = (a, b, c) => {
  return a + b + c;
};

// const cAdd = curry(add);

// console.log(cAdd(4)(2));
// console.log(cAdd(1, 2));
// console.log(cAdd(1)(2)(3));

console.log('------------------------------------');

const cAdd2 = curry2(add);

console.log(cAdd2.toString());

// console.log(cAdd2(4)(2));
// console.log(cAdd2(1, 2, 4));
console.log(cAdd2(1, 2)(5));
// console.log(cAdd2(1, 2)(6));
// console.log(cAdd2(1)(2)(3));
// console.log(cAdd2(1, 2, 4, 9));