const Bundler = require('parcel-bundler');
const express = require('express');
const app = express()
const cors = require('cors')
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.static('./dist'))

app.get('/', (req, res) => {
  res.send();
})

app.get('/trees/:branchName', (req, res) => {
  console.log(req.params.branchName)
})

// Listen on port 3000
app.listen(3000);