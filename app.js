// get path of the file
const path = require("path");

// import express and body-parser
const express = require("express");
const bodyParser = require("body-parser");

// import error controller
const errorController = require("./controllers/error");

// import express-session
const session = require("express-session");

// create express app
const app = express();

// set view engine and views path
app.set("view engine", "ejs");
app.set("views", "views");

// import routes
const adminRoutes = require("./routes/admin");
const studentRoutes = require("./routes/student");
const lecturerRoutes = require("./routes/lecturer");
const homeRoutes = require("./routes/home");
const account = require("./routes/account");
const authRoutes = require("./routes/auth");

// config session
app.use(
  session({
    secret: "we dev website",
    resave: false,
    saveUninitialized: false,
  })
);

// use body-parser and static files
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// use routes
app.use("/admin", adminRoutes);
app.use("/student", studentRoutes);
app.use("/lecturer", lecturerRoutes);
app.use(homeRoutes);
app.use(account);
app.use(authRoutes);

// use error controller
app.use(errorController.get404);

// listen on port 3000
app.listen(3000);
