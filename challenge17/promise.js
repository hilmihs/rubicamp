const fs = require('fs')

fs.readFile('data.txt', 'utf-8', (err,data)  => {
    if(err){
        console.log('ini error', err)
    }
    console.log(data)
})