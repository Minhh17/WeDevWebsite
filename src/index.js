const express = require('express');
const routes = require('./routes/index.routes');
const db = require('./config/db/index');
const morgan = require('morgan'); // bắn ra log ở local vs các request đến node server
const { engine } = require('express-handlebars'); // template engine handlebarsconst { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');


// HTTP logger
app.use(morgan('combined'));

//  Template engine

app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'handlebars'); // set express-handlebars là template engine mặc định
app.set('views', path.join(__dirname, 'resources', 'views')) // set đường dẫn đến thư mục chứa các file view

// Routes init
routes(app);  // luồng đi ở đây là đi từ routes này nhận 1 cái express instant app -> index.router.js -> news -> newsController -> newsModel -> database

// Connect to DB
db.connect();

// 127.0.0.1:3000 - localhost:3000
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
