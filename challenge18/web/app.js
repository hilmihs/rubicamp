const express = require('express')

const app = express()
const port = 3000
const data = []

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => { //ini namanya router get
  res.render('list', {rows: data})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})