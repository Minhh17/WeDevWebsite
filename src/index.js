const express = require('express');
const morgan = require('morgan'); // bắn ra log ở local vs các request đến node server
const app = express();
const port = 3000;

const route = require("./routes");

app.use(morgan('combined'));
route(app);

// 127.0.0.1:3000 - localhost:3000
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
