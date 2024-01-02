const Student = require("../models/student");

class StudentController {   // function handler 

    // [GET] /student
    index(req, res) {
        Student.getDataFromDB(req.query.title, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving students."
                });
            } else {
                res.render('student', { data: data }); // Pass the data to the view
            }
        });
    }

    // [GET] /student/create
    create(req, res) {
        res.render('createStudent');
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

module.exports = new StudentController;
