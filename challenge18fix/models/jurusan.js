import { db } from '../db/connection.js'

export default class ModelJurusan {
    static databaseTabel(callback) {
        db.all('SELECT * FROM jurusan order by idjurusan asc', [], (err, rows) => {
            if (err) {
                return console.error(err.message);
            } else {
                callback(rows)
            }
        })
    }
    static databaseSearch(id, callback) {
        db.all("SELECT * FROM jurusan where idjurusan=?", [id.trim()], (err, rows) => {
            if (err) { return console.error(err.message); }
            else {
                callback(rows);
            }
        })
    }
    static databaseAdd(idjurusan, namajurusan) {
        let sqladd =
            db.run('insert into jurusan(idjurusan, namajurusan) values (?, ?);', [idjurusan.trim(), namajurusan], (err, rows) => {
                if (err) return console.error(err.message);
            })
    }
   static databaseDelete(idjurusan) {
        db.run('delete from jurusan where idjurusan=?;', [idjurusan], (err, rows) => {
            if (err) return console.error(err.message); 
        })
    }
}