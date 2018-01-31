function timer(minutes, seconds = 0) {
  let minuteCount = minutes;
  let secondsCount = seconds;
  let totalTime = minutes * 60 + seconds;
  let interval = setInterval(() => {
    console.log(`time remaining: ${minTwoDidgets(minuteCount)}:${minTwoDidgets(secondsCount)}`);
    totalTime--;
    secondsCount--;
    if (secondsCount < 0){
      secondsCount = 59;
      minuteCount --;
    }
    totalTime < 0 ? clearInterval(interval) : false;
  }, 1000);
}

function minTwoDidgets(num){
  let x = String(num);
  x.length < 2 ? x = `0${num}` : false;
  return x;
}