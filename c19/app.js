const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))  

function writeData(value) {
    fs.writeFileSync('data.json', JSON.stringify(value, null, 3), 'utf-8')
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('list', {rows: data})
})

app.get('/add', (req, res) => {
    res.render('add')
})

app.post('/add', (req, res) => {
    data.push({ string: req.body.string, integer: req.body.integer, float: req.body.float, date: req.body.date, boolean: req.body.boolean})
    writeData(data);      
    res.redirect('/')  
})

app.get('/edit/:id', (req, res) => {
    res.render('edit', {item: data[req.params.id]})
})

app.post('/edit/:id', (req, res) => {
    data[req.params.id] = { id: req.params.id, string: req.body.string, integer: req.body.integer, float: req.body.float, date: req.body.date, boolean: req.body.boolean}
    writeData(data);      
    res.redirect('/')  
})

app.get('/delete/:id', (req, res) => {
  const index = req.params.id
  data.splice(index, 1)
  writeData(data);
  res.redirect('/');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})