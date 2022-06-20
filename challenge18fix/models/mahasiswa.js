import { db } from '../db/connection.js'

export default class ModelMahasiswa {
  static databaseTabel(callback) {
    db.all("select * from mahasiswa order by nim asc", [], (err, rows) => {
      if (err) {
        return console.error(err.message);
      } else {
        callback(rows);
      }
    })
  }
  static databaseSearch(nim, callback) {
    db.all("SELECT * FROM mahasiswa where nim=?", [nim.trim()], (err, rows) => {
      if (err) {
        return console.error(err.message);
      } else {
        callback(rows);
      }
    })
  }
  static databaseAdd(nim, nama, alamat, jurusan, umur) {
      db.run('insert into mahasiswa(nim, nama, alamat, jurusan, umur) values (?, ?, ?, ?, ?)', [nim.trim(), nama, alamat, jurusan.trim(), umur.trim()], (err, rows) => {
        if (err) return console.error(err.message);
      })

  }
  static databaseDelete(nim) {
    db.run('delete from mahasiswa where nim=?', [nim], (err, rows) => {
      if (err) return console.error(err.message);
  })
  }
}