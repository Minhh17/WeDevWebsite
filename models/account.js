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
        "SELECT * FROM english_center.account WHERE username = binary ? AND password = binary ?",
        [username, password]
      );
      return rows;
    } catch (err) {
      throw err;
    }
  }

  static async getAccountInfomation(username) {
    try {
      const [rows, fields] = await db.execute(
        "SELECT * FROM english_center.account WHERE username = ?",
        [username]
      );

      // get user infomation
      if (rows[0].user_type == 0) {
        const [rows2, fields2] = await db.execute(
          "SELECT * FROM english_center.admin WHERE admin_id = ?",
          [rows[0].admin_id]
        );
        return rows2;
      } else if (rows[0].user_type == 1) {
        const [rows2, fields2] = await db.execute(
          "SELECT * FROM english_center.lecturer WHERE lecturer_id = ?",
          [rows[0].lecturer_id]
        );
        return rows2;
      } else {
        const [rows2, fields2] = await db.execute(
          "SELECT * FROM english_center.student WHERE student_id = ?",
          [rows[0].student_id]
        );
        return rows2;
      }
    } catch (err) {
      throw err;
    }
  }

  static async addAccount(account) {
    try {
      const [rows, fields] = await db.execute(
        "INSERT INTO english_center.account (username, password, user_type, admin_id, lecturer_id, student_id) VALUES (?, ?, ?, ?, ?, ?)",
        [
          account.username,
          account.password,
          account.user_type,
          account.admin_id,
          account.lecturer_id,
          account.student_id,
        ]
      );
      return rows;
    } catch (err) {
      throw err;
    }
  }

  static async getAccountById(account_id) {
    try {
      const [rows, fields] = await db.execute(
        "SELECT * FROM english_center.account WHERE student_id = ? OR admin_id = ? OR lecturer_id = ?",
        [account_id, account_id, account_id]
      );
      return rows[0];
    } catch (err) {
      throw err;
    }
  }

  static async updateAccount(account) {
    try {
      const result = await db.execute(
        "UPDATE english_center.account SET username = ?, password = ?, user_type = ?, admin_id = ?, lecturer_id = ?, student_id = ? WHERE student_id = ? OR admin_id = ? OR lecturer_id = ?",
        [
          account.username,
          account.password,
          account.user_type,
          account.admin_id,
          account.lecturer_id,
          account.student_id,
          account.student_id,
          account.admin_id,
          account.lecturer_id,
        ]
      );
    } catch (err) {
      throw err;
    }
  }

  static async deleteAccount(account_id) {
    try {
      const result = await db.execute(
        "DELETE FROM english_center.account WHERE student_id = ? OR admin_id = ? OR lecturer_id = ?",
        [account_id, account_id, account_id]
      );
    } catch (err) {
      throw err;
    }
  }

  static changePassword(account_id, new_password) {
    try {
      const result = db.execute(
        "UPDATE english_center.account SET password = ? WHERE student_id = ? OR admin_id = ? OR lecturer_id = ?",
        [new_password, account_id, account_id, account_id]
      );
    } catch (err) {
      throw err;
    }
  }
};
