const db = require("../util/database");

module.exports = class Student {
  constructor(
    student_id,
    first_name,
    last_name,
    phone,
    address,
    avatar,
    email,
    dob
  ) {
    this.student_id = student_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
    this.address = address;
    this.avatar = avatar;
    this.email = email;
    this.dob = dob;
  }
  static async getAllStudents() {
    try {
      const [rows, fields] = await db.execute(
        "SELECT * FROM english_center.student"
      );

      // load data from database
      const students = [];
      for (const student of rows) {
        students.push(
          new Student(
            student.student_id,
            student.first_name,
            student.last_name,
            student.phone,
            student.address,
            student.avatar,
            student.email,
            student.dob
          )
        );
      }
      return students;
    } catch (err) {
      throw err;
    }
  }

  static async addStudent(student) {
    try {
      const result = await db.execute(
        "INSERT INTO english_center.student (student_id, first_name, last_name, phone, address, avatar, email, dob) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          student.student_id,
          student.first_name,
          student.last_name,
          student.phone,
          student.address,
          student.avatar,
          student.email,
          student.dob,
        ]
      );
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getStudentById(student_id) {
    try {
      const [rows, fields] = await db.execute(
        "SELECT * FROM english_center.student WHERE student_id = ?",
        [student_id]
      );
      const student = rows[0];
      return new Student(
        student.student_id,
        student.first_name,
        student.last_name,
        student.phone,
        student.address,
        student.avatar,
        student.email,
        student.dob
      );
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async updateStudent(student) {
    try {
      const result = await db.execute(
        "UPDATE english_center.student SET first_name = ?, last_name = ?, phone = ?, address = ?, avatar = ?, email = ?, dob = ? WHERE student_id = ?",
        [
          student.first_name,
          student.last_name,
          student.phone,
          student.address,
          student.avatar,
          student.email,
          student.dob,
          student.student_id,
        ]
      );
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async deleteStudent(student_id) {
    try {
      const result = await db.execute(
        "DELETE FROM english_center.student WHERE student_id = ?",
        [student_id]
      );
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
