import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');
startBtn.setAttribute('disabled', 'disabled')

const now = () => new Date().getTime();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - now() < 0) {
      Notify.warning('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};
let result = flatpickr('input#datetime-picker', options);

startBtn.addEventListener('click', goTimer);


function goTimer() {
    startBtn.setAttribute('disabled', 'disabled');
    
   return setInterval(() => {
     let watches = convertMs(result.selectedDates[0].getTime() - now()); 
     console.log(watches);
     days.textContent = addLeadingZero(watches.days);
     hours.textContent = addLeadingZero(watches.hours);
     minutes.textContent = addLeadingZero(watches.minutes);
     second.textContent = addLeadingZero(watches.seconds);
     
 }, 1000);
};
 
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

toUpperCase();

 

    
   
    

