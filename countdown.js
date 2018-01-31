function timer(minutes, seconds = 0) {
  let minuteCount = minutes;
  let secondsCount = seconds;
  let totalTime = minutes * 60 + seconds;
  let interval = setInterval(() => {
    totalTime--;
    secondsCount--;
    if (secondsCount === 0){
      secondsCount = 60;
      minuteCount --;
    } else if(totalTime === 0){
      clearInterval(interval);
    }
    console.log(`time remaining: ${minuteCount}:${secondsCount}`);
  }, 1000);
}
