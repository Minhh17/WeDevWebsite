const express = require('express');
const routes = require('./routes/index.routes');
const db = require('./config/db/index');
const morgan = require('morgan'); // bắn ra log ở local vs các request đến node server
const ejs = require('ejs') // template engine handlebarsconst { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');
const session = require("express-session");


app.use(express.static(path.join(__dirname,'public'))); // set đường dẫn public
console.log(path.join(__dirname,'public'));

// HTTP logger
app.use(morgan('combined'));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//  Template engine
app.set('view engine','ejs') // set ejs là template engine mặc định

// Set path views
app.set('views', path.join(__dirname, 'resources','views')) // set đường dẫn views
console.log(path.join(__dirname, 'resources','views'));

// Session config
app.use(
  session({
    secret: "we dev website",
    resave: false,
    saveUninitialized: false,
  })
);

// Routes init
routes(app);  // luồng đi ở đây là đi từ routes này nhận 1 cái express instant app -> index.router.js -> news -> newsController -> newsModel -> database

// Connect to DB
// db.connect();

// 127.0.0.1:3000 - localhost:3000
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
