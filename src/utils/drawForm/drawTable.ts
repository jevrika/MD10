import $ from 'jquery';

export const drawForm = () => {
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
