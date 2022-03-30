var throttle = require('lodash.throttle');

const formContent = document.querySelector('.feedback-form');
const email = formContent.querySelector('input');
const message = formContent.querySelector('textarea');

let formData = {};
const FORM_DATA = 'feedback-form-state';

const content = {
  form: formContent,
  email: email,
  message: message,
};

populateFormInput();

content.form.addEventListener('submit', onFormSubmit);
content.form.addEventListener('input', throttle (onFormInput, 500));



function onFormInput(e) {
  formData[e.target.name] = e.target.value;
   localStorage.setItem(FORM_DATA, JSON.stringify(formData));
}

function populateFormInput() {
  const savedFormData = localStorage.getItem(FORM_DATA);

  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    if (parsedFormData.email) {
      data.email.value = parsedFormData.email;
      formData.email =  data.email.value;
    }
    if (parsedFormData.message) {
      data.message.value = parsedFormData.message;
      formData.message =  data.message.value;
    }
  }
}


function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  if (formData.email&&formData.message) {
    localStorage.removeItem(FORM_DATA);
  console.log(`Form Submited. Form is ${JSON.stringify(formData)}`);
  alert('форма отправлена');
  formData = {};
  }
  else {
    alert('заполните поля');
    populateFormInput();
  }
}
