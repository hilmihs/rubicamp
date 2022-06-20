import { rowsMahasiswa } from '../controllers/mahasiswa.js';
import { inputMahasiswa } from '../controllers/mahasiswa.js';
import { tablem } from '../controllers/mahasiswa.js';

export default class MahasiswaView {
   static menu() {
        console.log('===============================================================================')
        console.log('silahkan pilih opsi dibawah ini')
        console.log('[1] Daftar Mahasiswa')
        console.log('[2] Cari Mahasiswa')
        console.log('[3] Tambah Mahasiswa')
        console.log('[4] Hapus Mahasiswa')
        console.log('[5] Kembali')
        console.log('===============================================================================')
       
    }
    static tabel() {
        console.log('===============================================================================')
    }
    static isiTabel() {
        console.log(tablem.toString());
    }
    static error() {
        console.log('===============================================================================')
        console.log('Perintah tidak dikenal')
    }
    static hasilCari() {
        console.log('===============================================================================')
        console.log('Student details')
        console.log('===============================================================================')
        console.log(`NIM              : ${rowsMahasiswa[0].nim}`)
        console.log(`Nama             : ${rowsMahasiswa[0].nama}`)
        console.log(`Alamat           : ${rowsMahasiswa[0].alamat}`)
        console.log(`Jurusan          : ${rowsMahasiswa[0].jurusan}`)
        console.log(`Umur             : ${rowsMahasiswa[0].umur}`)
    }
    static notFound() {
        console.log(`Mahasiswa dengan NIM ${inputMahasiswa.trim()} tidak dikenal`)
    }
    static tambah() {
        console.log('Lengkapi data dibawah ini')
    }
    static suksesTambah() {
        console.log(`Mahasiswa ${inputMahasiswa.trim()} berhasil ditambahkan`)
    }
    static suksesHapus() {
        console.log(`Mahasiswa dengan NIM ${inputMahasiswa.trim()} berhasil dihapus.`)
    }
}