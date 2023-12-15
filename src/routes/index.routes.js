const newsRouter = require('./news.routes');

function routes(app) {

  app.use('/news', newsRouter);


  app.get('/', (req, res) => {
    res.render('home');
  });


  
}

module.exports = routes;