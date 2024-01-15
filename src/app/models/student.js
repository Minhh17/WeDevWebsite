const express = require("express");
const sql = require("../../config/db/index");

// constructor
const Student = function (student) {  // constructor function
  this.first_name = student.first_name;
  this.last_name = student.last_name;
  this.phone = student.phone;
  this.email = student.email;
  this.address = student.address;
  this.dob = student.dob;
};

Student.create = (newStudent, result) => {
  sql.query("INSERT INTO student (first_name, last_name, phone, address, email, dob) VALUES (?, ?, ?, ?, ?, ?)", [
    newStudent.first_name,
    newStudent.last_name,
    newStudent.phone,
    newStudent.address,
    newStudent.email,
    newStudent.dob,
  ]
    , (err, res) => {  // INSERT INTO student SET ?
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created student: ", { id: res.insertId, ...newStudent });
      // result(null, { id: res.insertId, ...newStudent });
    });
};

Student.findById = (student_id, result) => {
  sql.query(`SELECT * FROM student WHERE student_id LIKE ${student_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    else if (res.length) {
      console.log("found student: ", res[0]);
      result(null, res[0]);
      return;
    }
  });
};

Student.update = (student_id, student, result) => {
  sql.query(
    "UPDATE student SET first_name = ?, last_name = ?, phone = ?, address = ?, email = ?, dob = ? WHERE student_id = ?",
    [student.first_name, 
     student.last_name,
     student.phone,
     student.address,
     student.email,
     student.dob,
     student_id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      } else if (res.affectedRows == 0) {
        // khong tim thay student voi student_id
        result({ kind: "not_found" }, null);
        return;
      } else {
        console.log("updated student: ", { student_id: student_id, ...student });
        result(null, { student_id: student_id, ...student });
        return;
      }
    }
  );
};

Student.remove = (student_id, result) => {
  sql.query("DELETE FROM student WHERE student_id = ?", student_id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    } else if (res.affectedRows == 0) {
      // khong tim thay student voi student_id
      result({ kind: "not_found" }, null);
      return;
    } else {
      console.log("deleted student with student_id: ", student_id);
      result(null, res);
      return;
    }
  });
};

Student.getDataFromDB = (title, result) => {
  // let query = "Select * from student cross join enrollment on student.student_id = enrollment.student_id cross join exam_process on exam_process.enrollment_id = enrollment.enrollment_id";
  let query = "Select * from student";
  if (title) {
    query += ` WHERE student_id LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    // console.log("student: ", res);
    result(null, res);
  });
};


module.exports = Student;