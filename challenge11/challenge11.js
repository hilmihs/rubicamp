console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!')

var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: '
});
const fs = require('fs');

const jawaban = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
console.log(jawaban[0].definition)
rl.prompt();
var count = 0;
var i = 0

rl.on('line', (isi) => {
    var answer = isi.trim();
    if (answer.toLowerCase() == jawaban[i].term) {
        console.log('Selamat anda benar!')
        count++
        if (count == jawaban.length) {
            console.log('Hore Anda Menang!')
            rl.close()
        }
        i++
        if (i < jawaban.length) {
        console.log(jawaban[i].definition)
        rl.prompt();}
        
    } else {
        console.log('Wkwkwk anda kurang beruntung!')
        rl.prompt();
    }
    
}

)


