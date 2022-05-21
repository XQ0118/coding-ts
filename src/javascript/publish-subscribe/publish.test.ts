import { expect, test, beforeEach } from 'vitest'
import { Observer } from './publish'

let bookStore: Observer

beforeEach(() => {
  bookStore = new Observer()
})

test('publish.on', () => {
  const foo = () => { }
  const bar = () => { }
  bookStore.on('book', foo)
  expect(bookStore.map['book']).toEqual([foo])
  bookStore.on('book', bar)
  expect(bookStore.map['book']).toEqual([foo, bar])
})


test('publish.remove', () => {
  const foo = () => { }
  bookStore.on('book', foo);
  bookStore.remove('book', foo)
  expect(bookStore.map['book']).toEqual([])
})
