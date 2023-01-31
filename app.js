const formEl = document.querySelector('form');
const firstNameEl = document.querySelector('#first-name');
const lastNameEl = document.querySelector('#last-name');
const emailEl = document.querySelector('#email');
const phoneNumberEl = document.querySelector('#phone-number');
const passwordOneEl = document.querySelector('#password-one');
const passwordTwoEl = document.querySelector('#password-two');
const inputElement = document.querySelectorAll('.form-row input');

inputElement.forEach((input) => {
  input.addEventListener('blur', () => {
    validateInputs(input.id);
  });
});

const setError = (element, message) => {
  const parent = element.parentElement;
  const errorDiv = parent.querySelector('.error');

  errorDiv.innerText = message;
  element.classList.add('auth-incorrect');
  element.classList.remove('auth-correct');
};

const setSuccess = (element) => {
  const parent = element.parentElement;
  const errorDiv = parent.querySelector('.error');

  errorDiv.innerText = '';
  element.classList.add('auth-correct');
  element.classList.remove('auth-incorrect');
};

const isValidEmail = (emailValue) => {
  const reg =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  return reg.test(String(emailValue).toLowerCase());
};

const isValidNumber = (telephoneValue) => {
  const reg = /^[0-9]{11}$/;
  return reg.test(String(telephoneValue).toLowerCase());
};

const isValidPassword = (passwordValue) => {
  const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  console.log(passwordValue);

  return reg.test(String(passwordValue).toLowerCase());
};

const passwordMatch = (passwordOneValue, passwordTwoValue) => {
  return passwordOneValue === passwordTwoValue;
};

const validateInputs = (id) => {
  const firstNameVal = firstNameEl.value.trim();
  const lastNameVal = lastNameEl.value.trim();
  const emailVal = emailEl.value.trim();
  const phoneNumberVal = phoneNumberEl.value.trim();
  const passwordOneVal = passwordOneEl.value.trim();
  const passwordTwoVal = passwordTwoEl.value.trim();

  switch (id) {
    case 'first-name':
      if (firstNameVal === '') {
        setError(firstNameEl, 'Please enter your first name');
      } else {
        setSuccess(firstNameEl);
      }
      break;

    case 'last-name':
      if (lastNameVal === '') {
        setError(lastNameEl, 'Please enter your last name');
      } else {
        setSuccess(lastNameEl);
      }
      break;

    case 'email':
      if (emailVal === '') {
        setError(emailEl, 'Please enter an email');
      } else if (!isValidEmail(emailVal)) {
        setError(emailEl, 'Provide a valid email address');
      } else {
        setSuccess(emailEl);
      }

      break;

    case 'phone-number':
      if (phoneNumberVal === '') {
        setError(phoneNumberEl, 'Please enter a number');
      } else if (!isValidNumber(phoneNumberVal)) {
        setError(phoneNumberEl, 'Provide a valid mobile number');
      } else {
        setSuccess(phoneNumberEl);
      }
      break;

    case 'password-one':
      if (passwordOneVal === '') {
        setError(passwordOneEl, 'Please enter a password');
      } else if (!isValidPassword(passwordOneVal)) {
        setError(passwordOneEl, 'Please enter a valid password');
      } else {
        setSuccess(passwordOneEl);
      }

      break;

    case 'password-two':
      if (passwordTwoVal === '') {
        setError(passwordTwoEl, 'Please confirm password');
      } else if (!passwordMatch(passwordOneVal, passwordTwoVal)) {
        setError(passwordTwoEl, 'Passwords do not match');
      } else {
        setSuccess(passwordTwoEl);
      }
  }
};
