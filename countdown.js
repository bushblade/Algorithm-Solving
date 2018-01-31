function timer(minutes, seconds = 0) {
  let minuteCount = minutes;
  let secondsCount = seconds;
  let totalTime = minutes * 60 + seconds;
  let interval = setInterval(() => {
    console.log(`time remaining: ${minuteCount}:${secondsCount}`);
    totalTime--;
    secondsCount--;
    if (secondsCount < 0){
      secondsCount = 59;
      minuteCount --;
    }
    totalTime < 0 ? clearInterval(interval) : false;
  }, 1000);
}
