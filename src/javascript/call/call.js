Function.prototype.myCall = function (context, ...args) {
  const originFn = this // this is origin function 
  const tempFn = Symbol('tempFn')
  context = context || window
  context[tempFn] = originFn
  const res = context[tempFn](...args)
  delete context[tempFn]
  return res
}

function test(...args) {
  console.log(this.a, args)
}

const obj = {
  a: 1
}

test.myCall(obj, 1, 2, 3)


