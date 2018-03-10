//############### intro Gates ################

function addTwoDigits(n) {
  return [...String(n)].reduce((a,x) => a + Number(x),0)
  }