const inquirer = require('inquirer');


module.exports = {
mainOptions: () =>
  inquirer.prompt([
    {
      name: 'option',
      type: 'rawlist',
      message: 'Choose an Option:\n',
      choices: [
        'Get Total Users',
        'Manage Users',
      ]
    }
  ])
}