import MahasiswaView from '../views/mahasiswa.js'
import ModelMahasiswa from '../models/mahasiswa.js';
import ControllerMenu from './menu.js';
import JurusanView from '../views/jurusan.js';
import { rl } from '../main_university.js';
import Table from 'cli-table'
import ControllerJurusan from './jurusan.js';

export var tablem = null;
export var arrayTable = []
export let rowsMahasiswa;
export let inputMahasiswa;

export default class ControllerMahasiswa {
    static interface() {
        MahasiswaView.menu();
        rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
            if (input.trim() == 1) {
                this.tabel()
            } else if (input.trim() == 2) {
                this.search()
            } else if (input.trim() == 3) {
                this.add()
            } else if (input.trim() == 4) {
                this.delete()
            } else if (input.trim() == 5) {
                ControllerMenu.menu()
            } else {
                MahasiswaView.error();
                this.interface();
            }
        })
    }
    static isiTabelNoInterface() {
        ModelMahasiswa.databaseTabel((rows) => {
            tablem = new Table({
                head: ['NIM', 'Nama', 'Alamat', 'Jurusan', 'Umur']
                , colWidths: [15, 15, 15, 15, 15]
            });
            for (let x = 0; x < rows.length; x++) {
                tablem.push([rows[x].nim, rows[x].nama, rows[x].alamat, rows[x].jurusan, rows[x].umur])
            }
            MahasiswaView.isiTabel()
        })
    }
    static tabel() {
        this.isiTabelNoInterface
        this.interface()
    }
    static search() {
        rl.question('Masukan NIM: ', (input) => {
            inputMahasiswa = input.trim();
            ModelMahasiswa.databaseSearch(input, (rows) => {
                if (rows.length == 1) {
                    rowsMahasiswa = rows;
                    MahasiswaView.hasilCari()
                    this.interface()
                } else if (input.trim() == 1) {
                    this.interface()
                } else {
                    MahasiswaView.notFound();
                    this.interface()
                }
            })

        })
    }
    static add() {
        MahasiswaView.tambah();
        rl.question('NIM: ', (input1) => {
            rl.question('Nama: ', (input2) => {
                rl.question('Alamat: ', (input3) => {
                    ControllerJurusan.isiTabelNoInterface();
                    setTimeout(() => rl.question('Jurusan: ', (input4) => {
                        rl.question('Umur: ', (input5) => {
                            inputMahasiswa = input2;
                            ModelMahasiswa.databaseAdd(input1, input2, input3, input4, input5)
                            MahasiswaView.suksesTambah();
                            this.tabel();
                        })
                    }), 500)
                })
            })
        })
    }
    static delete() {
        rl.question('Masukkan NIM Mahasiswa yang akan dihapus: ', (input) => {
            input.trim()
            inputMahasiswa = input
            ModelMahasiswa.databaseSearch(input, (rows) => {
                if (rows.length == 1) {
                    ModelMahasiswa.databaseDelete(input);
                    MahasiswaView.suksesHapus();
                    this.tabel();
                } else {
                    MahasiswaView.notFound();
                    this.interface();
                }
            })
        })
    }
}