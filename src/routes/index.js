function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World!');
      });
}

module.exports = routes;