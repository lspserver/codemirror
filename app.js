#!/usr/bin/env node

"use strict";

let fs = require('fs');
let express = require('express');

let app = express();

app.listen(4000, () => {
  console.log('Listening on port 4000');
});

app.use('/dist', express.static('dist', {
  extensions: 'js'
}));

app.engine('html', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    let rendered = content.toString()
    return callback(null, rendered)
  });
});

app.set('views', '');
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index.html');
});
