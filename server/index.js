const express = require('express');
const app = express()
const path = require('path')
const cors = require('cors')
const port = 3000
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'dist')))

app.get('/', (req, res) => {
  res.send();
})

app.get('/trees/:branchName', (req, res) => {
  console.log(req.params.branchName)
})

// Listen on port 3000
app.listen((port), () => {
  console.log('Listening on port ' + port)
});