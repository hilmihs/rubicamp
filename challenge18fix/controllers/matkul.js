import  MatkulView  from "../views/matkul.js";
import  ModelMatkul  from "../models/matkul.js";
import ControllerMenu from "./menu.js"; 
import { rl } from "../main_university.js";
import Table from 'cli-table'

export let rowsMatkul;
export let inputMatkul;
export var tablemk = null;

export default class ControllerMatkul {
    static interface() {
        MatkulView.menu();
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
                MatkulView.error()
                this.interface();
            }
        }
        )   
    }
    static isiTabelNoInterface() {
        ModelMatkul.databaseTabel((rows) => {
            tablemk = new Table({
                head: ['Nama Mata kuliah', 'ID Mata kuliah', 'SKS']
                , colWidths: [20, 20, 20]
              });
            for (let x = 0; x < rows.length; x++) {
                tablemk.push([rows[x].namamatkul, rows[x].idmatkul, rows[x].sks])
            }
                    MatkulView.isiTabel(); 
        })
    }
    static tabel() {
                    this.isiTabelNoInterface();
                    this.interface();
      
    }
    static search() {
        rl.question('Masukan ID Matkul: ', (input) => {
            inputMatkul = input.trim();
            ModelMatkul.databaseSearch(input, (rows) => {
                    if (rows.length == 1) {
                        rowsMatkul = rows;
                        MatkulView.hasilCari() 
                        this.interface();
                    } else {
                        MatkulView.notFound(); 
                        this.interface()
                    }
                })
        })
    }
    static add() {
        MatkulView.tambah();
        rl.question('ID Matkul: ', (input1) => {
            input1.trim()
            rl.question('Nama Matkul:', (input2) => {
                input2.trim()
                inputMatkul = input2;
                rl.question('Jumlah SKS: ', (input3) => {
                    input3.trim()
                    ModelMatkul.databaseAdd(input1, input2, input3)
                    MatkulView.suksesTambah();
                    this.tabel();
                })
            })
        })
    }
    static delete() {
        MatkulView.kembali()
        rl.question('Masukkan ID Matkul yang akan dihapus: ', (input1) => {
            input1.trim()
            ModelMatkul.databaseSearch(input1, (rows) => {
                    if (rows.length == 1) {
                        inputMatkul = input1;
                       ModelMatkul.databaseDelete(input1);
                        MatkulView.suksesHapus(); 
                        this.tabel();
                    } else {
                        MatkulView.notFound();
                        this.interface();
                    }
                })
        })
    }
}