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
    dob
  ) {
    this.lecturer_id = lecturer_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
    this.address = address;
    this.avatar = avatar;
    this.email = email;
    this.dob = dob;
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
            lecturer.dob
          )
        );
      }
      return lecturers;
    } catch (err) {
      throw err;
    }
  }
};
