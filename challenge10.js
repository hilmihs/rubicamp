var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('tulis kalimatmu disini >  ');
rl.prompt();

rl.on('line', function(line) {
    let simpen = line.trim();
    let arraySen = simpen.split(" ");
    let pattern = /\b[aiueo]/;
    let tangkep = "";
    
    for (let i = 0; i < arraySen.length; i++) {
        if (pattern.test(arraySen[i])) {
        tangkep += arraySen[i] + " ";
        } else {
        let firstLetter = arraySen[i].substring(0, 1);   
       let deleteFirst = arraySen[i].replace(/\b[^aiueo]/,"")
       let total = deleteFirst + firstLetter + "nyo";
       tangkep += total + " ";
        }
       
    }
 console.log(`hasil konversi: ${tangkep}`);
  rl.prompt();
}).on('close', function() {
  console.log('Good bye!');
  process.exit(0);
});