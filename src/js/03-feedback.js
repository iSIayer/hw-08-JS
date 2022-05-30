import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const LOCAL_STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', handleSubmit);
refs.input.addEventListener('input', throttle(handleInput, 500));
refs.textarea.addEventListener('input', throttle(handleInput, 500));

getValueFormData();
// Create a function that will throttle the event handler.
function handleSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  refs.form.reset();
  refs.input.value = '';
  refs.textarea.value = '';
}
// This function will be called when the user types in the input field.
function handleInput() {
  const formData = {
    name: refs.input.value,
    comment: refs.textarea.value,
  };
  saveForm(formData);
}
// Saved data is saved in localStorage as a string.
function saveForm(formData) {
  const formState = JSON.stringify(formData);
  localStorage.setItem(LOCAL_STORAGE_KEY, formState);
}
//
function getValueFormData() {
  const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (savedData) {
    refs.input.value = savedData.name;
    refs.textarea.value = savedData.comment;
  }
}
