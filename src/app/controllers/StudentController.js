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
                res.render('student/student', { data: data, account: req.session.account }); // Pass the data to the view
            }
        });
    }
}

module.exports = new StudentController;
