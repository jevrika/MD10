import { passwordValidate } from './passwordValidate';

describe('nameValidate', () => {
  it('should validate less than 8 characters', () => {
    const result = passwordValidate('asdftr');

    expect(result).toEqual(false);
  });

  it('should validate with 15 characters', () => {
    const result = passwordValidate('asdfweqrtguijfk');
    expect(result).toEqual(false);
  });

  it('should validate only with special charactersr', () => {
    const result = passwordValidate('@#$@#%@#%@#%');
    expect(result).toEqual(false);
  });

  it('should validate only with number', () => {
    const result = passwordValidate('23423423432424234');
    expect(result).toEqual(false);
  });

  it('should validate only with letters', () => {
    const result = passwordValidate('asaAdaDdafsdFfr');
    expect(result).toEqual(false);
  });

  it('should validate with at least 8 characters, including 1 letter, 1 number and 1 special character', () => {
    const result = passwordValidate('test12$d');
    expect(result).toEqual(true);
  });
});
