const waitTime = 4000;

console.log(`Setting a timer for ${waitTime / 1000} seconds.`);
const timerFinished = () => {
  clearInterval(interval);
  console.log('Food heated!');
};

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;

const incrementTime = () => {
  currentTime += waitInterval;
  console.log(`Waiting time ${currentTime / 1000} seconds.`);
};

const interval = setInterval(incrementTime, waitInterval);
