// run the following code in console on the bellow link
// http://www.inclusivelondon.com/londonunderground.aspx?tbclr=1

let stations = Array.from(document.querySelectorAll('.hlistLineLink'))
  .map(element => element.textContent.toLowerCase().trim())

let alphabet = [...'abcdefghijklmnopqrstuvwxyz']

let finalStations = []

function checkStations() {
  let stationsHash = stations.map(station => {
    let alphaCount = 0
    for (let letter of alphabet) {
      if (station.includes(letter)) alphaCount++
    }
    return {
      station,
      alphaCount
    }
  }).sort((a, b) => b.alphaCount - a.alphaCount)
  stations = stations.filter(station => station !== stationsHash[0].station)
  finalStations.push(stationsHash[0].station)
  alphabet = alphabet.filter(letter => !stationsHash[0].station.includes(letter))
  if (alphabet.length > 0) checkStations()
  else console.log(finalStations)
}

checkStations()