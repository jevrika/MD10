import $ from 'jquery';
import { nameValidate } from './utils/nameValidate/nameValidate';
import { emailValidate } from './utils/emailValidate/emailValidate';
import { passwordValidate } from './utils/passwordValidate/passwordValidate';
import { drawForm } from './utils/drawForm/drawTable';
import { add, multiply } from './utils/mathFunction/mathFunctions';
import { processData } from './utils/dataProcessor/dataProcessor';

drawForm();

$('.js-form').on('submit', (event) => {
  event.preventDefault();
  const name = $('.js-input[name="fname"]').val().toString();
  const email = $('.js-input[name="email"]').val().toString();
  const password = $('.js-input[name="password"]').val().toString();

  const nameIsValid = nameValidate(name);
  const emailValid = emailValidate(email);
  const passwordValid = passwordValidate(password);

  $('.js-input').css('border', '1px solid #9af7c4');
  $('.js-input').attr('placeholder', '');
  $('.js-submit--button').css('background-color', '');

  if (nameIsValid) {
    $('.js-input[name="fname"]').css('border', '1px solid #9af7c4;');
  } else {
    $('.js-input[name="fname"]').css('border', '1px solid #e57474');
    $('.js-input').attr('placeholder', 'Please fill this field!');
    $('.js-submit--button').css('background-color', '#e57474');
  }

  if (emailValid) {
    $('.js-input[name="email"]').css('border', '1px solid #9af7c4;');
  } else {
    $('.js-input[name="email"]').css('border', '1px solid #e57474');
    $('.js-input').attr('placeholder', 'Please fill this field!');
    $('.js-submit--button').css('background-color', '#e57474');
  }

  if (passwordValid) {
    $('.js-input[name="password"]').css('border', '1px solid #9af7c4;');
  } else {
    $('.js-input[name="password"]').css('border', '1px solid #e57474');
    $('.js-input').attr('placeholder', 'Please fill this field!');
    $('.js-submit--button').css('background-color', '#e57474');
  }
  if (nameIsValid && emailValid && passwordValid) {
    alert('You have successfully completed the form');
    $('.js-input').val('');
    $('.js-input').css('border', '1px solid #c0bdbd');
  }
});

//

const addResult = add(3, 3);
console.log('addResult', addResult);
const multiplyResult = multiply(20, 20);
console.log('multiplyResult', multiplyResult);
const processDataResult = processData([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log('processDataResult', processDataResult);
