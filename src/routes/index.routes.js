const adminRouter = require('./admin.routes');
const studentRouter = require('./student.routes');
const db = require('../config/db/index');

function routes(app) {

  app.use('/admin', adminRouter);

  app.use('/student', studentRouter);

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/login', (req, res) => {
    res.render('login');
  });

}

module.exports = routes;