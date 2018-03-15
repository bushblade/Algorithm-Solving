//search a JSON object for partial matches to an input string and return 
//an array of objects that have title of the object which contains the results
//and any submenu associated with the matching result.

const menuList = {
  "cockpit": [{
      "text": "Dashboard",
      "content": "dashboard",
      "submenu": [],
      "tags": ["buchungen", "meinmenu"]
    },
    {
      "text": "Dashmaster",
      "content": "dashmaster",
      "submenu": [],
      "tags": ["buchungen", "meinmenu"]
    },
    {
      "text": "Pinnwand",
      "content": "pinboard",
      "submenu": [],
      "tags": ["tag3", "tag4"]
    },
    {
      "text": "Buchungen",
      "content": "bookings",
      "submenu": [],
      "tags": ["tag5", "tag6"]
    },
    {
      "text": "Planung 1",
      "content": "planning1",
      "submenu": [],
      "tags": ["tag7", "tag8"]
    },
    {
      "text": "Gruppenbuchungen",
      "content": "group-bookings",
      "submenu": [{
          "text": "Ubersicht",
          "iconclass": "",
          "content": "overview",
          "submenu": [],
          "tags": ["tag9", "tag10"]
        },
        {
          "text": "Uberlaut",
          "iconclass": "",
          "content": "uberlaut",
          "submenu": [],
          "tags": ["tag9", "tag10"]
        }
      ]
    },
    {
      "text": "Uberbuchungen",
      "content": "uber-bookings",
      "submenu": [{
          "text": "Soegal",
          "iconclass": "",
          "content": "soegal",
          "submenu": [],
          "tags": ["tag9", "tag10"]
        },
        {
          "text": "Wurscht",
          "iconclass": "",
          "content": "wurscht",
          "submenu": [],
          "tags": ["tag9", "tag10"]
        }
      ]
    }
  ],
  "accounting": [{
      "text": "Kassenbuch",
      "content": "cashbook",
      "submenu": [],
      "tags": ["kassenbuch", "tag14"]
    },
    {
      "text": "Artikel",
      "content": "inhouseextras",
      "submenu": [],
      "tags": ["tag15", "tag16"]
    },
  ],
  "rates": [{
      "text": "Dashboard",
      "iconclass": "fa fa-eur",
      "content": "dashboard",
      "submenu": [],
      "tags": ["tag17", "tag18"]
    },

    {
      "text": "Preisliste",
      "iconclass": "fa fa-eur",
      "content": "pricelist",
      "submenu": [],
      "tags": ["tag17", "tag18"]
    },
    {
      "text": "Kalender",
      "content": "calendar",
      "submenu": [],
      "tags": ["tag19", "tag20"]
    },
    {
      "text": "BookingSuite",
      "content": "bookingsuite",
      "submenu": [{
          "text": "Ubersicht",
          "iconclass": "",
          "content": "overview",
          "submenu": [],
          "tags": ["tag21", "tag22"]
        },
        {
          "text": "Automatik",
          "iconclass": "",
          "content": "automatic",
          "submenu": [],
          "tags": ["tag23", "tag24"]
        },
        {
          "text": "Einstellungen",
          "iconclass": "",
          "content": "settings",
          "submenu": [],
          "tags": ["tag25", "tag26"]
        }
      ],
    }
  ]
}

//primary object to return in the final array
const primaryObj = {
  title: '',
  results: []
}

//an object for each result to be pushed to primary objects 'results'
const resultObj = {
  title: '',
  submenu: []
}

function search(obj, search) {
  let output = []
  for (key in obj) {
    let primary 
    let result = obj[key].filter(x => x.text.toLowerCase().includes(search))
    if (result.length > 0){
      primary = Object.create(primaryObj)
      primary.title = key
      primary.results = result.reduce((a, x) => {
        let resObj = Object.create(resultObj)
        resObj.title = x.text
        resObj.subMenus = x.submenu.reduce((c,b) => {
          c.push(b.text)
          return c
        }, [])
        a.push(resObj)
        return a
      }, [])
    }
    output.push(primary)
  }
  return output.filter(x => x !== undefined)
}
console.log(search(menuList, 'buch'))
console.table(search(menuList, 'buch'))



//origional idea to push to a DOM
// function search(obj, search){
//   for(key in obj){
//     let result = obj[key].filter(x => x.text.toLowerCase().includes(search))
//     result.length > 0 ? console.log(`* ${key}`) : false
//     result.forEach(x => {
//       console.log(`* ---${x.text}`)
//       x.submenu.forEach(a => console.log(`* ------ ${a.text}`))
//     })
//   }
// }
// search(menuList, 'buch')