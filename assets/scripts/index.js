const form = document.querySelector('#sign-up-form');
const errorMessage = document.querySelector('#error-message');
const [passwordInput, passwordConfirmationInput] = document.querySelectorAll(
  'input[type="password"]'
);

const verifyIfPasswordMatch = (password, passwordConfirmation) => {
  if (password !== passwordConfirmation) {
    errorMessage.textContent = '* Passwords do not match';
    passwordInput.classList.add('error');
    passwordConfirmationInput.classList.add('error');

    return false;
  }

  return true;
};

form.addEventListener('submit', event => {
  const passwordsMatch = verifyIfPasswordMatch(
    passwordInput.value,
    passwordConfirmationInput.value
  );

  if (!passwordsMatch) {
    event.preventDefault();
  }
});
