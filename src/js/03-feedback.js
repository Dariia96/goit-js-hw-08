import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const allInputs = form.elements;
const LOCAL_STORAGE_KEY = 'feedback-form-state';

form.addEventListener("input", throttle(saveForm, 500));

function saveForm() {
    const dataForm = { email: email.value || '', message: message.value || ''};
    localStorage.setItem("LOCAL_STORAGE_KEY", JSON.stringify(dataForm));
}

const dataFromStorage = JSON.parse(localStorage.getItem("LOCAL_STORAGE_KEY")) || {};


window.addEventListener("load", updatePage);

function updatePage() {
        email.value = dataFromStorage.email || '';
        message.value = dataFromStorage.message || '';
    
}

form.addEventListener("submit", submitAndReset);

function submitAndReset() {
    event.preventDefault();
if (!form.elements.email.value || !form.elements.message.value) {
alert('All fields must be filled!');
}
else {
const result = {
email: email.value,
message: message.value
};
    console.log(result);
    
form.reset();
localStorage.removeItem("LOCAL_STORAGE_KEY");

}
}



