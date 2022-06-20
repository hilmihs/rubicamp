import { rowsJurusan } from '../controllers/jurusan.js';
import { inputJurusan } from '../controllers/jurusan.js';
import { tablej } from "../controllers/jurusan.js";

export default class JurusanView {
    static menu() {
        console.log('===============================================================================')
        console.log('silahkan pilih opsi dibawah ini')
        console.log('[1] Daftar Jurusan')
        console.log('[2] Cari Jurusan')
        console.log('[3] Tambah Jurusan')
        console.log('[4] Hapus Jurusan')
        console.log('[5] Kembali')
        console.log('===============================================================================')

    }
    static tabel() {
        console.log('===============================================================================')

    }
    static isiTabel() {
        console.log(tablej.toString());
    }   
    static error() {
        console.log('===============================================================================')
        console.log('Perintah tidak dikenal')
    }
    static hasilCari() {
        console.log('===============================================================================')
        console.log('Major details')
        console.log('===============================================================================')
        console.log(`Nama Jurusan             : ${rowsJurusan[0].namajurusan}`)
        console.log(`ID Jurusan               : ${rowsJurusan[0].idjurusan}`)
    }
    static notFound() {
        console.log(`Jurusan dengan ID ${inputJurusan.trim()} tidak dikenal`)

    }
    static tambah() {
        console.log('Lengkapi data dibawah ini')

    }
    static suksesTambah() {
        console.log(`Jurusan ${inputJurusan} berhasil ditambahkan`)
    }
    static suksesHapus() {
        console.log(`Jurusan dengan ID ${inputJurusan} berhasil dihapus.`)
    }
}