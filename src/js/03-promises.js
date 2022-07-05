import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formEl = document.querySelector('.form');
const submitForm = formEl.addEventListener('submit', clickBtn);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({position, delay});
    }, delay); 
  });
}

function clickBtn(event){
  event.preventDefault();
  const { elements: { delay, step, amount }, } = event.currentTarget;

  let delayValue = Number(delay.value);
  for (let i = 1; i <= Number(amount.value); i += 1){
    createPromise(i, delayValue).then(corectPromise).catch(errorPromise);
    delayValue += Number(step.value);
    // console.log(`first delay: ${delay.value}, Delay step: ${step.value}, amount: ${amount.value}`);
  }
}

function corectPromise({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function errorPromise({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

