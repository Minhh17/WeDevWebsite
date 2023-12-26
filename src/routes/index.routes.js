const adminRouter = require('./admin.routes');

function routes(app) {

  app.use('/admin', adminRouter);

  app.get('/', (req, res) => {
    res.render('index');
  });
}

module.exports = routes;