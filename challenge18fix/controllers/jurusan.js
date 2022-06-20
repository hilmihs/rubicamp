import ControllerMenu from "./menu.js";
import JurusanView from "../views/jurusan.js";
import ModelJurusan from "../models/jurusan.js";

import { rl } from "../main_university.js";
import Table from "cli-table";


export let tablej = null;
export let rows;
export let rowsJurusan;
export let inputJurusan;

export default class ControllerJurusan {
    static interface() {
        JurusanView.menu();
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
                JurusanView.error();
                this.interface();
            }
        }
        )
    }
    static isiTabelNoInterface() {
        ModelJurusan.databaseTabel((rows) => {
            tablej = new Table({
                head: ['Nama Jurusan', 'ID Jurusan']
                , colWidths: [20, 20]
            });
            for (let x = 0; x < rows.length; x++) {
                tablej.push([rows[x].namajurusan, rows[x].idjurusan])
            }
            JurusanView.isiTabel()
        })
    }
    static tabel() {
        this.isiTabelNoInterface()
        this.interface();
    }

    static search() {
        rl.question('Masukan ID Jurusan: ', (input) => {
            inputJurusan = input.trim();
            ModelJurusan.databaseSearch(input, (rows) => {
                if (rows.length == 1) {
                    rowsJurusan = rows;
                    JurusanView.hasilCari();
                    this.interface();
                } else {
                    JurusanView.notFound();
                    this.interface()
                }
            })
        })
    }
    static add() {
        JurusanView.tambah();
        rl.question('ID Jurusan: ', (input1) => {
            input1.trim()
            rl.question('Nama Jurusan: ', (input2) => {
                input2.trim()
                inputJurusan = input2;
                ModelJurusan.databaseAdd(input1, input2);
                JurusanView.suksesTambah();
                this.tabel();
            })
        })
    }
    static delete() {
        rl.question('Masukkan ID Jurusan yang akan dihapus: ', (input1) => {
            inputJurusan = input1.trim()
            ModelJurusan.databaseSearch(input1, (rows) => {
                if (rows.length == 1) {
                    ModelJurusan.databaseDelete(input1);
                    JurusanView.suksesHapus();
                    this.tabel();
                } else {
                    JurusanView.notFound();
                    this.interface();
                }
            })
        })
    }
}