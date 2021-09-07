const chalk = require('chalk')
const figlet = require('figlet')


module.exports = {
  title: (welcomeString) =>
    console.log(`${
      chalk.yellow(
        figlet.textSync(`${welcomeString}`, {
          horizontalLayout: 'default',
          width: 70,
        })
      )}`)


}