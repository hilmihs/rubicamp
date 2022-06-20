import { db } from '../db/connection.js'

export default class ModelKontrak {
    static databaseTabel(callback) {
        db.all('SELECT * FROM kontrak order by id asc', [], (err, rows) => {
            if (err) {
                return console.error(err.message);
            } else {
                callback(rows);
            }
        })
    }
    static databaseSearch(id, callback) {
        db.all("SELECT * FROM Kontrak where id=?", [id], (err, rows) => {
            if (err) { return console.error(err.message); }
            else {
                callback(rows);
            }
        })
    }
    static databaseAdd(nilai, nim, dosen_id, matkul_id, jurusan_id) {
        db.run('insert into kontrak(nilai, nim, dosen_id, matkul_id, jurusan_id) values (?, ?, ?, ?, ?);', [nilai, nim, dosen_id, matkul_id, jurusan_id], (err, rows) => {
            if (err) return console.error(err.message);
        })
    }
    static databaseDelete(id) {
        db.all('delete from kontrak where id=?', [id], (err, rows) => {
            if (err) { return console.error(err.message); }
        })
    }
}