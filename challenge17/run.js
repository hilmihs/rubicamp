import { MesinHitung } from './MesinHitung.js';
let Pi = Math.PI

var mh = new MesinHitung();


 mh.tambah(10).kurang(5).hasil(); // 1 + 10 - 5 = 6
 mh.tambah(3).multiply(4).divide(6).hasil(); // current result is 2 then the mhutate is 6 + 3 * 4 / 6 = 6
 mh.x = 7;
 console.log(`nilai sekarang : ${mh.x}`);
 mh.multiply(2).multiply(Pi).hasil() // keliling lingkaran dengan jari jari 7 => 2 x Pi x r = 44
 mh.x = 7;
 mh.square().multiply(Pi).hasil(); // luas lingkaran dengan jari jari 7 => Pi x r pangkat 2 = 154
 mh.x = 4;
mh.exponent(3).hasil() // 4 pangkat 3 = 64
 mh.squareRoot().hasil( ) // akar pangkat 2 dari 64 = 8 