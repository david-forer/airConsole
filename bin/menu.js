const inquirer = require('inquirer');
const header = require('./header');
const seat = require('./seatClass');

module.exports = {
  menuOptions: () =>
  inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'list',
      message: 'Please Select an Option',
      name: 'option',
      choices: [
        {
          name: 'reservation',
        },
        {
          name: 'Seat Verification',
        },
        {
          name: 'Exit the System',
        }
  ],
  validate(answer) {
    if (answer.length < 1) {
      return 'You must choose an option.';
    }

    return true;
  },
},
])
.then(answers => {
console.log(JSON.stringify(answers, null, '  '));
if (answers.option == 'reservation') {
  header.title('Seat Class'),
  seat.seatClass();
} if (answers.option == 'Seat Verification' ) {
  console.log('Seat Verification')
} if (answers.option == 'Exit the System') {
  console.log(' good bye ')
}
  })
  }