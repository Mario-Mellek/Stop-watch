const startBtn = document.getElementsByClassName('start')[0];
const resetBtn = document.getElementsByClassName('reset')[0];
const time = document.getElementsByClassName('time')[0];

let secondsInterval;
let minutes = 0;
let seconds = 0;

const timer = () => {
  seconds++;
  // minutes = Math.floor(seconds / 60);
  if ((seconds == 60) % 60) {
    minutes++;
    seconds = 0;
  }
  time.innerHTML =
    minutes.toString().length <= 1
      ? `0${minutes}:${
          seconds.toString().length <= 1 ? `0${seconds}` : `${seconds}`
        }`
      : `${minutes}:${
          seconds.toString().length <= 1 ? `0${seconds}` : `${seconds}`
        }`;
};

startBtn.addEventListener('click', () => {
  if (startBtn.innerHTML === 'Start') {
    secondsInterval = setInterval(timer, 1000);
    startBtn.innerHTML = 'Stop';
  } else {
    clearInterval(secondsInterval);
    startBtn.innerHTML = 'Start';
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(secondsInterval);
  time.innerHTML = '00:00';
  minutes = 0;
  seconds = 0;
  startBtn.innerHTML = 'Start';
});
