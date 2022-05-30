import throttle from 'lodash.throttle';
import validEmail from 'validator';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const LOCAL_STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', throttle(handleSubmit, 500));
refs.input.addEventListener('input', handleInput);
refs.textarea.addEventListener('input', handleInput);

saveValueFormData();

function handleSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  const formData = {
    name: refs.input.value,
    comment: refs.textarea.value,
  };
  if (validateForm(formData)) {
    saveForm(formData);
    refs.form.reset();
    refs.input.value = '';
    refs.textarea.value = '';
  }
}

function handleInput() {
  const formData = {
    name: refs.input.value,
    comment: refs.textarea.value,
  };
  if (validateForm(formData)) {
    refs.form.classList.remove('error');
  } else {
    refs.form.classList.add('error');
  }
}

function validateForm(formData) {
  return validEmail.isEmail(formData.name) && formData.comment.length > 10;
}

function saveForm(formData) {
  const formState = JSON.stringify(formData);
  localStorage.setItem(LOCAL_STORAGE_KEY, formState);
}

function saveValueFormData() {
  const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (savedData) {
    refs.input.value = savedData.name;
    refs.textarea.value = savedData.comment;
  }
}
