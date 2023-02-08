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

const reset = () => {
  clearInterval(countDown_interval);
  countDown_time.innerText = '00:00';
  timerInputMinutes.value = timerInputSeconds.value = '0';
  countDown_startBtn.innerText = 'Start';
};

const timeDown = () => {
  if (countDown_time.innerText !== '00:00') {
    timerInputSeconds.value--;
    if (parseInt(timerInputSeconds.value) <= 0) {
      if (parseInt(timerInputMinutes.value) === 0) {
        ringTone.play();
        reset();
        return;
      }
      timerInputMinutes.value--;
      timerInputSeconds.value = '59';
    }
    render();
  } else {
    reset();
    const warning = document.createElement('span');
    warning.innerText = 'No input detected';
    warning.animate([{ transform: 'scale(0)' }, { transform: 'scale(1)' }], {
      duration: 500,
    });
    countDown_time.insertAdjacentElement('beforebegin', warning);
    setTimeout(() => {
      warning.remove();
    }, 3000);
  }
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

countDown_resetBtn.addEventListener('click', reset);
