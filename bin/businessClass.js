const inquirer = require('inquirer');


module.exports = {

  businessClass: () =>

  inquirer
  .prompt([
    
    {
      type: 'rawlist',
      name: 'row',
      message: 'What row would you like to sit in?',
      choices: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      filter(val) {
        return val.toLowerCase();
      },
  validate(answer) {
    if (answer.length < 1) {
      return 'You must choose a row.';
    }

    return true;
  },
},
])
.then(answers => {
console.log(JSON.stringify(answers, null, '  '));
if (answers.type == 'first') {
  console.log('Row One')
} if (answers.type == 'second' ) {
  console.log('Row Two')
} if (answers.type == 'third') {
  console.log('Row Three')
} if (answers.type == 'fourth' ) {
  console.log('Row Four')
} if (answers.type == 'fifth' ) {
  console.log('Row Five')
}
  })
  }