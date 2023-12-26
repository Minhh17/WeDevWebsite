const adminRouter = require('./admin.routes');
const studentRouter = require('./student.routes');
const db = require('../config/db/index');

function routes(app) {

  app.use('/admin', adminRouter);

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.use('/student', studentRouter);

}

module.exports = routes;