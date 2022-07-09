// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin(record){
    let foundwin = record.find(element => element.result === undefined)
    if (foundwin === "W") {
        return foundwin.year}
        else {
        return undefined
    }
   
  }
  