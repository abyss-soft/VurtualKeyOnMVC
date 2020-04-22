/* eslint-disable no-var */
import { spy } from '../src/app/js/module/spy'

function work(a, b) {
  // console.log(a + b) // произвольная функция или метод
  return a + b
}

work = spy(work)

// console.log(work)

// work(1, 2) // 3
// work(4, 5) // 9

// for (let args of work.calls) {
//   console.log('call:' + args.join()) // "call:1,2", "call:4,5"
// }

describe('Spy function', () => {
  test('записывает вызовы в своё свойство', () => {
    work(1, 2)
    expect(work.calls).toEqual([[1, 2]])

    work(3, 4)
    expect(work.calls).toStrictEqual([
      [1, 2],
      [3, 4],
    ])
  })

  test('прозрачно оборачивает функции: work(1, 2)', () => {
    let result = work(1, 2) // 3
    expect(result).toBe(3)
  })

  test('прозрачно оборачивает функции: work(4, 5)', () => {
    let result = work(4, 5) // 9
    expect(result).toBe(9)
  })
})
