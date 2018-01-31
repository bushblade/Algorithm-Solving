function timer(time) {
  let count = time;
  let interval = setInterval(() => {
    count--;
    console.log(count);
    count === 0 ? clearInterval(interval) : false;
  }, 1000);
}