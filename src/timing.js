const waitTime = 4000;

console.log(`Setting a timer for ${waitTime / 1000} seconds.`);
const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  console.log('\nFood heated!');
};

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;

const incrementTime = () => {
  currentTime += waitInterval;
  const time = Math.floor(currentTime / 1000);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting... ${time} second.`);
};

const interval = setInterval(incrementTime, waitInterval);
