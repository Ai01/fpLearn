// 根据<<js函数式编程>>对compose进行学习


// compose就是把多个函数从右到左组合成一个新的函数。

// pointFree

// compose的简单实现
var compose = function (f, g) {
  return function (x) {
    return f(g(x));
  }
}

// 大写
var toUpperCase = function (x) {
  return x.toUpperCase();
}


// 加上!号
var exclaim = function (x) {
  return x + '!';
}

var shout = compose(toUpperCase, exclaim);

// shout中exclaim将先于toUpperCase执行，是从右到左执行的

console.log(shout('send in the clowns'));



