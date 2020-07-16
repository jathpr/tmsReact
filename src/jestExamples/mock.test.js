import { sum } from './mock'

test('first test', () => {
	expect(Math.max(1, 5, 10)).toBe(10)
})

describe('sum test', () => {
	test('first sum test', () => {
		expect(sum(2, 3)).toBe(5)
	})
})

describe('mock Tests', () => {
	test('first test', () => {
		expect(Math.max(1, 5, 10)).toBe(10)
	})

	it('second test', () => {
		expect(Math.max(1, 5, 10)).toBeGreaterThanOrEqual(10)
	})

	test('yelow test', () => {
		expect(Math.max(1, 5, 10)).not.toBe(1)
	})
})

// toBe()
// toEqual()
// toContain()
// toContainEqual()
// toBeDefined()
// toBeFalsy()
// toBeGreaterThanOrEqual()
// toBeCloseTo()
// not.
