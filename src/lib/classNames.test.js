import { classNames } from './classNames'

describe('classNames', () => {
  it('is truthy', () => {
    expect(classNames).toBeTruthy()
  })
  it('merges two classNames', () => {
    const classNameA = 'primary'
    const classNameB = 'secondary'
    expect(classNames(classNameA, classNameB)).toBe(
      `${classNameA} ${classNameB}`
    )
  })
  it('filters out empty chunks', () => {
    const classNameA = 'primary'
    const classNameB = ''
    expect(classNames(classNameA, classNameB)).toBe(classNameA)
  })
})
