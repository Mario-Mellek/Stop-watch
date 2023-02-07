// const timerSection = document.getElementsByTagName('section')[1];
const timerInputMinutes = document.getElementById('watch-time--minutes');
const timerInputSeconds = document.getElementById('watch-time--seconds');
const countDown_startBtn = document.getElementsByClassName('start')[1];
const countDown_resetBtn = document.getElementsByClassName('reset')[1];
const countDown_time = document.getElementsByClassName('time')[1];

let countDown_interval;

const render = () => {
  countDown_time.innerText =
    timerInputMinutes.value.length <= 1
      ? `0${timerInputMinutes.value}:` +
        (timerInputSeconds.value.length <= 1
          ? `0${timerInputSeconds.value}`
          : timerInputSeconds.value)
      : `${timerInputMinutes.value}:` +
        (timerInputSeconds.value.length <= 1
          ? `0${timerInputSeconds.value}`
          : timerInputSeconds.value);
};

const timeDown = () => {
  timerInputSeconds.value--;
  render();
};

countDown_startBtn.addEventListener('click', () => {
  if (countDown_startBtn.innerText === 'Start') {
    render();
    countDown_interval = setInterval(timeDown, 1000);
    countDown_startBtn.innerText = 'Stop';
  } else {
    clearInterval(countDown_interval);
    countDown_startBtn.innerText = 'Start';
  }
});
