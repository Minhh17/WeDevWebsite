const adminRouter = require('./admin.routes');
const studentRouter = require('./student.routes');
const loginRouter = require('./login.routes');
const db = require('../config/db/index');

function routes(app) {
  app.get('/', (req, res) => {
    console.log(req.session.account);
    // req.session.account = { id: 1, role: 'admin' };
    res.render('index', {account: req.session.account });
  });

  app.get('/profile', (req, res) => {
    res.render('profile', {account: req.session.account });
  });
  app.get('/ielts', (req, res) => {
    res.render('ielts', {account: req.session.account });
  }); 

  app.use('/admin', adminRouter);

  app.use('/student', studentRouter);

  app.use('/login', loginRouter);

  app.use((err, req, res, next) => {
    res.status(500).render('page404'); // Render the custom error page
});

// Catch 404 and render the custom error page
app.use((req, res, next) => {
    res.status(404).render('page404');
});

  // app.get('/login', (req, res) => {
  //   res.render('login');
  // });

}

module.exports = routes;