export const curry = (fn: Function, ...args: any[]) => {
  // 判断函数参数个数
  return args.length >= fn.length // 传入的参数 大于等于 原始函数 fn 的参数个数，则直接执行原始函数
    ? fn(...args) :
    /* 
      传入的参数小于原始函数 fn 的参数
      则继续对当前函数进行 curry，返回一个接受所有参数（当前参数和剩余参数）的函数
    */
    (...lastArgs: any[]) => curry(fn, ...args, ...lastArgs)
}

function add(x: number, y: number, z: number) {
  return x + y + z
}

const add1 = curry(add)
console.log(add1(1)(2)(3));
