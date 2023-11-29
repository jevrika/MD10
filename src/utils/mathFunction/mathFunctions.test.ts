import { add, multiply } from './mathFunctions';

describe('mathFunctions', () => {
  it('should work with two small numbers', () => {
    const result = add(2, 2);
    expect(result).toEqual(4);
  });
  it('should work with two big numbers', () => {
    const result = add(23465234, 2342424);
    expect(result).toEqual(25807658);
  });
  it('should work with two negative numbers', () => {
    const result = add(-20, -20);
    expect(result).toEqual(-40);
  });
  it('should work with two small numbers', () => {
    const result = multiply(2, 2);
    expect(result).toEqual(4);
  });
  it('should work with two big numbers', () => {
    const result = multiply(23465234, 2342424);
    expect(result).toEqual(54965527287216);
  });
  it('should work with two negative numbers', () => {
    const result = multiply(-20, -20);
    expect(result).toEqual(400);
  });
});
