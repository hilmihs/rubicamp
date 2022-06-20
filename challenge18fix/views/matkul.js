
import { rowsMatkul } from '../controllers/matkul.js';
import { inputMatkul } from '../controllers/matkul.js'; 
import { tablemk } from '../controllers/matkul.js';

export default class MatkulView {
    static menu() {
  console.log('===============================================================================')
  console.log('silahkan pilih opsi dibawah ini')
  console.log('[1] Daftar Mata kuliah')
  console.log('[2] Cari Mata kuliah')
  console.log('[3] Tambah Mata kuliah')
  console.log('[4] Hapus Mata kuliah')
  console.log('[5] Kembali')
  console.log('===============================================================================')
    }
    static isiTabel() {
        console.log(tablemk.toString());
    }
    static kembali() { 
        console.log('===============================================================================')
        console.log('silahkan pilih opsi dibawah ini')
        console.log('[1] Kembali ke Menu mata kuliah')
    }
    static error() {
        console.log('===============================================================================')
        console.log('Perintah tidak dikenal')
    }
    static hasilCari() {
        console.log('===============================================================================')
        console.log('Subject details')
        console.log('===============================================================================')
        console.log(`Nama mata kuliah         : ${rowsMatkul[0].namamatkul}`)
        console.log(`ID mata kuliah           : ${rowsMatkul[0].idmatkul}`)
        console.log(`SKS                      : ${rowsMatkul[0].sks}`)
    }
    static notFound() {
        console.log(`Matkul dengan ID ${inputMatkul} tidak dikenal`)
    }
    static tambah() {
        console.log('Lengkapi data dibawah ini')
    }
    static suksesTambah() {
        console.log(`Mata kuliah ${inputMatkul} berhasil ditambahkan`)
    }
    static suksesHapus() {
        console.log(`Mata kuliah dengan ID ${inputMatkul} berhasil dihapus.`)
    }
}