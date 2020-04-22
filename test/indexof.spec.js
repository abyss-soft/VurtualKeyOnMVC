/* eslint-disable no-var */
import { indexOfMy } from '../src/app/js/module/indexOf'

const array = [2, 5, 9]





describe('indexOf function', () => {

  test('[2, 5, 9].indexOf(2)', () => {
    const result = array.indexOfMy(2)
    expect(result).toStrictEqual(0)
  })

  test("['a', 'b', 'v'].indexOf('b')", () => {
    const result = ['a', 'b', 'v'].indexOfMy('b')
    expect(result).toStrictEqual(1)
  })

  test("['3', 't', '7', 'd'].indexOf('d'б 2)", () => {
    const result = ['3', 't', '7', 'd'].indexOfMy('d', 2)
    expect(result).toStrictEqual(3)
  })

})
