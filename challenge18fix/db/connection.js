import sqlite3 from 'sqlite3'

export const db = new sqlite3.Database("./db/university2.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});