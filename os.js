const express = require('express');
const path = require('path');
const os = express();

os.use('/src', express.static(path.resolve(__dirname, 'src')));
os.use('/modules', express.static(path.resolve(__dirname, 'node_modules')));

os.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

os.listen(3024, () => {
  console.log('Markich OS started');
});
