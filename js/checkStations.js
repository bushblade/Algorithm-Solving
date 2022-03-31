// run the following code in console on the bellow link
// http://www.inclusivelondon.com/londonunderground.aspx?tbclr=1

// the code finds the minimum London underground stations that include all 
// of the letters of the alphabet collectively.

let stations = Array.from(document.querySelectorAll('.hlistLineLink'))
  .map(element => element.textContent.toLowerCase().trim())

let alphabet = [...'abcdefghijklmnopqrstuvwxyz']

let finalStations = []

function checkStations() {
  let stationsHash = stations.map(station => {
    let alphaCount = [...alphabet].reduce((sum, letter) => {
      if (station.includes(letter)) sum++
        return sum
    }, 0)
    return {
      station,
      alphaCount
    }
  }).sort((a, b) => b.alphaCount - a.alphaCount)
  finalStations.push(stations.splice(stations.indexOf(stationsHash[0].station), 1))
  alphabet = alphabet.filter(letter => !stationsHash[0].station.includes(letter))
  if (alphabet.length > 0) checkStations()
  else console.log(finalStations)
}

checkStations()