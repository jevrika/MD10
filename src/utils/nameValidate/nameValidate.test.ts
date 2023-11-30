import { nameValidate } from './nameValidate';

describe('nameValidate', () => {
  it('should validate with 1 letter', () => {
    const result = nameValidate('a');

    expect(result).toEqual(false);
  });

  it('should validate with 10 letters', () => {
    const result = nameValidate('asdfghjklq');

    expect(result).toEqual(true);
  });

  it('should validate with number in it', () => {
    const result = nameValidate('asdasffdss123');

    expect(result).toEqual(false);
  });

  it('should validate with letters in uppercase', () => {
    const result = nameValidate('AASDGERTYBBDFTGR');

    expect(result).toEqual(true);
  });

  it('should validate with speacial characters', () => {
    const result = nameValidate('#@$^$%dsfsd%^#$%#');

    expect(result).toEqual(false);
  });

  it('should validate with long characters', () => {
    const result = nameValidate('āšēūņčžīķļ');

    expect(result).toEqual(true);
  });
});
