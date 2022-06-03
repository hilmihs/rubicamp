if (process.argv.length == 3) {
    var readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Tebakan: '
    });
    const fs = require('fs');

    const jawaban = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
    console.log(`Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini '${process.argv[2]}'.`)
    console.log('Untuk bermain jawablah dengan jawaban yang sesuai.')
    console.log(`Gunakan 'skip' untuk meangguhkan pertanyaan, dan di akhir pertanyaan akan ditanyakan lagi.`)
    console.log('                 ')
    console.log(`Pertanyaan:  ${jawaban[0].definition}`)
    rl.prompt();
    var count = 0;
    var falseCount = 0;
    var i = 0
    rl.on('line', (isi) => {
        var answer = isi.trim();

        if (answer.toLowerCase() == jawaban[i].term) {

            console.log('Anda Beruntung!')
            jawaban.splice(i, 1);
            if (i == jawaban.length) {
                i = 0;
            }
            console.log(jawaban)

            if (jawaban.length >= 1) {
                console.log(`Pertanyaan:  ${jawaban[i].definition}`)

            }
            if (jawaban.length == 0) {
                console.log('Hore Anda Menang!')
                rl.close()

            }


        } else if (answer.toLowerCase() == 'skip') {
            i++
            console.log(i)
            if (i == jawaban.length) {
                i = 0;
            }
            console.log(`Pertanyaan:  ${jawaban[i].definition}`);

        }
        else {
            falseCount++
            console.log(`Anda kurang beruntung! anda telah salah ${falseCount} kali, silahkan coba lagi.`)

        }
        rl.prompt();
    }

    )
} else {
    console.log('Tolong sertakan nama file sebagai inputan soalnya')
    console.log("Misalnya 'node solution.js data.json'")
}
