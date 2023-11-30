import $ from 'jquery';

export const isValid = (elementToValidate: string) => {
  $(`.js-input[name=${elementToValidate}]`).css('border', '1px solid #9af7c4;');
  $(`.error-message-${elementToValidate}`).remove();
};
export const notValid = (elementToValidate: string, eqNumber: number) => {
  $(`.error-message-${elementToValidate}`).remove();
  $('.js-label')
    .eq(eqNumber)
    .append(`<div class="error-message-${elementToValidate}"><p class="${elementToValidate}-error">Name must have at least 2 characters and can only contain letters, but maximum 50 characters.</p></div>`);
  $(`.${elementToValidate}-error`).css({ color: 'red', 'font-size': '10px' });

  $(`.js-input[name=${elementToValidate}]`).css('border', '1px solid #e57474');
  $('.js-input').attr('placeholder', 'Please fill this field!');
  $('.js-submit--button').css('background-color', '#e57474');
};
