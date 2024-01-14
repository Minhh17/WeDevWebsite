const db = require("../util/database");

module.exports = class Lecturer {
  constructor(
    lecturer_id,
    first_name,
    last_name,
    phone,
    address,
    avatar,
    email,
    dob,
    info
  ) {
    this.lecturer_id = lecturer_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
    this.address = address;
    this.avatar = avatar;
    this.email = email;
    this.dob = dob;
    this.info = info;
  }

  static async getAllLecturers() {
    try {
      const [rows, fields] = await db.execute(
        "SELECT * FROM english_center.lecturer"
      );

      // load data from database
      const lecturers = [];
      for (const lecturer of rows) {
        lecturers.push(
          new Lecturer(
            lecturer.lecturer_id,
            lecturer.first_name,
            lecturer.last_name,
            lecturer.phone,
            lecturer.address,
            lecturer.avatar,
            lecturer.email,
            lecturer.dob,
            lecturer.info
          )
        );
      }
      return lecturers;
    } catch (err) {
      throw err;
    }
  }

  static async addLecturer(lecturer) {
    try {
      const result = await db.execute(
        "INSERT INTO english_center.lecturer (lecturer_id, first_name, last_name, phone, address, avatar, email, dob, info) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          lecturer.lecturer_id,
          lecturer.first_name,
          lecturer.last_name,
          lecturer.phone,
          lecturer.address,
          lecturer.avatar,
          lecturer.email,
          lecturer.dob,
          lecturer.info,
        ]
      );
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async getLecturerById(lecturer_id) {
    try {
      const [rows, fields] = await db.execute(
        "SELECT * FROM english_center.lecturer WHERE lecturer_id = ?",
        [lecturer_id]
      );
      if (rows.length < 1) {
        return null;
      }
      const lecturer = rows[0];
      return new Lecturer(
        lecturer.lecturer_id,
        lecturer.first_name,
        lecturer.last_name,
        lecturer.phone,
        lecturer.address,
        lecturer.avatar,
        lecturer.email,
        lecturer.dob,
        lecturer.info
      );
    } catch (err) {
      throw err;
    }
  }

  static async updateLecturer(lecturer) {
    try {
      const result = await db.execute(
        "UPDATE english_center.lecturer SET first_name = ?, last_name = ?, phone = ?, address = ?, avatar = ?, email = ?, dob = ?, info = ? WHERE lecturer_id = ?",
        [
          lecturer.first_name,
          lecturer.last_name,
          lecturer.phone,
          lecturer.address,
          lecturer.avatar,
          lecturer.email,
          lecturer.dob,
          lecturer.info,
          lecturer.lecturer_id,
        ]
      );
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async deleteLecturer(lecturer_id) {
    try {
      const result = await db.execute(
        "DELETE FROM english_center.lecturer WHERE lecturer_id = ?",
        [lecturer_id]
      );
      return result;
    } catch (err) {
      throw err;
    }
  }
};
