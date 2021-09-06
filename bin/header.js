const chalk = require('chalk')
const figlet = require('figlet')


module.exports = {
  title: () =>
    console.log(`${
      chalk.yellow(
        figlet.textSync(' Welcome to \n AirConsole', {
          horizontalLayout: 'default',
          width: 70,
        })
      )}`)


}