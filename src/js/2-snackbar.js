// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

let formData = {
  delay: 0,
  state: true
};

const formEl = document.querySelector(".form");
formEl.addEventListener("input", onInput);
formEl.addEventListener("change", onChange);
formEl.addEventListener("submit", onSubmit);

function onInput(event) {
  let inputValue = event.target.value;
  if (event.target === formEl.elements.delay) {
    formData.delay = inputValue;
    console.log(formData.delay);
  }
}

function onChange(event) {
  if (formEl.elements.state.value === "fulfilled") {
    formData.state = true;
  }
  else if (formEl.elements.state.value === "rejected") {
    formData.state = false;
  }
}

function onSubmit(event) {
  event.preventDefault();
  startPromise();
}

function startPromise() {
  const promise = new Promise((resolve, reject) => {
    const a = formData.state;
    const b = formData.delay;

    setTimeout(() => {
      if (a) {
        resolve(b);
      }
      else {
        reject(b);
      }
    }, formData.delay);
  });

  promise.then(value => {
    iziToast.show({
      position: 'topCenter',
      message: `✅  Fulfilled promise in ${value}ms`,
      backgroundColor: 'green',
      messageColor: 'white',
      close: false,
    });
  })
  .catch(error => {
    iziToast.show({
      position: 'topCenter',
      message: `❌  Rejected promise in ${error}ms`,
      backgroundColor: 'red',
      messageColor: 'white',
      close: false,
    });
  });
}
