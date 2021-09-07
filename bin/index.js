const inquirer = require('inquirer');
const clear = require('clear');
const header = require('./header');
const menu = require('./menu');
const select = require('./select');

clear();

header.title('airConsole');

menu.menuOptions();

// select.mainOptions();