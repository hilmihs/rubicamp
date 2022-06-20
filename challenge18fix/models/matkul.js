import { db } from '../db/connection.js'

export default class ModelMatkul {
    static databaseTabel(callback) {
        db.all('SELECT * FROM matakuliah order by idmatkul asc', [], (err, rows) => {
            if (err) {
                return console.error(err.message);
            } else {
                callback(rows);
            }
        })
    }
    static databaseSearch(idmatkul, callback) {
        db.all("SELECT * FROM matakuliah where idmatkul=?", [idmatkul.trim()], (err, rows) => {
            if (err) { return console.error(err.message); }
            else {
                callback(rows);
            }
        })
    }
    static databaseAdd(idmatkul, namamatkul, sks) {
        db.run('insert into matakuliah(idmatkul, namamatkul, sks) values (?, ?, ?)', [idmatkul, namamatkul, sks], (err, rows) => {
            if (err) return console.error(err.message);
        })
    }
    static databaseDelete(idmatkul) {
        db.all('delete from matakuliah where idmatkul=?', [idmatkul], (err, rows) => {
            if (err) return console.error(err.message); 
        })
    }
}