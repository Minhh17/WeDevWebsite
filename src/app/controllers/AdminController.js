const Student = require('../models/student');

class AdminController {   // function handler 

    // [GET] /news
    index(req, res) {
        console.log(req.session.account);
        Student.getDataFromDB(req.query.title, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving students."
                });
            } else {
                res.render('admin/admin', { data: data, account: req.session.account }); // Pass the data to the view
            }
        });
    }

    // [GET] /student/create
    createStudent(req, res) {
        res.render('admin/createStudent');
    }

    // [POST] /student/save
    save(req, res) {
        // res.json(req.body);

        Student.create(req.body);  // call create function in model

        res.redirect('/student');

    }

    // [GET] /student/getData
    getDataFromDB(req, res) {
        Student.getDataFromDB(req.query.title, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving students."
                });
            else {
                res.send(data);
                return data;
            }
        });
    }
}

module.exports = new AdminController;