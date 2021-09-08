const inquirer = require('inquirer');
const header = require('./header');
const row = require('./businessClass');
const table = require('./dataTables');


module.exports = {

  

  seatClass: () =>

  inquirer
  .prompt([
    
    {
      type: 'list',
      message: 'Please Select a Class',
      name: 'type',
      choices: [
        {
          name: 'Business Class',
        },
        {
          name: 'Economy Class',
        }
  ],
  validate(answer) {
    if (answer.length < 1) {
      return 'You must choose a class.';
    }

    return true;
  },
},
])
.then(answers => {
console.log(JSON.stringify(answers, null, '  '));
if (answers.type == 'Business Class') {
  header.title('Row?')
  console.log(table.toString()),

  row.businessClass()
  
} if (answers.type == 'Economy Class' ) {
  console.log('Economy Class')
}
  })
  }