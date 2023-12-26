const student = require("../models/student");

class StudentController {   // function handler 

    // [GET] /student
    index(req, res) {
        student.getDataFromDB(req.query.title, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving students."
                });
            } else {
                res.render('student', { data: data }); // Pass the data to the view
            }
        });
    }

    // [GET] /student/getData
    getDataFromDB(req, res) {
        student.getDataFromDB(req.query.title, (err, data) => {
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
