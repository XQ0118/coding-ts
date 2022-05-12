
export class MyArray {
  private data: Record<string, any>
  private length: number
  constructor() {
    this.data = {}
    this.length = 0
  }

  get(index: number) {
    return this.data[index]
  }

  push(item: any) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  delete(index: number) {
    const item = this.data[index]
    this.shiftItems(index)
    return item
  }

  private shiftItems(index: number) {
    /* 函数的目的是做数组元素的移动 */
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1] // 依次位移
    }
    delete this.data[this.length - 1] // 删除最后一项
    this.length--
  }
}
