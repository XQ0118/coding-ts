import { expect, test } from 'vitest'
import { MyArray } from './my-array'

test('my-array', () => {
  const a = new MyArray()
  a.push(1)
  expect(a).toHaveLength(1)
  a.pop()
  expect(a).toHaveLength(0)
  a.push(1)
  a.push(2)
  a.push(3)

  expect(a.delete(0)).toBe(1)
  expect(a).toHaveLength(2)
})
