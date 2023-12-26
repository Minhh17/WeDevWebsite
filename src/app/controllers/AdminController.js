const courses = require('../models/student');

class AdminController {   // function handler 

    // [GET] /news
    index(req, res) {
        res.render('admin');

    }
}

module.exports = new AdminController;