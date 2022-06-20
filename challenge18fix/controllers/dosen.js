import DosenView from "../views/dosen.js";
import ModelDosen from "../models/dosen.js";
import ControllerMenu from "./menu.js"; 
import { rl } from "../main_university.js";
import Table from 'cli-table'

export let rows = []
export let rowsDosen;
export let inputDosen;
export let tabled = null;


export default class ControllerDosen {
    static interface() {
        DosenView.menu();
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
                DosenView.error();
                this.interface();
            }
        })
    }
    static isiTabelNoInterface() {
        ModelDosen.databaseTabel((rows) => {
            tabled = new Table({
                head: ['Nama dosen', 'ID dosen']
                , colWidths: [20, 20]
              });
                for (let x = 0; x < rows.length; x++) {
                    tabled.push([rows[x].nama, rows[x].iddosen])
                }
                DosenView.isiTabel();
            })
    }
    static tabel() {
                this.isiTabelNoInterface();
                this.interface();
    }
    static search() {
        rl.question('Masukan ID Dosen: ', (input) => {
            inputDosen = input.trim();
            ModelDosen.databaseSearch(input, (rows) => {
                if (rows.length == 1) {
                    rowsDosen = rows;
                    DosenView.hasilCari()
                    this.interface()
                } else {
                    DosenView.notFound();
                    this.interface()
                }
            })
        })
    }
    static add() {
        DosenView.tambah();
        rl.question('ID Dosen: ', (input1) => {
            input1.trim()
            if (input1 == 1) this.interface();
            rl.question('Nama Dosen:', (input2) => {
                input2.trim()
                inputDosen = input2
                ModelDosen.databaseAdd(input1, input2);
                DosenView.suksesTambah(); 
                this.tabel();
            })
        })
    }
    static delete() {
        rl.question('Masukkan ID Dosen yang akan dihapus: ', (input1) => {
            inputDosen = input1.trim()
            ModelDosen.databaseSearch(input1, (rows) => {
                    if (rows.length == 1) {
                       ModelDosen.databaseDelete(input1)
                        DosenView.suksesHapus(); 
                        this.tabel();
                    } else {
                        DosenView.notFound();
                        this.interface();
                    }
                })
        })
    }
}