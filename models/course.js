const db = require("../util/database");

module.exports = class Course {
  constructor(course_id, title, infomation, ref, fee, thumbnail) {
    this.course_id = course_id;
    this.title = title;
    this.infomation = infomation;
    this.ref = ref;
    this.fee = fee;
    this.thumbnail = thumbnail;
  }

  static async getAllCourses() {
    try {
      const [rows, fields] = await db.execute(
        "SELECT * FROM english_center.course"
      );

      // load data from database
      const courses = [];
      for (const course of rows) {
        courses.push(
          new Course(
            course.course_id,
            course.title,
            course.infomation,
            course.ref,
            course.fee,
            course.thumbnail
          )
        );
      }
      return courses;
    } catch (err) {
      throw err;
    }
  }
};
