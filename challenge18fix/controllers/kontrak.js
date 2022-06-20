import KontrakView from "../views/kontrak.js";
import ModelKontrak from "../models/kontrak.js";
import ControllerMenu from "./menu.js";
import ControllerMahasiswa from "./mahasiswa.js";
import ControllerDosen from "./dosen.js";
import ControllerJurusan from "./jurusan.js";
import ControllerMatkul from "./matkul.js";
import { rl } from "../main_university.js";
import Table from "cli-table";

export let kosongk;
export let rowsKontrak;
export let inputKontrak;
export var tablek = null;

export default class ConstructorKontrak {
    static interface() {
        KontrakView.menu();
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
                ControllerMenu.menu();
            } else {
                KontrakView.error()
                this.interface();
            }
        }
        )
    }
    static tabel() {
        KontrakView.tabel()
        ModelKontrak.databaseTabel((rows) => {
            tablek = new Table({
                head: ['ID kontrak', 'NIM', 'ID Dosen', 'ID Matkul', 'ID Jurusan', 'Nilai']
                , colWidths: [15, 15, 15, 15, 15, 15]
            });
            for (let x = 0; x < rows.length; x++) {
                tablek.push([rows[x].id, rows[x].nim, rows[x].dosen_id, rows[x].matkul_id, rows[x].jurusan_id, rows[x].nilai])
            }
            KontrakView.isiTabel();
            this.interface();
        })
        
    }
    static search() {
        rl.question('Masukan ID kontrak: ', (input) => {
            input.trim();
            ModelKontrak.databaseSearch(input, (rows) => {
                if (rows.length == 1) {
                    rowsKontrak = rows;
                    KontrakView.hasilCari();
                    this.interface();
                } else {
                    KontrakView.notFound();
                    this.interface()
                }
            })
        })
    }
    static add() {
        ControllerMahasiswa.isiTabelNoInterface()
        KontrakView.tambah();
        setTimeout( () => rl.question('NIM: ', (input1) => {
            inputKontrak = input1.trim()
            ControllerDosen.isiTabelNoInterface();
            setTimeout( () => rl.question('ID Dosen: ', (input2) => {
                input2.trim()
                ControllerMatkul.isiTabelNoInterface();
                setTimeout( () => rl.question('ID Matkul: ', (input3) => {
                    input3.trim()
                    ControllerJurusan.isiTabelNoInterface();
                    setTimeout( () =>  rl.question('ID Jurusan: ', (input4) => {
                        input4.trim()
                        rl.question('Nilai: ', (input5) => {
                            input5.trim()
                            ModelKontrak.databaseAdd(input5, input1, input2, input4, input3);
                            KontrakView.suksesTambah();
                            this.tabel();
                        })
                    }), 500)
                }), 500)
            }), 500)
        }), 500)
    }
    static delete() {
        rl.question('Masukkan ID kontrak yang akan dihapus: ', (input1) => {
            input1.trim()
            ModelKontrak.databaseSearch(input1, (rows) => {
                if (rows.length == 1) {
                    inputKontrak = input1
                    ModelKontrak.databaseDelete(input1);
                    KontrakView.suksesHapus();
                    this.tabel();
                } else {
                    KontrakView.notFound();
                    this.interface();
                }
            })
        })
    }
}