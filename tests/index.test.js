import { binnedArray, first, last } from '../src/index'

it('returns the first matching object', () => {
  const arr = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
  ]

  expect(first(arr, a => a.id === 1).name).toBe('a')
  expect(first(arr, a => a.id === 2).name).toBe('b')
  expect(first(arr, a => a.id === 3)).toBe(undefined)
})

it('returns the last matching object', () => {
  const arr = [
    { same: 1, diff: 1, name: 'joe' },
    { same: 1, diff: 2, name: 'rich' },
    { same: 1, diff: 3, name: 'repeat' },
    { same: 1, diff: 4, name: 'rob' },
    { same: 1, diff: 5, name: 'repeat' },
  ]
  expect(last(arr, o => o.same === 1).name).toBe('repeat')
  expect(last(arr, o => o.diff === 4).name).toBe('rob')
  expect(last(arr, o => o.name === 'repeat').diff).toBe(5)
  expect(last(arr).diff).toBe(5)
  expect(last(arr, () => false)).toBe(undefined)
})

it('bins the array into subarrays based on the discriminator', () => {
  const arr = [0, 1, 1, 2]
  expect(binnedArray(arr)).toEqual({ undefined: [0, 1, 1, 2] })
  expect(binnedArray(arr, e => e)).toEqual({ 0: [0], 1: [1, 1], 2: [2] })
})
