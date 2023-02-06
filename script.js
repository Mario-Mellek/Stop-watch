const startBtn = document.getElementsByClassName('start')[0];
const resetBtn = document.getElementsByClassName('reset')[0];
const time = document.getElementsByClassName('time')[0];
const alarmTime = document.getElementById('alarm-time--minutes');
const alarmTimeSeconds = document.getElementById('alarm-time--seconds');
const ringTone = new Audio('./assets/Alarm.mp3');
const flipbtn = document.getElementsByTagName('small')[0];

let secondsInterval;
let minutes = 0;
let seconds = 0;

function flipAround() {
  const front = document.getElementsByTagName('section')[0];
  const back = document.getElementsByTagName('section')[1];
  if (front.classList[0] === 'front') {
    back.style.cssText = 'display:none;';
    front.style.cssText = 'display:flex;';
  } else if (front.classList[0] === 'back') {
    back.style.cssText = 'display:flex;';
    front.style.cssText = 'display:none;';
  }
}

flipAround();

function alarm() {
  minutes === parseInt(alarmTime.value) &&
  seconds === parseInt(alarmTimeSeconds.value)
    ? ringTone.play()
    : null;
}

const timer = () => {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  alarm();
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
  minutes = seconds = 0;
  startBtn.innerHTML = 'Start';
  alarmTime.value = alarmTimeSeconds.value = '0';
});

flipbtn.addEventListener('click', () => {
  const section = document.getElementsByTagName('section')[0];
  if (section.classList.contains('front')) {
    section.classList.replace('front', 'back');
    flipAround();
    return;
  }
  if (section.classList.contains('back')) {
    section.classList.replace('back', 'front');
    flipAround();
    return;
  }
});
