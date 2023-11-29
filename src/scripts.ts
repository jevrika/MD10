import $ from 'jquery';
import { nameValidate } from './utils/nameValidate/nameValidate';
import { emailValidate } from './utils/emailValidate/emailValidate';
import { passwordValidate } from './utils/passwordValidate/passwordValidate';

const drawForm = () => {
  $('.container').html(`
<div class="js-wrapper form__wrapper">
<form class='js-form user__form'>
<label class='input__label' for="fname">First name:</label>
<input class='js-input input' name='fname' type='text'>
<label class='input__label' for="email">Email:</label>
<input class='js-input input' name='email' type='text'>
<label class='input__label' for="paswword">Password:</label>
<input class='js-input input' name='password' type='password' placeholder=''>
<div class='button__wrapper'> 
<input class='js-submit--button submit__button'type="submit" value="Submit">
</div>
</div> 
</form>
`);
};
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
