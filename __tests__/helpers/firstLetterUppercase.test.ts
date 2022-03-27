import { firstLetterUppercase } from '../../utils'

describe('First Letter Uppercase Function to run correctly', () => {
  it('It will uppercase the first letter', () => {
    expect(firstLetterUppercase('hello')).toBe('Hello')
  })
})

describe('First Letter Uppercase Function to throw an error', () => {
  it('It will return an error', () => {
    expect(() => firstLetterUppercase('')).toThrowError('No text provided')
  })
})
