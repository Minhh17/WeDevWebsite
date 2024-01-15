const Student = require('../models/student');


class AdminController {   // function handler 

    // [GET] /news
    index(req, res) {
        // console.log(req.session.account);
        Student.getDataFromDB(req.query.title, (err, data) => {
            if (err || req.session.account == null) {
                res.render('page404.ejs');
            } else {
                res.render('admin/admin', { data: data, account: req.session.account }); // Pass the data to the view
            }
        });
    }

    // [GET] /admin/create
    createStudent(req, res) {
        if (req.session.account == null) {
            res.render('page404.ejs');
        }
        res.render('admin/createStudent');
    }

    // [POST] /admin/save
    save(req, res) {
        Student.create(req.body);  // call create function in model
        res.redirect('/admin');
    }

    // [GET] /student/edit/:id
    edit(req, res) {
        Student.findById(req.params.id, (err, data) => {   
            console.log(req.params.id);         
            if (err) {
                res.status(500).send({
                    message: "Error retrieving student with id " + req.params.id
                });
            } else {
                res.render('admin/updateStudent', { data: data });
            }
        });
    }

    // [PUT] /admin/:id
    update(req, res) {
        Student.update(req.params.id, new Student(req.body), (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error updating student with id " + req.params.id
                });
            } else {
                res.redirect('/admin');
            }
        });
    }

    // [DELETE] /admin/:id
    destroy(req, res) {
        Student.remove(req.params.id, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Could not delete student with id " + req.params.id
                });
            } else {
                res.redirect('/admin');
            }
        });
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