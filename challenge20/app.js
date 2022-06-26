
const sqlite3 = require('sqlite3')
const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
let data;

const db = new sqlite3.Database('data.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

function listDb(callback) {
  db.all("SELECT * FROM data ORDER BY id ASC", [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    } else {
      callback(rows);
    }
  })
}

function writeDb(id, string, integer, float, date, boolean) {
  db.run(`INSERT INTO DATA(id, string, integerinput, floatinput, dateinput, booleaninput) 
  VALUES (?, ?, ?, ?, ?, ?)`, [id, string, integer, float, date, boolean], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
  })
}

function deleteDb(id) {
  db.run('delete from data where id=?', [id], (err, rows) => {
    if (err) return console.error(err.message);
  })
}

function updateDb(string, integer, float, date, boolean, id) {
  db.run('UPDATE data SET string = ?, integerinput = ?, floatinput = ?, dateinput = ?, booleaninput = ? WHERE id = ?', [string, integer, float, date, boolean, id], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
  })
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  listDb((rows) => {
    data = rows;
    res.render('list', { rows: data })
  })
})

app.get('/add', (req, res) => {
  res.render('add')
})

app.post('/add', (req, res) => {
  writeDb(parseInt(req.params.id), req.body.string, req.body.integer, req.body.float, req.body.date, req.body.boolean);
  setTimeout(() => {
    res.redirect('/')
  }, 100);
})

app.get('/edit/:id', (req, res) => {
  listDb((rows) => {
    data = rows;
    const index = parseInt(req.params.id);
    res.render('edit', { item: data[req.params.id], angka: index})
  })
})

app.post('/edit/:id', (req, res) => {
  console.log(`
  ${req.body.string} ${req.body.integer} ${req.body.float} ${req.body.date} ${req.body.boolean} ${parseInt(req.params.id)}`)
  updateDb(req.body.string, req.body.integer, req.body.float, req.body.date, req.body.boolean, parseInt(req.params.id));
  // data[req.params.id] = { id: req.params.id, string: req.body.string, integer: req.body.integer, float: req.body.float, date: req.body.date, boolean: req.body.boolean }
  // // writeData(data);
  // listDb((rows) => {
  //   data = rows;

  // })
  res.redirect('/')
})

app.get('/delete/:id', (req, res) => {
  deleteDb(req.params.id);
  res.redirect('/');
})

app.get('/search', (req, res) => {
  res.render('search')
})

app.post('/search', (req, res) => {
  let id = req.body.id;
  let string = req.body.string;
  let integer = req.body.integer;
  let float = req.body.float;
  let startDate = req.body.StartDate;
  let endDate = req.body.EndDate;
  let boolean = req.body.boolean;
  let idRadio = req.body.idRadio;
  console.log(`${id}, ${idRadio} ${string}, ${integer}, ${float}, ${startDate}, ${endDate}, ${boolean}`)
  res.redirect('/')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})