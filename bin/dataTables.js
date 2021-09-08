var Table = require('cli-table');



// instantiate
var table = new Table({
  head: ["", "A", "B", "C", "D", "E"],
  chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
  , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
  , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
  , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
});



// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
  ['1', 'X', 'X', 'X', 'X', 'X',]
, ['2', 'X', '', '', 'X', 'X']
, ['3', '', 'X', 'X', '', '']
, ['4', 'X', 'X', 'X', 'X', 'X']
, ['5', '', 'X', 'X', '', '']
);

console.log(table.toString());

module.exports = table;