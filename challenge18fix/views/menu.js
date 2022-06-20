export default class MainMenu {
    static mainInterface() {
        console.log('===============================================================================')
        console.log('silahkan pilih opsi dibawah ini')
        console.log('[1] Mahasiswa')
        console.log('[2] Jurusan')
        console.log('[3] Dosen')
        console.log('[4] Mata kuliah')
        console.log('[5] Kontrak')
        console.log('[6] Keluar')
        console.log('===============================================================================')
    }
    static exit() {
        console.log('===============================================================================')
      console.log('Kamu telah keluar.');
    }
    static error() {
        console.log('Perintah tidak dikenal')
    }
}