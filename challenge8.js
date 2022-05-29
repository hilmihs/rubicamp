function pola (str) {
var hasilJumlah = [];
let hilang = str.replace(/[*=]/g,'')
 hilang = str.replace(/[#]/g,'i')
 var array = hilang.split(" ")
 parseInt(array);
array.splice(1, 1);
array.splice(2, 1);
for (let i = 0; i < array.length; i++) {
    if (array[i].includes('i')) {
        let arrStr = array.toString('');
        var hilangKoma = arrStr.replace(/,/g,' ')
        let cariI = arrStr.indexOf('i')
    }
        if (hilangKoma) {
    for (var j = 0; j < 10; j++) {
        var hasil = hilangKoma.replace('i', j);
        let balikArr = hasil.split(' ');
        var simpan = balikArr[0] * balikArr[1];
        for (var k = 0; k < 10; k++) {       
        var hasilUjung = hasil.replace('i', k);
        var balikUjung = hasilUjung.split(' ');
        var angka = parseInt(balikUjung[2]);
        if (simpan == angka) {
            hasilJumlah.push(j);
            hasilJumlah.push(k);
            return hasilJumlah;
        } 
        
        } 
        
    }
   
} 
} 
} 
console.log(pola("42#3 * 188 = 80#204")) //result: [8, 5]
console.log(pola("8#61 * 895 = 78410#5")) //result: [7, 9]