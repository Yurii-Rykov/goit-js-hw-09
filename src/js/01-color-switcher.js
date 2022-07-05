
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

startBtn.addEventListener('click', () => {
    startBtn.setAttribute('disabled', 'disabled');
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        stopBtn.removeAttribute('disabled')
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    stopBtn.setAttribute('disabled', 'disabled');
    startBtn.removeAttribute('disabled');   
});