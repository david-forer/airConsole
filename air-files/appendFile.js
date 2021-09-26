const fs = require('fs');

fs.appendFile('air-files/reserve.txt', '"firstName":"george", "lastName":"Harrison", "passport":"acc12345"', function (err) {
  if (err) throw err;
  console.log('Saved!');
});