var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');
var getRandomItem = uniqueRandomArray(starWarsNames);

function random(number) {
  if (number == undefined) {
    return getRandomItem();
  } else {
    var randomItems =[];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}

module.exports = {
  all: starWarsNames,
  random: random
};
