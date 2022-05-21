# 发布者-订阅者模型

本文的目的是为了实现一个发布-订阅者模型

发布者要做的事情：
- 发布者提供一些方法让订阅者可以订阅某些事件
- 发布者可以触发订阅的事件
- 发布者可以移除某些订阅的事件

在 javascript 中
document addEventListener removeEventListener 就是发布-订阅者模型的最佳实践
```js
function listener(){ }

// document 即发布者
// addEventListener 提供的方法可以让订阅者订阅某些事件
document.addEventListener('click', listener)

// 触发事件
document.click()

// 移除订阅的事件
document.removeEventListener('click', listener)
```

