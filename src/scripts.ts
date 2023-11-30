import $ from 'jquery';
import { nameValidate } from './utils/nameValidate/nameValidate';
import { emailValidate } from './utils/emailValidate/emailValidate';
import { passwordValidate } from './utils/passwordValidate/passwordValidate';
import { drawForm } from './utils/formFunctions/drawForm';
import { add, multiply } from './utils/mathFunction/mathFunctions';
import { processData } from './utils/dataProcessor/dataProcessor';
import { isValid, notValid } from './utils/checkIfValid/checkIfValid';

$('.container').html(`
<div class="js-wrapper form__wrapper">
<form class='js-form user__form'>
<label class='js-label input__label' for="name">First name:</label>
<input class='js-input input' name='name' type='text'>
<label class='js-label input__label' for="email">Email:</label>
<input class='js-input input' name='email' type='text'>
<label class='js-label input__label' for="paswword">Password:</label>
<input class='js-input input' name='password' type='password' placeholder=''>
<div class='button__wrapper'> 
<input class='js-submit--button submit__button'type="submit" value="Submit">
</div>
</div> 
</form>
`);

$('.js-form').on('submit', (event) => {
  event.preventDefault();

  const nameIsValid = nameValidate($('.js-input[name="name"]').val().toString());
  const emailValid = emailValidate($('.js-input[name="email"]').val().toString());
  const passwordValid = passwordValidate($('.js-input[name="password"]').val().toString());

  $('.js-input').css('border', '1px solid #9af7c4');
  $('.js-input').attr('placeholder', '');
  $('.js-submit--button').css('background-color', '');

  if (nameIsValid) {
    isValid('name');
  } else {
    notValid('name', 0);
  }

  if (emailValid) {
    isValid('email');
  } else {
    notValid('email', 1);
  }

  if (passwordValid) {
    isValid('password');
  } else {
    notValid('password', 2);
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
