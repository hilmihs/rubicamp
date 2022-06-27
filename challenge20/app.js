
const sqlite3 = require('sqlite3')
const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const { start } = require('repl')
const app = express()
const port = 3000
let data;
let allData;

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

function paginatedList(offset, callback) {
  db.all("SELECT * FROM data ORDER BY id ASC LIMIT 3 OFFSET ?", [offset], (err, rows) => {
    if (err) {
      return console.error(err.message);
    } else {
      callback(rows);
    }
  })
}

function writeDb(string, integer, float, date, boolean) {
  db.run(`INSERT INTO DATA(string, integerinput, floatinput, dateinput, booleaninput) 
  VALUES (?, ?, ?, ?, ?)`, [string, integer, float, date, boolean], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
  })
}

function deleteDb(id) {
  db.run('DELETE FROM data WHERE id=?', [id], (err, rows) => {
    if (err) return console.error(err.message);
  })
}

function updateDb(string, integer, float, date, boolean, id) {
  db.run(`UPDATE data SET 
  string = ?,
  integerinput = ?,
  floatinput = ?,
  dateinput = ?,
  booleaninput = ?
  WHERE id = ?`, [string, integer, float, date, boolean, id], (err, rows) => {
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
  const limit = 3
  let currentOffset;
  let totalPage;
  if (!req.query.page) {
    currentOffset = 1;
  } else {
    currentOffset = parseInt(req.query.page);
  }
  const offset = (limit * currentOffset) - limit;
  paginatedList(offset, (rows) => {
    data = rows;
  //   const page = parseInt(req.query.page);  
  //   const limit = parseInt(req.query.limit);

  //   const startIndex = (page - 1) * limit;
  //   const endIndex = page * limit;
  //   const results = {}
  //   if (endIndex < data.length) {
  //   results.next = {
  //     page: page + 1,
  //     limit: limit
  //   }
  // }
  //   if (startIndex > 0) {
  //   results.previous = {
  //     page: page - 1,
  //     limit: limit
  //   }
  // }
  //   results.results = data.slice(startIndex, endIndex); 
listDb((rows) => {
  allData = rows;
 
  totalPage = Math.ceil(allData.length / limit);
  console.log(totalPage)
    res.render('list', { rows: data, page: totalPage, currentPage: parseInt(req.query.page) })
  })
})
})

app.get('/add', (req, res) => {
  res.render('add')
})

app.post('/add', (req, res) => {
  writeDb(req.body.string, req.body.integer, req.body.float, req.body.date, req.body.boolean);
  res.redirect('/')
})

app.get('/edit/:id', (req, res) => {
  listDb((rows) => {
    data = rows;
    res.render('edit', { item: data[req.params.id - 1], index: parseInt(req.params.id) })
  })
})

app.post('/edit/:id', (req, res) => {
  updateDb(req.body.string, req.body.integer, req.body.float, req.body.date, req.body.boolean, parseInt(req.params.id));
  res.redirect('/')
})

app.get('/delete/:id', (req, res) => {
  deleteDb(req.params.id);
  res.redirect('/');
})

// [Dikerjakan setelah pagination selesai]
// app.get('/search', (req, res) => {
//   res.render('search')
// })

// app.post('/search', (req, res) => {
//   let id = req.body.id;
//   let string = req.body.string;
//   let integer = req.body.integer;
//   let float = req.body.float;
//   let startDate = req.body.StartDate;
//   let endDate = req.body.EndDate;
//   let boolean = req.body.boolean;
//   let idRadio = req.body.idRadio;
//   console.log(`${id}, ${idRadio} ${string}, ${integer}, ${float}, ${startDate}, ${endDate}, ${boolean}`)
//   res.redirect('/')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})