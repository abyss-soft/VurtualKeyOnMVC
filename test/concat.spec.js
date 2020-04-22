/* eslint-disable no-var */
import { concatMy } from '../src/app/js/module/concat'

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const arrayRes = ['a', 'b', 'c', 'd', 'e', 'f']

test('Concat', () => {
  const result = array1.concatMy(array2)

  // console.log(result)
  // expect(result).toHaveLength(arrayRes.length);
  expect(result).toStrictEqual(arrayRes)
})
