import { emailValidate } from './emailValidate';

describe('emailValidate', () => {
  it('should not validate without @ character', () => {
    const result = emailValidate('testgmail.com');
    expect(result).toEqual(false);
  });
  it('should validate with @ character', () => {
    const result = emailValidate('test@gmail.com');
    expect(result).toEqual(true);
  });
  it('should validate with numbers ', () => {
    const result = emailValidate('test123@gmail.com');
    expect(result).toEqual(true);
  });
  it('should not validate with special characters ', () => {
    const result = emailValidate('#$%^test123@gmail.com');
    expect(result).toEqual(false);
  });
  it('should not validate with whitespace', () => {
    const result = emailValidate('est123   @gmail.com');
    expect(result).toEqual(false);
  });
  it('should validate with 2 domains', () => {
    const result = emailValidate('est123@test.test.lv');
    expect(result).toEqual(true);
  });
});
