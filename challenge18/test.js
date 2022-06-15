var Table = require('cli-table');

// instantiate
var table = new Table({
    head: ['Nama', 'kelas']
  , colWidths: [15, 20]
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
    ['Himawan','11' ]
  , ['Wildan', '12']
);

console.log(table.toString());