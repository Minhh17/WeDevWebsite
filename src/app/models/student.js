const sql = require("../../config/db/index"); 

// constructor
const Student = function(student) {  // constructor function
  this.title = student.title;
  this.description = student.description;
  this.published = student.published;  
};

Student.create = (newStudent, result) => {
  sql.query("INSERT INTO student SET ?", newStudent, (err, res) => {  // INSERT INTO student SET ?
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created student: ", { id: res.insertId, ...newStudent });
    result(null, { id: res.insertId, ...newStudent });
  });
};

Student.getDataFromDB = (title, result) => {
  // let query = "Select * from student cross join enrollment on student.student_id = enrollment.student_id cross join exam_process on exam_process.enrollment_id = enrollment.enrollment_id";
  let query = "Select * from student";
  if (title) {
    query += ` WHERE last_name LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("student: ", res);
    result(null, res);
  });
};



module.exports = Student;