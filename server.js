const Bundler = require('parcel-bundler');
const express = require('express');
const app = express()
const cors = require('cors')
app.use(express.urlencoded({extended: true}))


app.use(cors())
const file = './src/index.html'; // Pass an absolute path to the entrypoint here
const options = {bundleNodeModules: true}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

app.get('/trees/:branchName', (req, res) => {
  console.log(req.params.branchName)
})

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(bundler.middleware());
// Listen on port 3000
app.listen(3000);