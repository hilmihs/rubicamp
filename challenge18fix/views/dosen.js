import { rowsDosen } from '../controllers/dosen.js';
import { inputDosen } from '../controllers/dosen.js';
import { tabled } from '../controllers/dosen.js'; 

export default class DosenView {
    static menu() {
        console.log('===============================================================================')
        console.log('silahkan pilih opsi dibawah ini')
        console.log('[1] Daftar Dosen')
        console.log('[2] Cari Dosen')
        console.log('[3] Tambah Dosen')
        console.log('[4] Hapus Dosen')
        console.log('[5] Kembali')
        console.log('===============================================================================')
    }
    static isiTabel() {
        console.log(tabled.toString());
    }
    static error() {
        console.log('===============================================================================')
        console.log('Perintah tidak dikenal')
    }
    static hasilCari() {
        console.log('===============================================================================')
        console.log('Lecturer details')
        console.log('===============================================================================')
        console.log(`Nama Dosen             : ${rowsDosen[0].nama}`)
        console.log(`ID Dosen               : ${rowsDosen[0].iddosen}`)
    }
    static notFound() {
        console.log(`Dosen dengan ID ${inputDosen} tidak dikenal`)
    }
    static tambah() {
        console.log('Lengkapi data dibawah ini')
    }
    static suksesTambah() {
        console.log(`Dosen ${inputDosen} berhasil ditambahkan`)
    }
    static suksesHapus() {
        console.log(`Dosen dengan ID ${inputDosen} berhasil dihapus.`)
    }
}