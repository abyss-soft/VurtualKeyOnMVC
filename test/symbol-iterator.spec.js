/* eslint-disable no-var */
import { symbolIteration } from '../src/app/js/module/symbol-iteration'

test('Symbol-Iteration', () => {
  const result = symbolIteration()

  // console.log(result)
  expect(result).toBe(15)
})
