const db = require("../util/database");

module.exports = class Account {
  constructor(
    username,
    password,
    user_type,
    admin_id,
    lecturer_id,
    student_id
  ) {
    this.username = username;
    this.password = password;
    this.user_type = user_type;
    this.admin_id = admin_id;
    this.lecturer_id = lecturer_id;
    this.student_id = student_id;
  }

  static async checkAccount(username, password) {
    try {
      const [rows, fields] = await db.execute(
        "SELECT * FROM english_center.account WHERE username = ? AND password = ?",
        [username, password]
      );
      return rows;
    } catch (err) {
      throw err;
    }
  }
};
