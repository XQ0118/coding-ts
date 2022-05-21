// 发布者-订阅者模型
export class Observer {
  // 发布者
  // 发布者
  map: Record<string, Function[]> = {}

  on(name: string, callback: Function) {
    // 发布者提供一些方法让订阅者可以订阅某些事件
    if (!this.map[name]) {
      this.map[name] = [callback]
    } else {
      this.map[name].push(callback)
    }
  }

  notify(name: string) {
    // 发布者可以触发订阅的事件
    this.map[name]?.forEach(cb => cb?.())
  }

  remove(name: string, sub: Function) {
    // 发布者可以移除某些订阅的事件
    const subs = this.map[name]
    if (Array.isArray(subs)) {
      const index = subs.findIndex(cb => cb === sub)
      if (index > -1) {
        subs.splice(index, 1)
      }
    }
  }
}
