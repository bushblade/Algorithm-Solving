//after 5 seconds calls a ring function 5 times with a 1 second interval beteen rings

setTimeout(() => {
  let counter = 0;
  let interval = setInterval(() => {
    rinRing();
    counter++;
    counter === 5 ? clearInterval(interval) : false;
  }, 1000);
}, 5000);

function rinRing() {
  console.log("Ring Ring!");
}
