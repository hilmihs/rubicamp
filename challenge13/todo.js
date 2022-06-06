const fs = require('fs');
const jawaban = JSON.parse(fs.readFileSync('datatodo.json', 'utf-8'))
var sumber = process.argv;
var tugas = []
var beres = []
var kondisi;
var gabung;
var ubahString = process.argv[2].toString();
if (process.argv[2] == null || process.argv[2] == 'help') {
    console.log(">>> JS TODO <<<")
    console.log("$ node todo.js <command>")
    console.log("$ node todo.js list")
    console.log("$ node todo.js task <task_id>")
    console.log("$ node todo.js add <task_content>")
    console.log("$ node todo.js delete <task_id>")
    console.log("$ node todo.js complete <task_id>")
    console.log("$ node todo.js list:outstanding asc|desc")
    console.log("$ node todo.js list:completed asc|desc")
    console.log("$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N")
    console.log("$ node todo.js filter:<tag_name>")
} else if (process.argv[2] == 'add') {
    sumber.splice(0, 3);
    let keString = sumber.join(' ')
    console.log(`"${keString}" telah ditambahkan.`)
    tugas.push(keString);
    beres.push(false);
    gabung = tugas.concat(beres);
    var transfer = ',' + JSON.stringify(gabung) + ']';
    var string = JSON.stringify(jawaban)
    var potongan = string.slice(0, -1);
    fs.writeFileSync('datatodo.json', potongan)
    fs.appendFileSync('datatodo.json', transfer)
} else if (process.argv[2] == 'task') {
    var angkaTask = parseInt(process.argv[3])
    if (typeof angkaTask == 'number' && angkaCom != 0)
    if (jawaban[angkaTask][1] == true) {
        kondisi = "[x]"
    } else {kondisi = "[ ]"}
        var nomerTask = angkaTask
        
        console.log(`${nomerTask}. ${kondisi} ${jawaban[angkaTask][0]}`)
    } else if (process.argv[2] == 'list') {
    console.log('Daftar Pekerjaan')
    for (let i = 1; i < jawaban.length; i++) {
        if (jawaban[i][1] == true) {
            kondisi = "[x]"
        } else { kondisi = "[ ]" }
        console.log(`${i}. ${kondisi} ${jawaban[i][0]}`)
    }
} else if (process.argv[2] == 'delete') {
    var angka = parseInt(process.argv[3])
    if (typeof angka == 'number' && angka != 0) {
        console.log(`'${jawaban[angka][0]}' telah dihapus dari daftar`)
        jawaban.splice(angka, 1)
        var stringDel = JSON.stringify(jawaban)
        fs.writeFileSync('datatodo.json', stringDel)
    }
} else if (process.argv[2] == 'complete') {
    var angkaCom = parseInt(process.argv[3])
    if (typeof angkaCom == 'number' && angkaCom != 0) {
        console.log(`'${jawaban[angkaCom][0]}' telah selesai.`)
        jawaban[angkaCom][1] = true
        var stringCom = JSON.stringify(jawaban)
        fs.writeFileSync('datatodo.json', stringCom)
    }
} else if (process.argv[2] == 'uncomplete') {
    var angkaCom = parseInt(process.argv[3])
    if (typeof angkaCom == 'number' && angkaCom != 0) {
        console.log(`'${jawaban[angkaCom][0]}' status selesai dibatalkan.`)
        jawaban[angkaCom][1] = false
        var stringCom = JSON.stringify(jawaban)
        fs.writeFileSync('datatodo.json', stringCom)
    }
} else if (process.argv[2] == 'list:outstanding') {
    if (process.argv[3] == 'asc') {
        jawaban.sort();
    } else if (process.argv[3] == 'desc') {
        jawaban.sort();
        jawaban.reverse();
    }
    console.log('Daftar Pekerjaan')
    for (let i = 0; i < jawaban.length; i++) {
        if (jawaban[i][1] == false) {
            var nomer = i
            nomer++
            kondisi = "[ ]"
            console.log(`${nomer}. ${kondisi} ${jawaban[i][0]}`)
        }

    }
} else if (process.argv[2] == 'list:completed') {
    if (process.argv[3] == 'asc') {
        jawaban.sort();

    } else if (process.argv[3] == 'desc') {
        jawaban.sort();
        jawaban.reverse();
    }
    console.log('Daftar Pekerjaan')
    for (let i = 0; i < jawaban.length; i++) {
        if (jawaban[i][1] == true) {
            var nomer = i
            nomer++
            kondisi = "[x]"
            console.log(`${nomer}. ${kondisi} ${jawaban[i][0]}`)
        }
    }
} else if (process.argv[2] == 'tag') {
    var angkaTag = parseInt(process.argv[3])
    if (typeof angkaTag == 'number' && angkaCom != 0) {
        sumber.splice(0, 4);
        var simpan = sumber.toString();
        console.log(`Tag '${simpan}' telah dimasukan ke daftar '${jawaban[angkaTag][0]}'`)
        jawaban[angkaTag].push(sumber[0])
        jawaban[angkaTag].push(sumber[1])
        var stringTag = JSON.stringify(jawaban)
        fs.writeFileSync('datatodo.json', stringTag)
    }
} else if (process.argv[2] && ubahString.charAt(0) == 'f') {
        let hilangTitik = ubahString.replace(/:/g, " ")
        let ubahArray = hilangTitik.split(" ")
        console.log('Daftar Pekerjaan')
        for (let k = 1; k < jawaban.length; k++) {
            jawaban[k].findIndex(checkIndex);
            function checkIndex(index) {
                return index == `${ubahArray[1]}`
            }
            if (jawaban[k].findIndex(checkIndex) != -1) {
                if (jawaban[k][1] == true) {
                    kondisi = "[x]"
                } else { kondisi = "[ ]" }
                var nomerIndex = k
                console.log(`${nomerIndex}. ${kondisi} ${jawaban[k][0]}`)
            }
        }
} else {console.log("ERROR : Perintah tidak kenali, silahkan cek => node todo.js help")}

