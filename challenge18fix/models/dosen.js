import { db } from '../db/connection.js'

export default class ModelDosen {
    static databaseTabel(callback) {
        db.all('SELECT * FROM dosen order by iddosen asc', [], (err, rows) => {
            if (err) {
                return console.error(err.message);
            } else {
                callback(rows);
            }
        })
    }
    static databaseSearch(iddosen, callback) {

        db.all("SELECT * FROM dosen where iddosen=?", [iddosen], (err, rows) => {
            if (err) {
                return console.error(err.message)
            } else {
                callback(rows);
            }
        })
    }
    static databaseAdd(iddosen, nama) {
        db.run('insert into dosen(iddosen, nama) values (?, ?);', [iddosen, nama], (err, rows) => {
            if (err) return console.error(err.message);
        })
    }
    static databaseDelete(iddosen) {
        db.all('delete from dosen where iddosen=?;', [iddosen], (err, rows) => {
            if (err) { return console.error(err.message); }
        })
    }
}