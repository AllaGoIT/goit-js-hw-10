
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

let userSelectedDate;

const btnEl = document.querySelector("button");
const inputEl = document.querySelector(".input-field");

const clock = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),

  setTime(days, hours, minutes, seconds) {
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.minutes.textContent = `${minutes}`;
    this.seconds.textContent = `${seconds}`;
  }
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

let intervalId; 

function deactivateEl() {
  btnEl.disabled = true;
  btnEl.style.backgroundColor = "rgba(152, 152, 152, 1)";
  inputEl.style.borderColor = "rgba(128, 128, 128, 1)";
}

function activateEl() {
  btnEl.disabled = false;
  btnEl.style.backgroundColor = "rgba(78, 117, 255, 1)";
  inputEl.style.borderColor = "rgba(0, 0, 0, 1)";
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].valueOf() < Date.now().valueOf()) {
      alert(`Please choose a date in the future`);
      deactivateEl();
    }
    else {
      userSelectedDate = selectedDates[0];
      activateEl();
      console.log(userSelectedDate);
    }
  }
}

flatpickr("#datetime-picker", options);

let counter;

btnEl.addEventListener("click", timerStart);

function timerStart() {
  deactivateEl();
  intervalId = setInterval(timerStep, 1000);
}

function timerStep() {
  counter = userSelectedDate - Date.now();

  const c = convertMs(counter);

  clock.setTime(c.days, c.hours, c.minutes, c.seconds);

  if (counter.valueOf() === 0) {
    timerStop();
  }
}

function timerStop() {
  clearInterval(intervalId);
  activateEl();
  
}
