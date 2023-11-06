const myButton = document.getElementById('submit__btn');

const emailInput = document.getElementById('email');
const mainContainer = document.getElementById('page-main');
const successMessage = document.getElementById('success__message');
const errorText = document.getElementById('dayText-error');


myButton.onclick = function () {
  const emailValue = emailInput.value.trim();

  if (emailValue === '' || !isValidEmail(emailValue)) {
    errorText.textContent = 'Valid email required';
    emailInput.classList.add('input_border_error');
  } else {
    errorText.textContent = ''; // Clear the error message if the email is valid
    mainContainer.classList.add('error');
    successMessage.classList.remove('error');

  }
};

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}