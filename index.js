// Code your solution here

function   findMatching(drivers, name){
    const test = 
    drivers.filter(function(driver){return driver.toLowerCase() === name.toLowerCase()}) 
    return test}

    function fuzzyMatch(drivers, attribute) {
        return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
      }
      
      function matchName(drivers, argument) {
        return drivers.filter(function (driver) { return driver.name === argument })
      }

