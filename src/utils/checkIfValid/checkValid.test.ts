import $ from 'jquery';
import { isValid } from './checkIfValid';

describe('isValid', () => {
  it('should return positive number', () => {
    const result = isValid('name');
    expect(result).toContain($('.js-input[name=name]').css('border', '1px solid #9af7c4;'));
    expect(result).toContain($('.error-message-name').remove());
  });
});
