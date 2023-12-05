const express = require('express');
const morgan = require('morgan'); // 
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 127.0.0.1:3000 - localhost:3000
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
