function spiral(param1) {
    var dimensi = []
    var kosong = []
    var kosongDua = []
    var i = 0
    var j = 0
    var atas = param1
    var kanan = param1
    var bawah = 0
    var kiri = 0
    var x = 0
    var y = 0
    var count = 0
    var ujung = param1 * param1;
    for (var i = 0; i < param1; i++) {
        dimensi[i] = []
        for (var j = 0; j < param1; j++) {
            dimensi[i][j] = count
            count++
        }
    }
    while (kosong.length < ujung) {
        for (y; y < atas; y++) { // 0,1,2,3,4//
            kosong.push(dimensi[x][y]);


        } atas--
        x++
        y--

        for (x; x < kanan; x++) { //9,14,19,24//
            kosong.push(dimensi[x][y]);

        } kanan--
        x--
        y--
        for (y; y >= bawah; y--) {  //23,22,21,20//
            kosong.push(dimensi[x][y]);

        } bawah++;
        y++

        for (x = x - 1; x > kiri; x--) { //15,10,5//

            kosong.push(dimensi[x][y]);

        } kiri++
        x++
        y++

            ;
    }
    console.log(kosong)
}

spiral(5);
spiral(6);
spiral(7);