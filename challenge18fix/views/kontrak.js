import { rowsKontrak } from '../controllers/kontrak.js'; 
import { inputKontrak } from '../controllers/kontrak.js'; 
import { tablek } from '../controllers/kontrak.js'; 

export default class KontrakView {

    static menu() {
        console.log('===============================================================================')
        console.log('silahkan pilih opsi dibawah ini')
        console.log('[1] Daftar Kontrak')
        console.log('[2] Cari Kontrak')
        console.log('[3] Tambah Kontrak')
        console.log('[4] Hapus Kontrak')
        console.log('[5] Kembali')
        console.log('===============================================================================')
    }
    static tabel() {
        console.log('===============================================================================')
    }
    static isiTabel() {
        console.log(tablek.toString());
    }
    static cancel() { 
        console.log('===============================================================================')
        console.log('silahkan pilih opsi dibawah ini')
        console.log('[back] Kembali ke Menu kontrak')
    }
    static error() {
        console.log('===============================================================================')
        console.log('Perintah tidak dikenal')
    }
    static hasilCari() {
        console.log('===============================================================================')
        console.log('Contract details')
        console.log('===============================================================================')
        console.log(`NIM                   : ${rowsKontrak[0].nim}`)
        console.log(`ID Kontrak            : ${rowsKontrak[0].id}`)
        console.log(`ID Dosen              : ${rowsKontrak[0].dosen_id}`)
        console.log(`ID Matkul             : ${rowsKontrak[0].matkul_id}`)
        console.log(`ID Jurusan            : ${rowsKontrak[0].jurusan_id}`)
        console.log(`Nilai                 : ${rowsKontrak[0].nilai}`)
    }
    static notFound() {
        console.log(`Kontrak dengan ID ${inputKontrak} tidak dikenal`)
    }
    static tambah() {
        console.log('Lengkapi data dibawah ini')
    }
    static suksesTambah() {
        console.log(`Kontrak untuk NIM ${inputKontrak} berhasil ditambahkan`)
    }
    static suksesHapus() {
        console.log(`Kontrak dengan ID ${inputKontrak} berhasil dihapus`)
    }
}