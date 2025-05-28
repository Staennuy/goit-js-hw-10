import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', submitHandler);

function submitHandler(e) {
  e.preventDefault();
  const delay = Number(e.target.elements.delay.value.trim());
  const state = e.target.elements.state.value;

  const promise = createPromise(delay, state);
  promise
    .then(value => {
      iziToast.success({
        title: `✅ Fulfilled promise in ${value}ms`,
        message: '',
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: `❌ Rejected promise in ${error}ms`,
        message: '',
        position: 'topRight',
      });
    });
  e.target.reset();
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
