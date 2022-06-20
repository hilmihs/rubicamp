import { db } from '../db/connection.js'  

export default class User {

  static auth(username, callback) {
    db.all('select * from users where username=?', [username], (err, rows) => {
      if (err) {
        return console.error(err.message);
      } else {
        callback(rows)
      }
    })
  }
}