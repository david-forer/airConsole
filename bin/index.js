const inquirer = require('inquirer');
const clear = require('clear');
const header = require('./header');

clear();

header.title();



inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'checkbox',
      message: 'Task Selection',
      name: 'user-interaction',
      choices: [
        {
          name: 'Reservation',
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
.then((answers) => {
console.log(JSON.stringify(answers, null, '  '));
  });