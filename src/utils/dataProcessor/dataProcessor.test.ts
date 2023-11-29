import { processData } from './dataProcessor';

describe('dataProcessor', () => {
  it('should return positive number', () => {
    const result = processData([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual(21);
  });
  it('should return negative number', () => {
    const result = processData([-2, -3, -4, 5, 6, -10]);
    expect(result).toEqual(-8);
  });
});
