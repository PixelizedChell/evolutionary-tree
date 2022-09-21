const Bundler = require('parcel-bundler');
const express = require('express');
const app = express()

app.use(express.urlencoded({extended: true}))

const file = './src/index.html'; // Pass an absolute path to the entrypoint here
const options = {bundleNodeModules: true}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

app.get('/trees/:tree', (req, res) => {
  res.send(`And now there's lots of TREEEEEES
  (because it's warmer)`)
})

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(bundler.middleware());

// Listen on port 3000
app.listen(3000);